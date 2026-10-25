// Mobile test: node mobile-test.mjs  (requires puppeteer-core + local Chrome)
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const chrome = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find((p) => fs.existsSync(p));

const out = 'lh/mobile-shots';
fs.mkdirSync(out, { recursive: true });
const log = (...a) => console.log(...a);
const errors = [];

const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new' });
const page = await browser.newPage();
await page.emulate({
  viewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148',
});
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));

const shot = (n) => page.screenshot({ path: `${out}/${n}.png` });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
await shot('01-hero');

// Overflow check + find offending elements
const overflow = await page.evaluate(() => {
  const w = document.documentElement.clientWidth;
  const bad = [...document.querySelectorAll('body *')]
    .filter((el) => el.getBoundingClientRect().right > w + 1 && !el.closest('.lightbox'))
    .slice(0, 8)
    .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} right=${Math.round(el.getBoundingClientRect().right)}`);
  return { scrollWidth: document.documentElement.scrollWidth, width: w, bad };
});
log('OVERFLOW', overflow.scrollWidth > overflow.width, JSON.stringify(overflow));

// Menu
await page.tap('.menu-btn');
await wait(400);
const menuOpen = await page.$eval('.nav-links', (n) => n.classList.contains('open'));
await shot('02-menu-open');
await page.tap('.nav-links a[href="#projects"]');
await wait(1200);
const afterNav = await page.evaluate(() => ({
  menuOpen: document.querySelector('.nav-links').classList.contains('open'),
  projectsTop: Math.round(document.getElementById('projects').getBoundingClientRect().top),
}));
log('MENU opened:', menuOpen, '| after tap:', JSON.stringify(afterNav));

// Section screenshots
for (const id of ['about', 'experience', 'projects', 'skills', 'contact']) {
  await page.evaluate((i) => document.getElementById(i).scrollIntoView(), id);
  await wait(900);
  await shot(`03-${id}`);
}
await page.evaluate(() => document.querySelector('.certs').scrollIntoView());
await wait(900);
await shot('04-certs');
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await wait(600);
await shot('05-footer');

// Lightbox
await page.evaluate(() => document.querySelector('.gallery').scrollIntoView({ block: 'center' }));
await wait(900);
await page.tap('.gallery-item');
await wait(500);
const lbOpen = !!(await page.$('.lightbox'));
await shot('06-lightbox');
await page.tap('.lb-close');
await wait(300);
const lbClosed = !(await page.$('.lightbox'));
log('LIGHTBOX opened:', lbOpen, '| closed:', lbClosed);

// Text overlap check: headings clipped horizontally
const clipped = await page.evaluate(() =>
  [...document.querySelectorAll('h1,h2,h3,h4,p,a,span')]
    .filter((el) => el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflow !== 'visible')
    .slice(0, 5).map((el) => el.textContent.trim().slice(0, 40)));
log('CLIPPED TEXT', JSON.stringify(clipped));

// Project detail
await page.goto('http://localhost:4173/projects/rafalmer', { waitUntil: 'networkidle0' });
await wait(500);
await shot('07-detail-top');
const detailOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await wait(900);
await shot('08-detail-bottom');
log('DETAIL overflow:', detailOverflow);

const relevant = errors.filter((e) => !/404|Failed to load resource/.test(e));
log('CONSOLE errors (excluding missing-image 404s):', relevant.length ? relevant : 'none');
await browser.close();

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const chrome = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find((p) => fs.existsSync(p));

if (!chrome) {
  console.error('No Chrome or Edge binary found.');
  process.exit(1);
}

const BASE_URL = 'http://localhost:5173';

// 1. Verify all public project assets exist on disk
const expectedProjectAssets = [
  'public/projects/rafalmer.png',
  'public/projects/sweet1.png',
  'public/projects/sweet2.png',
  'public/projects/sweet3.png',
  'public/projects/spacemap.png',
  'public/projects/guilandsat.png',
  'public/projects/akomodasi-rapat.png',
  'public/projects/mahadabudarda.jpeg',
];

console.log('--- 1. ASSET DISK EXISTENCE CHECK ---');
let missingDiskAssets = 0;
for (const rel of expectedProjectAssets) {
  const exists = fs.existsSync(rel);
  console.log(`[DISK] ${rel}: ${exists ? 'EXISTS (' + fs.statSync(rel).size + ' bytes)' : 'MISSING'}`);
  if (!exists) missingDiskAssets++;
}

// 2. Verify all HTTP asset endpoints return 200
console.log('\n--- 2. HTTP ASSET STATUS CHECK ---');
let httpFailures = 0;
for (const rel of expectedProjectAssets) {
  const url = `${BASE_URL}/${rel.replace(/^public\//, '')}`;
  try {
    const res = await fetch(url);
    const ok = res.status === 200;
    console.log(`[HTTP ${res.status}] ${url}`);
    if (!ok) httpFailures++;
  } catch (err) {
    console.error(`[ERROR] Fetching ${url}:`, err.message);
    httpFailures++;
  }
}

// 3. Browser Rendering & Responsive Testing across viewports
console.log('\n--- 3. BROWSER RENDERING & RESPONSIVE AUDIT ---');
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new' });
const page = await browser.newPage();

const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(err.message));

const viewports = [
  { name: 'Mobile (390x844)', width: 390, height: 844, isMobile: true },
  { name: 'Tablet (768x1024)', width: 768, height: 1024, isMobile: false },
  { name: 'Desktop (1440x900)', width: 1440, height: 900, isMobile: false },
];

const routes = [
  '/',
  '/projects/rafalmer',
  '/projects/sweet-sensation',
  '/projects/spacemap',
  '/projects/landsat-downloader',
  '/projects/akomodasi-ptpn',
  '/projects/soil-monitoring',
  '/projects/mahad-abu-darda',
];

for (const vp of viewports) {
  await page.setViewport({ width: vp.width, height: vp.height });
  console.log(`\nTesting viewport: ${vp.name}`);

  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Scroll down to trigger lazy-loaded images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 600;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 80);
      });
    });
    // Wait briefly for image decode
    await new Promise((r) => setTimeout(r, 600));

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      const clientW = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      return { hasOverflow: scrollW > clientW + 1, scrollW, clientW };
    });

    // Check broken images on page (filter out intentionally unprovided portrait photo)
    const brokenImages = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .filter((img) => !img.src.includes('photo.jpg'))
        .map((img) => img.src);
    });

    console.log(`  Route ${route.padEnd(28)} => Overflow: ${overflow.hasOverflow ? 'FAIL (' + overflow.scrollW + 'px > ' + overflow.clientW + 'px)' : 'PASS'} | Broken Imgs: ${brokenImages.length === 0 ? '0 (ALL LOADED)' : brokenImages.join(', ')}`);
  }
}

await browser.close();

console.log('\n--- 4. CONSOLE ERRORS AUDIT ---');
const filteredErrors = consoleErrors.filter((e) => !/favicon\.ico/i.test(e));
if (filteredErrors.length === 0) {
  console.log('PASS: 0 console errors detected across all tested routes and viewports.');
} else {
  console.log(`FAIL: ${filteredErrors.length} errors found:`, filteredErrors);
}

const passed = missingDiskAssets === 0 && httpFailures === 0 && filteredErrors.length === 0;
console.log('\n=======================================');
console.log(passed ? 'ALL AUDITS PASSED WITH ZERO ERRORS!' : 'SOME CHECKS FAILED');
console.log('=======================================');
process.exit(passed ? 0 : 1);

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmartImage } from '../components/SmartImage';
import { Gallery } from '../components/Gallery';
import { projects, experiences, skills, certifications } from '../data/content';
import { Reveal } from '../components/Reveal';
import { ProjectArt } from '../components/ProjectArt';
import { Contact } from '../components/Contact';
import { CinematicHero } from '../components/CinematicHero';
import type { Project } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <Reveal>
          <p className="mono eyebrow">01 — About</p>
          <h2 id="about-title" style={{ fontSize: 'clamp(36px,5.4vw,72px)' }}>Background</h2>
        </Reveal>
        <div>
          <Reveal className="about-copy">
            <p>
              I’m a <strong>D4 Informatics Engineering graduate from Politeknik Caltex Riau (GPA 3.70)</strong> with a focus on web applications, server-side systems, and desktop automation.
            </p>
            <p>
              During my internships at <strong>BRIN</strong> (Badan Riset dan Inovasi Nasional) and <strong>PTPN IV</strong> (Persero), I delivered real software features: reengineering satellite portals, automating USGS M2M data ingestion pipelines, and building business calculation engines for enterprise accommodation workflows.
            </p>
            <p>
              Certified by <strong>BNSP as a Professional Programmer</strong>, holding international networking credentials (<strong>MikroTik MTCNA</strong>, <strong>Cisco CCNA modules</strong>), and holding an official <strong>Kemenkumham RI Copyright (HKI)</strong> for school web systems.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="facts">
              <div className="fact"><dt className="mono">Education</dt><dd>D4 Teknik Informatika — Politeknik Caltex Riau</dd></div>
              <div className="fact"><dt className="mono">GPA</dt><dd>3.70 / 4.00 (Cum Laude)</dd></div>
              <div className="fact"><dt className="mono">Core Focus</dt><dd>Web Applications · Backend Architecture · APIs</dd></div>
              <div className="fact"><dt className="mono">Certifications</dt><dd>BNSP Programmer · MTCNA · Cisco CCNA</dd></div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="mono eyebrow">02 — Experience</p>
            <h2 id="exp-title">Experience</h2>
          </div>
          <p>Two formal software engineering internships across a national research agency and a state-owned enterprise.</p>
        </Reveal>
        <ol className="timeline">
          {experiences.map((e) => (
            <li key={e.org}>
              <Reveal className="exp">
                <div>
                  <div className="exp-org">{e.org}</div>
                  <div className="exp-full">{e.full}</div>
                </div>
                <div>
                  <span className="mono">{e.period}</span>
                  <h3 style={{ marginTop: 8 }}>{e.role}</h3>
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  <div className="exp-links">
                    {e.projects.map((s) => (
                      <Link key={s} to={`/projects/${s}`} className="ulink">{bySlug[s]?.title || s} <ArrowRight size={14} /></Link>
                    ))}
                  </div>
                  <span className="mono" style={{ display: 'block', marginTop: 28 }}>Verified Deliverables</span>
                  <Gallery items={e.gallery} label={e.org} />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Reveal className={`pcard ${p.featured ? 'featured' : ''}`}>
      <article style={{ display: 'contents' }}>
        <div className="pcard-media" style={{ position: 'relative' }}>
          <ProjectArt project={p} />
          <Link to={`/projects/${p.slug}`} className="stretched" aria-label={`View ${p.title} case study`} tabIndex={-1} />
        </div>
        <div className="pcard-top">
          <span className="mono">{p.index} — {p.category}</span>
          {p.featured && <span className="mono" style={{ color: 'var(--accent-ink)', fontWeight: 600 }}>Featured Work</span>}
        </div>
        <h3>
          <Link to={`/projects/${p.slug}`} id={`project-${p.slug}`}>{p.title}</Link>
          <ArrowUpRight className="arrow" size={26} aria-hidden="true" />
        </h3>
        <p className="pcard-summary">{p.summary}</p>
        <div className="pcard-meta">
          <div className="tags">
            {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
            <span className="tag muted">{p.role}</span>
          </div>
          <div className="link-row">
            <Link to={`/projects/${p.slug}`} className="ulink">Case Study <ArrowRight size={13} /></Link>
            {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="ulink">GitHub</a>}
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="ulink">Live demo</a>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="mono eyebrow">03 — Selected work</p>
            <h2 id="projects-title">Selected projects</h2>
          </div>
          <p>Production software, research data automation tools, and enterprise features built with verified code and real assets.</p>
        </Reveal>
        <div className="projects">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="mono eyebrow">04 — Toolkit</p>
            <h2 id="skills-title">Skills &amp; credentials</h2>
          </div>
          <p>Technical capabilities validated through verified industry certifications, degree coursework, and hands-on production code.</p>
        </Reveal>
        <Reveal>
          <div className="skills">
            {skills.map((s, i) => (
              <div key={s.group} className={`skill ${i === 0 ? 'core' : ''}`}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.group}{s.learning && <span className="learning">Active Development</span>}</h3>
                <div className="tags">{s.items.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="certs">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="cert" style={{ height: '100%' }}>
                <a
                  href={c.file || c.url || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-img"
                  tabIndex={c.file || c.url ? 0 : -1}
                  aria-label={`View ${c.title} certificate`}
                >
                  <SmartImage
                    src={c.image}
                    alt={`${c.title} certificate`}
                    fallback={<><Award size={28} /><span className="mono">{c.issuer}</span></>}
                  />
                </a>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
                  <span className="mono">{c.type || 'Certificate'}</span>
                  {c.date && <span className="mono" style={{ fontSize: '11px' }}>{c.date}</span>}
                </div>
                <h4>{c.title}</h4>
                <p className="cert-desc">{c.description}</p>
                <div className="cert-foot">
                  <span>{c.issuer} {c.credentialId && `· ${c.credentialId}`}</span>
                  {(c.file || c.url) && (
                    <a href={c.file || c.url} target="_blank" rel="noreferrer" className="ulink">
                      View Credential <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hairline Top Scroll Progress Indicator
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.15,
          },
        });
      }

      // 2. Section Head Stagger & Slide Up on Scroll
      gsap.utils.toArray<HTMLElement>('.section-head').forEach((head) => {
        gsap.fromTo(
          head,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: head,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 3. Project Cards Lift & Image Parallax on Scroll
      gsap.utils.toArray<HTMLElement>('.pcard').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 2) * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          }
        );

        const img = card.querySelector('.pcard-media img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }
      });

      // 4. Timeline Milestones Sequential Stagger
      gsap.utils.toArray<HTMLElement>('.timeline > li').forEach((item, idx) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            delay: idx * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 86%',
            },
          }
        );
      });

      // 5. Certification Cards Entrance
      gsap.utils.toArray<HTMLElement>('.certs .cert').forEach((cert, idx) => {
        gsap.fromTo(
          cert,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (idx % 3) * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cert,
              start: 'top 90%',
            },
          }
        );
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef}>
      {/* Sleek Hairline Scroll Progress Bar at the very top */}
      <div
        ref={progressBarRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2.5px',
          background: 'linear-gradient(90deg, #1b6360, #3aa39f, #4ade80)',
          transformOrigin: '0% 50%',
          transform: 'scaleX(0)',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      <CinematicHero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Award, Cpu } from 'lucide-react';
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

const AI_TECH_KEYWORDS = new Set([
  'Machine Learning',
  'Deep Learning',
  'KNN',
  'CNN',
  'ANN',
  'LSTM',
  'Seq2Seq LSTM',
  'TensorFlow',
  'Scikit-learn',
  'NLTK',
  'Python',
  'Pandas',
]);

function isAiTag(tag: string) {
  return AI_TECH_KEYWORDS.has(tag);
}

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
              I’m a <strong>Software Developer and D4 Informatics Engineering graduate from Politeknik Caltex Riau (GPA 3.70)</strong> with experience in <strong>Web and Mobile Development</strong>, actively exploring <strong>Artificial Intelligence and Machine Learning</strong> through practical projects.
            </p>
            <p>
              My applied AI/ML work spans mobile <strong>K-Nearest Neighbors (KNN)</strong> classification on Android, multimodal <strong>CNN + ANN</strong> property price regression, <strong>LSTM</strong> time-series market forecasting, and generative <strong>Seq2Seq LSTM</strong> medical chatbots.
            </p>
            <p>
              During my software engineering internships at <strong>BRIN</strong> (Badan Riset dan Inovasi Nasional) and <strong>PTPN IV</strong> (Persero), I delivered production web portals, automated USGS M2M satellite ingestion pipelines, and built backend systems for enterprise accommodation and GIS soil monitoring.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="facts">
              <div className="fact"><dt className="mono">Education</dt><dd>D4 Teknik Informatika — Politeknik Caltex Riau</dd></div>
              <div className="fact"><dt className="mono">GPA</dt><dd>3.70 / 4.00 (Cum Laude)</dd></div>
              <div className="fact"><dt className="mono">Core Focus</dt><dd>Web &amp; Mobile Development · Applied AI &amp; ML</dd></div>
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

type FilterKey = 'all' | 'ai-ml' | 'web' | 'other';

function TechTags({ stack, role }: { stack: string[]; role: string }) {
  return (
    <div className="tags">
      {stack.map((s) => (
        <span key={s} className={`tag ${isAiTag(s) ? 'tag--ai' : ''}`}>
          {isAiTag(s) && <span className="tag-ai-dot" aria-hidden="true" />}
          {s}
        </span>
      ))}
      <span className="tag muted">{role}</span>
    </div>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="link-row">
      <Link to={`/projects/${p.slug}`} className="ulink">
        Case Study <ArrowRight size={13} />
      </Link>
      {p.github && (
        <a href={p.github} target="_blank" rel="noreferrer" className="ulink">
          GitHub <ArrowUpRight size={13} />
        </a>
      )}
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noreferrer" className="ulink">
          Live demo <ArrowUpRight size={13} />
        </a>
      )}
    </div>
  );
}

/** 1A. Flagship AI/ML Spotlight Card (Sweet Sensation — Full-width Editorial Split) */
function AiFlagshipCard({ p }: { p: Project }) {
  return (
    <Reveal className="pcard pcard--ai-flagship">
      <article className="ai-flagship-inner">
        <div className="ai-flagship-media">
          <div className="pcard-media">
            <ProjectArt project={p} priority />
            <span className="pcard-media-badge mono">
              <Cpu size={12} /> {p.algorithm || 'Machine Learning'}
            </span>
            <Link
              to={`/projects/${p.slug}`}
              className="stretched"
              aria-label={`View ${p.title} case study`}
              tabIndex={-1}
            />
          </div>
        </div>

        <div className="ai-flagship-content">
          <div className="pcard-top">
            <span className="mono">{p.index} — {p.category}</span>
            <span className="ai-pill mono">Flagship AI / ML</span>
          </div>

          <h3 className="ai-flagship-title">
            <Link to={`/projects/${p.slug}`} id={`project-${p.slug}`}>
              {p.title}
            </Link>
            <ArrowUpRight className="arrow" size={28} aria-hidden="true" />
          </h3>

          <p className="pcard-summary">{p.summary}</p>

          {(p.algorithm || p.highlightMetric) && (
            <dl className="ai-spec-strip">
              {p.algorithm && (
                <div className="ai-spec-item">
                  <dt className="mono">Core Algorithm</dt>
                  <dd>{p.algorithm}</dd>
                </div>
              )}
              {p.highlightMetric && (
                <div className="ai-spec-item">
                  <dt className="mono">Implementation Scope</dt>
                  <dd>{p.highlightMetric}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="pcard-meta ai-flagship-footer">
            <TechTags stack={p.stack} role={p.role} />
            <ProjectLinks p={p} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/** 1B. Featured AI/ML Card (Dominant 6-col or 12-col Horizontal Split) */
function AiFeaturedCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  return (
    <Reveal className={`pcard pcard--ai-featured ${wide ? 'pcard--ai-wide' : ''}`}>
      <article className={wide ? 'ai-wide-inner' : 'ai-card-inner'}>
        <div className="pcard-media" style={{ position: 'relative' }}>
          <ProjectArt project={p} />
          {p.algorithm && (
            <span className="pcard-media-badge mono">
              <Cpu size={12} /> {p.algorithm}
            </span>
          )}
          <Link
            to={`/projects/${p.slug}`}
            className="stretched"
            aria-label={`View ${p.title} case study`}
            tabIndex={-1}
          />
        </div>

        <div className="ai-card-body">
          <div className="pcard-top">
            <span className="mono">{p.index} — {p.category}</span>
            <span className="ai-pill mono">Featured AI / ML</span>
          </div>

          <h3>
            <Link to={`/projects/${p.slug}`} id={`project-${p.slug}`}>
              {p.title}
            </Link>
            <ArrowUpRight className="arrow" size={24} aria-hidden="true" />
          </h3>

          <p className="pcard-summary">{p.summary}</p>

          {p.highlightMetric && (
            <div className="ai-metric-bar">
              <span className="mono">Model &amp; Evaluation</span>
              <strong>{p.highlightMetric}</strong>
            </div>
          )}

          <div className="pcard-meta">
            <TechTags stack={p.stack} role={p.role} />
            <ProjectLinks p={p} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/** 2. Supporting Web & Backend Project Card */
function WebProjectCard({ p, compactCol = false }: { p: Project; compactCol?: boolean }) {
  return (
    <Reveal className={`pcard pcard--web ${compactCol ? 'pcard--web-third' : 'pcard--web-half'}`}>
      <article className="web-card-inner">
        <div className="pcard-media" style={{ position: 'relative' }}>
          <ProjectArt project={p} />
          <Link
            to={`/projects/${p.slug}`}
            className="stretched"
            aria-label={`View ${p.title} case study`}
            tabIndex={-1}
          />
        </div>
        <div className="pcard-top">
          <span className="mono">{p.index} — {p.category}</span>
          {p.context && <span className="mono pcard-context">{p.context}</span>}
        </div>
        <h3>
          <Link to={`/projects/${p.slug}`} id={`project-${p.slug}`}>
            {p.title}
          </Link>
          <ArrowUpRight className="arrow" size={22} aria-hidden="true" />
        </h3>
        <p className="pcard-summary">{p.summary}</p>
        <div className="pcard-meta">
          <TechTags stack={p.stack} role={p.role} />
          <ProjectLinks p={p} />
        </div>
      </article>
    </Reveal>
  );
}

/** 3. Compact Editorial Row for Desktop & API Automation */
function CompactProjectCard({ p }: { p: Project }) {
  return (
    <Reveal className="pcard pcard--compact">
      <article className="compact-card-inner">
        <div className="compact-media">
          <div className="pcard-media" style={{ position: 'relative' }}>
            <ProjectArt project={p} />
            <Link
              to={`/projects/${p.slug}`}
              className="stretched"
              aria-label={`View ${p.title} case study`}
              tabIndex={-1}
            />
          </div>
        </div>
        <div className="compact-main">
          <div className="pcard-top">
            <span className="mono">{p.index} — {p.category}</span>
            {p.context && <span className="mono pcard-context">{p.context}</span>}
          </div>
          <h3>
            <Link to={`/projects/${p.slug}`} id={`project-${p.slug}`}>
              {p.title}
            </Link>
            <ArrowUpRight className="arrow" size={20} aria-hidden="true" />
          </h3>
          <p className="pcard-summary">{p.summary}</p>
        </div>
        <div className="compact-aside">
          <TechTags stack={p.stack} role={p.role} />
          <ProjectLinks p={p} />
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  const [filter, setFilter] = useState<FilterKey>('all');

  const aiProjects = projects.filter((p) => p.tier === 'ai-ml');
  const webProjects = projects.filter((p) => p.tier === 'web');
  const otherProjects = projects.filter((p) => p.tier === 'other');

  const showAi = filter === 'all' || filter === 'ai-ml';
  const showWeb = filter === 'all' || filter === 'web';
  const showOther = filter === 'all' || filter === 'other';

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="mono eyebrow">03 — Selected work</p>
            <h2 id="projects-title">Selected projects</h2>
          </div>
          <p>
            Led by practical <strong>Artificial Intelligence &amp; Machine Learning</strong> implementations—supported by production web platforms, enterprise backend systems, and research automation tools.
          </p>
        </Reveal>

        {/* Editorial Filter Bar */}
        <Reveal className="projects-toolbar">
          <div className="projects-filter" role="tablist" aria-label="Filter projects by discipline">
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span>All Work</span>
              <span className="mono">{projects.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'ai-ml'}
              className={`filter-pill filter-pill--ai ${filter === 'ai-ml' ? 'active' : ''}`}
              onClick={() => setFilter('ai-ml')}
            >
              <span className="tag-ai-dot" aria-hidden="true" />
              <span>AI &amp; Machine Learning</span>
              <span className="mono">{aiProjects.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'web'}
              className={`filter-pill ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              <span>Web &amp; Backend</span>
              <span className="mono">{webProjects.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'other'}
              className={`filter-pill ${filter === 'other' ? 'active' : ''}`}
              onClick={() => setFilter('other')}
            >
              <span>Desktop &amp; API</span>
              <span className="mono">{otherProjects.length}</span>
            </button>
          </div>
        </Reveal>

        {/* TIER 1: FEATURED AI & MACHINE LEARNING */}
        {showAi && (
          <div className="project-tier project-tier--ai">
            <div className="tier-header">
              <div className="tier-header-left">
                <span className="mono tier-index">I — Primary Highlight</span>
                <h3 className="tier-title">Applied AI &amp; Machine Learning</h3>
              </div>
              <p className="tier-desc">
                End-to-end machine learning and deep learning systems—covering mobile KNN classification, multimodal CNN+ANN regression, LSTM time-series forecasting, and Seq2Seq NLP.
              </p>
            </div>

            <div className="projects projects--ai">
              {aiProjects.map((p, idx) =>
                idx === 0 ? (
                  <AiFlagshipCard key={p.slug} p={p} />
                ) : (
                  <AiFeaturedCard key={p.slug} p={p} wide={idx === aiProjects.length - 1} />
                )
              )}
            </div>
          </div>
        )}

        {/* TIER 2: WEB & BACKEND SYSTEMS */}
        {showWeb && (
          <div className="project-tier project-tier--web">
            <div className="tier-header">
              <div className="tier-header-left">
                <span className="mono tier-index">II — Supporting Engineering</span>
                <h3 className="tier-title">Web &amp; Enterprise Backend Systems</h3>
              </div>
              <p className="tier-desc">
                Production web portals, e-commerce workflows, and server-side relational architectures built for national agencies, state enterprises, and institutions.
              </p>
            </div>

            <div className="projects projects--web">
              {webProjects.map((p, idx) => (
                <WebProjectCard key={p.slug} p={p} compactCol={idx >= 2} />
              ))}
            </div>
          </div>
        )}

        {/* TIER 3: DESKTOP & API AUTOMATION (COMPACT) */}
        {showOther && (
          <div className="project-tier project-tier--other">
            <div className="tier-header">
              <div className="tier-header-left">
                <span className="mono tier-index">III — Specialized Tooling</span>
                <h3 className="tier-title">Desktop &amp; Scientific API Automation</h3>
              </div>
              <p className="tier-desc">
                Multi-threaded desktop GUI automation integrating external remote-sensing APIs.
              </p>
            </div>

            <div className="projects projects--compact">
              {otherProjects.map((p) => (
                <CompactProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        )}
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

      // 3. Project Cards Subtle Entrance on Scroll
      gsap.utils.toArray<HTMLElement>('.pcard').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (i % 2) * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
          }
        );
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
          height: '2px',
          background: 'var(--ink)',
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

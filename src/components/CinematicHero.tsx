import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Download,
  Terminal,
  Code2,
  TerminalSquare,
  CheckCircle2,
} from 'lucide-react';
import { site } from '../data/content';
import { SmartImage } from './SmartImage';
import '../cinematic-hero.css';

gsap.registerPlugin(ScrollTrigger);

type CliTab = 'whoami' | 'neofetch' | 'experience';

export function CinematicHero() {
  const [activeTab, setActiveTab] = useState<CliTab>('whoami');

  // GSAP animation refs
  const heroRef = useRef<HTMLElement>(null);
  const lanyardCardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Timeline & Smooth Natural Motion
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation Timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.1,
      });

      // Step 1: Hanging Lanyard Card Entrance
      tl.fromTo(
        lanyardCardRef.current,
        { scale: 0.88, opacity: 0, y: -28, rotation: -3 },
        { scale: 1, opacity: 1, y: 0, rotation: 0, duration: 0.9, ease: 'elastic.out(1, 0.65)' }
      )
      // Step 2: Refined Title
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
        '-=0.45'
      )
      // Step 3: Narrative Lead
      .fromTo(
        leadRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
        '-=0.4'
      )
      // Step 4: Action Buttons
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.35'
      )
      // Step 5: Metrics Strip
      .fromTo(
        metricsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.3'
      )
      // Step 6: Linux Terminal Window Unfold
      .fromTo(
        terminalRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out' },
        '-=0.3'
      );

      // 2. Continuous Natural Lanyard Pendulum Sway (anchored at top clip)
      if (lanyardCardRef.current) {
        gsap.to(lanyardCardRef.current, {
          rotation: 1.2,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: '50% -16px',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D Perspective Tilt on Lanyard Badge
  const handleLanyardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!lanyardCardRef.current) return;
    const rect = lanyardCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 8;
    const rotY = (x / (rect.width / 2)) * 8;

    gsap.to(lanyardCardRef.current, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleLanyardMouseLeave = () => {
    if (!lanyardCardRef.current) return;
    gsap.to(lanyardCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'power3.out',
    });
  };

  return (
    <section ref={heroRef} className="cinematic-hero" aria-labelledby="hero-name-title">
      <div className="wrap">
        {/* TOP TIER: HANGING LANYARD ID BADGE (FOTO TERGANTUNG LANYARD) */}
        <div className="hero-lanyard-wrapper">
          {/* Lanyard Strap & Metallic Buckle Rig */}
          <div className="lanyard-rig" aria-hidden="true">
            <div className="lanyard-strap">
              <span className="lanyard-strap-stitch" />
            </div>
            <div className="lanyard-clip">
              <span className="lanyard-ring" />
            </div>
          </div>

          {/* Hanging ID Card Badge */}
          <div
            ref={lanyardCardRef}
            className="lanyard-card"
            onMouseMove={handleLanyardMouseMove}
            onMouseLeave={handleLanyardMouseLeave}
            style={{ perspective: 1200 }}
          >
            {/* Slot Punch Hole */}
            <div className="lanyard-slot-hole" aria-hidden="true" />

            {/* Header / Security Chip */}
            <div className="lanyard-header">
              <div className="lanyard-chip-brand">
                <span className="lanyard-gold-chip" />
                <span className="mono">PCR // 2026 ENG</span>
              </div>
              <div className="lanyard-status-dot" title="Ready for software engineering roles">
                <span className="hero-led-pulse" />
              </div>
            </div>

            {/* Large Portrait Photo Frame */}
            <div className="lanyard-photo-box">
              <SmartImage
                src={site.photo}
                alt={`Portrait of ${site.fullName}`}
                className="lanyard-photo-img"
                priority
                fallback={<span className="portrait-initials">ZH</span>}
              />
            </div>

            {/* Footer Identity Details */}
            <div className="lanyard-footer">
              <div className="lanyard-name-row">
                <strong className="lanyard-name">{site.name}</strong>
                <span className="mono lanyard-role">{site.role}</span>
              </div>
              <div className="lanyard-barcode-row" aria-hidden="true">
                <span className="mono lanyard-badge-tag">GPA 3.70 · CUM LAUDE</span>
                <span className="lanyard-barcode-lines">||| | || |||| | | |||</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTERED REFINED INTRO (UKURAN DIPERKECIL & SEIMBANG) */}
        <div className="hero-centered-content">
          <h1 ref={titleRef} id="hero-name-title" className="hero-refined-title">
            Crafting <span className="cinematic-accent">high-performance</span> web systems, APIs &amp; robust automation.
          </h1>

          <p ref={leadRef} className="hero-refined-lead">
            Hi, I’m <strong>{site.fullName}</strong>. D4 Informatics Engineering graduate from{' '}
            <strong>Politeknik Caltex Riau</strong> (GPA 3.70 Cum Laude) with proven software engineering internship
            experience at <strong>BRIN</strong> (National Research Agency) and <strong>PTPN IV</strong> (State Enterprise).
          </p>

          {/* CTAs */}
          <div ref={actionsRef} className="hero-centered-actions">
            <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
              Explore Projects <ArrowUpRight size={16} />
            </a>
            {site.cv && (
              <a
                href={site.cv}
                download="CV_Muhammad_Zikri_Haykal.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-cv"
                id="hero-cta-cv"
              >
                <Download size={15} /> Download CV
              </a>
            )}
            <a href="#contact" className="btn btn-ghost" id="hero-cta-contact">
              Contact Me
            </a>
          </div>

          {/* Centered Minimalist Metrics Ribbon */}
          <div ref={metricsRef} className="hero-metrics-ribbon">
            <div className="hero-metric-item">
              <span className="hero-metric-val">3.70</span>
              <span className="hero-metric-lbl">
                <strong>GPA / 4.00</strong>
                <span className="mono">Cum Laude · PCR</span>
              </span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric-item">
              <span className="hero-metric-val">2</span>
              <span className="hero-metric-lbl">
                <strong>National Agencies</strong>
                <span className="mono">BRIN &amp; PTPN IV</span>
              </span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric-item">
              <span className="hero-metric-val">BNSP</span>
              <span className="hero-metric-lbl">
                <strong>Certified Programmer</strong>
                <span className="mono">MTCNA · Cisco CCNA</span>
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM TIER: PANORAMIC INTERACTIVE LINUX TERMINAL SHOWCASE */}
        <div ref={terminalRef} className="cinematic-terminal-wrapper">
          <div className="cinematic-terminal-card">
            {/* Terminal Header Bar */}
            <div className="cinematic-term-header">
              <div className="cinematic-term-controls">
                <span className="term-dot term-dot--red" />
                <span className="term-dot term-dot--yellow" />
                <span className="term-dot term-dot--green" />
              </div>

              {/* Interactive Command Tabs */}
              <div className="cinematic-term-tabs">
                <button
                  type="button"
                  className={`cinematic-term-tab ${activeTab === 'whoami' ? 'active' : ''}`}
                  onClick={() => setActiveTab('whoami')}
                  aria-label="Run whoami command"
                >
                  <Terminal size={13} /> $ whoami
                </button>
                <button
                  type="button"
                  className={`cinematic-term-tab ${activeTab === 'neofetch' ? 'active' : ''}`}
                  onClick={() => setActiveTab('neofetch')}
                  aria-label="Run neofetch command"
                >
                  <TerminalSquare size={13} /> $ neofetch
                </button>
                <button
                  type="button"
                  className={`cinematic-term-tab ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                  aria-label="Run cat exp.log command"
                >
                  <Code2 size={13} /> $ cat exp.log
                </button>
              </div>

              <span className="mono cinematic-term-badge">bash — zikri@dev-station: ~</span>
            </div>

            {/* Terminal CLI Body */}
            <div className="cinematic-term-body">
              {/* TAB 1: WHOAMI */}
              {activeTab === 'whoami' && (
                <div className="cli-terminal-view">
                  <div className="cli-line">
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-command">whoami</span>
                  </div>
                  <div className="cli-result cli-result--name">muhammad-zikri-haykal</div>

                  <div className="cli-line" style={{ marginTop: '14px' }}>
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-command">cat /etc/profile.d/intro.sh</span>
                  </div>
                  <div className="cli-result">
                    <div className="cli-grid-info">
                      <div className="cli-info-row">
                        <span className="cli-k">Full Name</span>
                        <span className="cli-v">Muhammad Zikri Haykal</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Role</span>
                        <span className="cli-v">Software Developer (Web, APIs, Automation)</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Education</span>
                        <span className="cli-v">D4 Teknik Informatika — Politeknik Caltex Riau</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Academic GPA</span>
                        <span className="cli-v cli-v--accent">3.70 / 4.00 (Cum Laude)</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Internships</span>
                        <span className="cli-v">BRIN (National Research) &amp; PTPN IV (Persero)</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Certifications</span>
                        <span className="cli-v">BNSP Programmer · MikroTik MTCNA · Cisco CCNA</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Core Focus</span>
                        <span className="cli-v">Clean Architecture, High-Perf APIs, Scalable Web</span>
                      </div>
                      <div className="cli-info-row">
                        <span className="cli-k">Status</span>
                        <span className="cli-v cli-v--success">● Open for Software Engineering Opportunities</span>
                      </div>
                    </div>
                  </div>

                  <div className="cli-line cli-line--last" style={{ marginTop: '14px' }}>
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-cursor" />
                  </div>
                </div>
              )}

              {/* TAB 2: NEOFETCH */}
              {activeTab === 'neofetch' && (
                <div className="cli-terminal-view">
                  <div className="cli-line">
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-command">neofetch --developer</span>
                  </div>

                  <div className="cli-neofetch-container">
                    <pre className="cli-neofetch-ascii">{`   /\\_/\\     
  ( o.o )    
   > ^ <     
   [ZIKRI]   `}</pre>

                    <div className="cli-neofetch-details">
                      <div className="cli-neofetch-header">
                        <span className="cli-neofetch-user">zikri</span>@<span className="cli-neofetch-host">dev-station</span>
                      </div>
                      <div className="cli-neofetch-divider">-------------------------</div>
                      <div className="cli-neofetch-specs">
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">OS</span>
                          <span className="cli-spec-v">Linux x86_64 / Arch-inspired</span>
                        </div>
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">Host</span>
                          <span className="cli-spec-v">Developer Workstation</span>
                        </div>
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">Kernel</span>
                          <span className="cli-spec-v">Zikri Core v4.19</span>
                        </div>
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">Uptime</span>
                          <span className="cli-spec-v">4 years studying &amp; building software</span>
                        </div>
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">Shell</span>
                          <span className="cli-spec-v">bash 5.2.26</span>
                        </div>
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">Primary Stack</span>
                          <span className="cli-spec-v">Laravel, PHP, Python, React, Vue.js, MySQL</span>
                        </div>
                        <div className="cli-spec-row">
                          <span className="cli-spec-k">Tools &amp; Libs</span>
                          <span className="cli-spec-v">TypeScript, Bootstrap 5, Tkinter, USGS API, Docker</span>
                        </div>
                      </div>

                      {/* ANSI 8-Color Palette matrix */}
                      <div className="cli-color-matrix" aria-hidden="true">
                        <span style={{ background: '#1e293b' }} />
                        <span style={{ background: '#ef4444' }} />
                        <span style={{ background: '#22c55e' }} />
                        <span style={{ background: '#eab308' }} />
                        <span style={{ background: '#3b82f6' }} />
                        <span style={{ background: '#a855f7' }} />
                        <span style={{ background: '#06b6d4' }} />
                        <span style={{ background: '#f1f5f9' }} />
                      </div>
                    </div>
                  </div>

                  <div className="cli-line cli-line--last" style={{ marginTop: '14px' }}>
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-cursor" />
                  </div>
                </div>
              )}

              {/* TAB 3: EXPERIENCE LOG */}
              {activeTab === 'experience' && (
                <div className="cli-terminal-view">
                  <div className="cli-line">
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-command">journalctl -u career-internships.log --no-pager</span>
                  </div>

                  <div className="cli-exp-grid">
                    <div className="cli-exp-card">
                      <div className="cli-exp-card-head">
                        <span className="cli-exp-badge cli-exp-badge--brin">[BRIN]</span>
                        <strong>Badan Riset &amp; Inovasi Nasional</strong>
                        <span className="mono">2025</span>
                      </div>
                      <div className="cli-exp-card-body">
                        &gt; SpaceMap Satellite Portal Reengineering (Bootstrap 4 &rarr; 5)
                        <br />
                        &gt; Landsat GUI Scene Downloader with USGS M2M API pipeline
                      </div>
                    </div>

                    <div className="cli-exp-card">
                      <div className="cli-exp-card-head">
                        <span className="cli-exp-badge cli-exp-badge--ptpn">[PTPN IV]</span>
                        <strong>PT Perkebunan Nusantara IV (Persero)</strong>
                        <span className="mono">2026</span>
                      </div>
                      <div className="cli-exp-card-body">
                        &gt; Online Accommodation Meeting Calculator Engine
                        <br />
                        &gt; Soil Fertility Monitoring backend &amp; 5+ daily IT ops tickets
                      </div>
                    </div>

                    <div className="cli-exp-status">
                      <CheckCircle2 size={14} className="text-success" />
                      <span>Audit Status: Verified Deliverables · Predicate &quot;Sangat Baik&quot;</span>
                    </div>
                  </div>

                  <div className="cli-line cli-line--last" style={{ marginTop: '14px' }}>
                    <span className="cli-user">zikri@dev-station</span>
                    <span className="cli-sep">:</span>
                    <span className="cli-path">~</span>
                    <span className="cli-prompt">$</span>
                    <span className="cli-cursor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

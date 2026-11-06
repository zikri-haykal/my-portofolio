import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ArrowDownRight, FileText } from 'lucide-react';
import { site, stats } from '../data/content';
import { SmartImage } from './SmartImage';
import '../cinematic-hero.css';

export function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: 'power2.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="editorial-hero" aria-labelledby="hero-name-title">
      <div className="wrap">
        {/* Top Editorial Metadata Bar */}
        <div className="hero-dossier-bar hero-anim">
          <span className="hero-meta-item">00 — Portfolio Index</span>
          <span className="hero-meta-item hero-meta-location">{site.location}</span>
          {site.openToWork && (
            <span className="hero-meta-item hero-meta-status">
              <span className="hero-status-dot" aria-hidden="true" />
              Available for Software Engineering Roles
            </span>
          )}
        </div>

        {/* Main Asymmetric Editorial Grid */}
        <div className="hero-editorial-grid">
          {/* Left Column: Focal Typography, Narrative & Actions */}
          <div className="hero-primary-col">
            <p className="hero-role-title hero-anim">
              {site.role} <span className="hero-role-divider" aria-hidden="true">/</span> Web &amp; Mobile Development · Applied AI &amp; ML
            </p>

            <h1 id="hero-name-title" className="hero-display-name hero-anim">
              {site.fullName}
            </h1>

            <p className="hero-editorial-lead hero-anim">
              A Software Developer with experience in <strong>Web and Mobile Development</strong>, actively exploring{' '}
              <strong>Artificial Intelligence and Machine Learning</strong> through practical projects. D4 Informatics
              Engineering graduate from <strong>Politeknik Caltex Riau</strong> with industry internship experience at{' '}
              <strong>BRIN</strong> and <strong>PTPN IV</strong>.
            </p>

            <dl className="hero-discipline-spec hero-anim" aria-label="Technical focus areas">
              <div className="hero-spec-col">
                <dt>Software Engineering</dt>
                <dd>Laravel · PHP · Kotlin Android · JavaScript · MySQL</dd>
              </div>
              <div className="hero-spec-col">
                <dt>Applied AI &amp; Machine Learning</dt>
                <dd>Python · TensorFlow · KNN · CNN &amp; ANN · LSTM · Seq2Seq NLP</dd>
              </div>
            </dl>

            <div className="hero-cta-row hero-anim">
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                Explore Projects <ArrowDownRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost" id="hero-cta-contact">
                Contact Me <ArrowUpRight size={16} />
              </a>
              {site.cv && (
                <a
                  href={site.cv}
                  download="CV_Muhammad_Zikri_Haykal.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cv-link"
                  id="hero-cta-cv"
                >
                  <FileText size={15} />
                  <span>Download CV (PDF)</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Restrained Architectural Portrait */}
          <aside className="hero-portrait-col hero-anim" aria-label="Developer portrait">
            <figure className="hero-portrait-figure">
              <div className="hero-portrait-frame">
                <SmartImage
                  src={site.photo}
                  alt={`Portrait of ${site.fullName}`}
                  className="hero-portrait-img"
                  priority
                  fallback={<span className="portrait-initials">ZH</span>}
                />
              </div>
              <figcaption className="hero-portrait-caption">
                <span>{site.name}</span>
                <span>D4 Informatics Engineering · PCR</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        {/* Bottom Row: 4 Key Statistics in a Single Proportional Row */}
        <dl className="hero-stats-row hero-anim" aria-label="Key career and academic highlights">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat-cell">
              <div className="hero-stat-top">
                <span className="hero-stat-index">{s.index}</span>
                <dt className="hero-stat-label">{s.label}</dt>
              </div>
              <dd className="hero-stat-value">{s.value}</dd>
              <dd className="hero-stat-note">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

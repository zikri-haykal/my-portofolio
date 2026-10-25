import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { projects, site } from '../data/content';
import { ProjectArt } from '../components/ProjectArt';
import { Reveal } from '../components/Reveal';

const assetCaptions: Record<string, string> = {
  '/projects/rafalmer.png': 'E-Commerce Web Application — Catalog, Categories & Order Flow',
  '/projects/sweet3.png': 'Android Application — Main Dashboard & Feature Navigation',
  '/projects/sweet1.png': 'Android Application — Interactive Fruit Education Quiz Module',
  '/projects/sweet2.png': 'Android Application — K-Nearest Neighbors Ripeness Prediction Result',
  '/projects/spacemap.png': 'SPACeMAP — BRIN Remote Sensing Web Portal Reengineered to Bootstrap 5',
  '/projects/guilandsat.png': 'Landsat Scene Downloader — Tkinter Desktop GUI with USGS M2M API',
  '/projects/akomodasi-rapat.png': 'Online Accommodation System — Meeting Calculator & Cost Estimation Form',
  '/projects/mahadabudarda.jpeg': "Official School Web Portal — Sekolah Ma'had Abu Ad Darda'",
  '/certs/thumbs/HakCipta-Mahad.png': 'Surat Pencatatan Hak Cipta Kemenkumham RI (No. 000792817)',
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!p) return;
    document.title = `${p.title} — ${p.category} | ${site.name}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', p.summary);
    return () => { document.title = `${site.name} — ${site.role}`; };
  }, [p]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!p) return <Navigate to="/" replace />;
  const next = projects[(i + 1) % projects.length];
  const isMobileApp = p.stack.includes('Android') || p.category.includes('Android');

  return (
    <article>
      <header className="wrap detail-hero">
        <Link to="/#projects" className="back"><ArrowLeft size={16} /> All projects</Link>
        <p className="mono eyebrow">{p.index} — {p.category}</p>
        <Reveal><h1>{p.title}</h1></Reveal>
        <Reveal delay={0.1}><p className="hero-lead" style={{ marginTop: 28 }}>{p.summary}</p></Reveal>
        <dl className="detail-meta">
          <div><dt className="mono">Role</dt><dd>{p.role}</dd></div>
          <div><dt className="mono">Context</dt><dd>{p.context ?? 'Academic / personal'}</dd></div>
          <div><dt className="mono">Stack</dt><dd>{p.stack.join(', ')}</dd></div>
          <div>
            <dt className="mono">Links</dt>
            <dd className="link-row">
              {p.github && <a className="ulink" href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>}
              {p.demo && <a className="ulink" href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} /></a>}
              {!p.github && !p.demo && <span style={{ color: 'var(--ink-3)' }}>Private / internal enterprise</span>}
            </dd>
          </div>
        </dl>
        <div className="detail-cover"><div className="pcard-media"><ProjectArt project={p} priority /></div></div>
      </header>

      <div className="wrap detail-body">
        <Sec title="Overview"><p>{p.overview}</p></Sec>
        <Sec title="Problem"><p>{p.problem}</p></Sec>
        <Sec title="My contribution"><ul>{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul></Sec>
        <Sec title="Technical implementation"><ul>{p.implementation.map((c) => <li key={c}>{c}</li>)}</ul></Sec>
        {p.challenges.length > 0 && (
          <Sec title="Challenges & solutions">
            <div className="chal">
              {p.challenges.map((c) => (
                <div key={c.challenge}>
                  <span className="mono">Challenge</span>
                  <p style={{ color: 'var(--ink)', fontWeight: 500 }}>{c.challenge}</p>
                  <span className="mono" style={{ display: 'block', marginTop: 16 }}>Solution</span>
                  <p>{c.solution}</p>
                </div>
              ))}
            </div>
          </Sec>
        )}
        <Sec title="Visual Evidence & Screenshots">
          {p.screenshots.length > 0 ? (
            <div className={isMobileApp ? 'detail-gallery--mobile' : 'detail-gallery--desktop'}>
              {p.screenshots.map((s, idx) => (
                <figure key={s} className="detail-shot-card">
                  <button
                    type="button"
                    className="detail-shot-btn"
                    onClick={() => setZoomSrc(s)}
                    aria-label={`Enlarge screenshot ${idx + 1}: ${assetCaptions[s] || p.title}`}
                  >
                    <img
                      src={s}
                      alt={assetCaptions[s] || `${p.title} screenshot ${idx + 1}`}
                      loading="lazy"
                      className="detail-shot-img"
                    />
                    <span className="detail-shot-zoom"><ZoomIn size={16} /> Click to enlarge</span>
                  </button>
                  <figcaption className="detail-shot-caption">
                    <span className="mono">Screen {String(idx + 1).padStart(2, '0')}</span>
                    <p>{assetCaptions[s] || `${p.title} asset overview`}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="detail-restricted-note">
              <span className="mono">Enterprise Confidentiality</span>
              <p>
                This was an internal backend infrastructure project developed during the PT Perkebunan Nusantara IV (Persero) internship.
                Operational database interfaces and internal monitoring schemas are restricted under enterprise confidentiality guidelines.
              </p>
            </div>
          )}
        </Sec>
        <Sec title="Outcomes">
          <div className="outcomes">{p.outcomes.map((o) => <div className="outcome" key={o}>{o}</div>)}</div>
        </Sec>

        <Link to={`/projects/${next.slug}`} className="next" id="next-project">
          <span className="mono">Next project</span>
          <h3>{next.title} <ArrowUpRight size={48} /></h3>
        </Link>
      </div>

      {zoomSrc && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setZoomSrc(null)}>
          <button
            type="button"
            className="lb-btn lb-close"
            onClick={() => setZoomSrc(null)}
            aria-label="Close preview"
          >
            <X size={20} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={zoomSrc} alt="Full resolution view" className="lightbox-img" />
            <figcaption>
              <span>{assetCaptions[zoomSrc] || p.title}</span>
              <span className="mono">{p.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </article>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="dsec">
        <h2>{title}</h2>
        <div>{children}</div>
      </section>
    </Reveal>
  );
}

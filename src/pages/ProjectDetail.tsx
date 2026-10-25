import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects, site } from '../data/content';
import { ProjectArt } from '../components/ProjectArt';
import { Reveal } from '../components/Reveal';

export default function ProjectDetail() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];

  useEffect(() => {
    if (!p) return;
    document.title = `${p.title} — ${p.category} | ${site.name}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', p.summary);
    return () => { document.title = `${site.name} — ${site.role}`; };
  }, [p]);

  if (!p) return <Navigate to="/" replace />;
  const next = projects[(i + 1) % projects.length];

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
              {!p.github && !p.demo && <span style={{ color: 'var(--ink-3)' }}>Private / internal</span>}
            </dd>
          </div>
        </dl>
        <div className="detail-cover"><div className="pcard-media"><ProjectArt project={p} /></div></div>
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
        <Sec title="Screenshots">
          {p.screenshots.length ? (
            <div style={{ display: 'grid', gap: 16 }}>
              {p.screenshots.map((s, k) => (
                <img key={s} src={s} alt={`${p.title} screenshot ${k + 1}`} loading="lazy" style={{ borderRadius: 12, border: '1px solid var(--line)' }} />
              ))}
            </div>
          ) : (
            <p className="note">Screenshots are being prepared.</p>
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

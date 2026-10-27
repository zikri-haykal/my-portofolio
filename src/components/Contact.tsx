import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Users, Mail, FileText } from 'lucide-react';
import { site } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="mono eyebrow">05 — Contact</p>
        <h2 id="contact-title">
          Have a project in mind?<br />
          <a href={`mailto:${site.email}`} id="contact-email-cta">Let’s connect.</a>
        </h2>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="mono">Email</span>
            <a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>
          </div>
          <div className="contact-item">
            <span className="mono">LinkedIn</span>
            <a href={site.linkedin} target="_blank" rel="noreferrer" id="contact-linkedin"><Users size={15} /> LinkedIn <ArrowUpRight size={14} /></a>
          </div>
          <div className="contact-item">
            <span className="mono">GitHub</span>
            <a href={site.github} target="_blank" rel="noreferrer" id="contact-github"><Code2 size={15} /> GitHub <ArrowUpRight size={14} /></a>
          </div>
          <div className="contact-item">
            <span className="mono">Resume</span>
            <a href={site.cv} target="_blank" rel="noreferrer" id="contact-cv"><FileText size={15} /> Download CV (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {currentYear} {site.name}</span>
        <nav aria-label="Footer" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn-replay-welcome"
            onClick={() => window.dispatchEvent(new Event('replay-ios-welcome'))}
            title="Replay iOS Welcome Experience"
          >
            ✦ Replay Intro
          </button>
          <Link to="/#projects">Projects</Link>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}

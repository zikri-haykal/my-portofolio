import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { site } from '../data/content';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { pathname } = useLocation();
  const home = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!home) return setActive('');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    [...links.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [home]);

  useEffect(() => setOpen(false), [pathname]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap nav-inner">
        <Link to="/" className="logo" aria-label={`${site.name} — home`}>
          <span className="logo-dot" />
          {site.name}
        </Link>
        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav id="primary-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={href(l.id)} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={href('contact')} className="btn btn-primary btn-sm" id="nav-contact" onClick={() => setOpen(false)}>
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

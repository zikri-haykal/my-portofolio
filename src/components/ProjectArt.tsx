import type { Project } from '../data/content';
import { Database, Server } from 'lucide-react';

interface ProjectArtProps {
  project: Project;
  priority?: boolean;
}

export function ProjectArt({ project, priority = false }: ProjectArtProps) {
  const isMobile = project.stack.includes('Android') || project.category.includes('Android');
  const shots = project.screenshots;
  const primaryShot = shots[0];

  // Mobile App Presentation (Sweet Sensation)
  if (isMobile && primaryShot) {
    const secondaryShot = shots[1];
    const tertiaryShot = shots[2];

    return (
      <div className="project-art project-art--mobile" aria-label={`${project.title} mobile application preview`}>
        <div className="mobile-stage">
          {secondaryShot && (
            <div className="mobile-screen-flank mobile-screen-flank--left" aria-hidden="true">
              <img
                src={secondaryShot}
                alt=""
                loading={priority ? 'eager' : 'lazy'}
                className="mobile-img"
              />
            </div>
          )}

          <div className="mobile-screen-hero">
            <img
              src={primaryShot}
              alt={`${project.title} Android application interface`}
              loading={priority ? 'eager' : 'lazy'}
              className="mobile-img"
            />
          </div>

          {tertiaryShot && (
            <div className="mobile-screen-flank mobile-screen-flank--right" aria-hidden="true">
              <img
                src={tertiaryShot}
                alt=""
                loading={priority ? 'eager' : 'lazy'}
                className="mobile-img"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop / Web Application Presentation (Real screenshot)
  if (primaryShot) {
    return (
      <div className="project-art project-art--desktop">
        <img
          src={primaryShot}
          alt={`${project.title} system interface`}
          loading={priority ? 'eager' : 'lazy'}
          className="desktop-img"
        />
        <div className="art-scrim" />
      </div>
    );
  }

  // Architectural / Technical presentation for internal backend systems (Soil Monitoring)
  return (
    <div className="project-art project-art--backend" aria-label={`${project.title} technical architecture overview`}>
      <div className="backend-card-inner">
        <div className="backend-header">
          <div className="backend-badge">
            <Server size={13} />
            <span>Backend Architecture</span>
          </div>
          <span className="mono">{project.context ?? 'Internal Service'}</span>
        </div>

        <div className="backend-body">
          <div className="backend-icon-wrap">
            <Database size={28} />
          </div>
          <div className="backend-title">{project.title}</div>
          <p className="backend-sub">Data ingestion endpoints, relational schema design &amp; monitoring logic</p>
          <div className="backend-tech-row">
            {project.stack.map((t) => (
              <span key={t} className="backend-tech-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="backend-footer">
          <span className="mono">PT Perkebunan Nusantara IV · Confidential Internal Platform</span>
        </div>
      </div>
    </div>
  );
}

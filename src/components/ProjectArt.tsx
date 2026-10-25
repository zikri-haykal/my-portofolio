import type { Project } from '../data/content';

/** Abstract device cover used until real screenshots are added to project.screenshots. */
export function ProjectArt({ project }: { project: Project }) {
  const bg = `linear-gradient(140deg, ${project.accent}22, ${project.accent}08 60%, transparent)`;
  const shot = project.screenshots[0];
  if (shot) {
    return (
      <div className="art">
        <img src={shot} alt={`${project.title} screenshot`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  const mobile = project.stack.includes('Android');
  return (
    <div className="art" style={{ background: bg }} aria-hidden="true">
      {mobile ? (
        <div className="phone">
          <div className="blk hero-blk" style={{ background: project.accent }}>{project.title}</div>
          <div className="blk" />
          <div className="blk" />
        </div>
      ) : (
        <div className="browser">
          <div className="browser-bar">
            <i /><i /><i />
            <span>{project.slug}</span>
          </div>
          <div className="browser-body">
            <div className="blk hero-blk" style={{ background: project.accent }}>{project.title}</div>
            <div className="blk" />
            <div className="blk" />
          </div>
        </div>
      )}
    </div>
  );
}

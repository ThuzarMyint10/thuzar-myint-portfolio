import StackPill from "../common/StackPill";

function ProjectCard({ p, delay }) {
  return (
    <article className={`reveal proj-card d${delay}`}>
      <div className="proj-card-topline">
        <span className="proj-icon" aria-hidden="true">{p.emoji}</span>
        {p.status && <span className="proj-status">{p.status}</span>}
      </div>
      <p className="proj-category">{p.category}</p>
      <h3 className="proj-title">{p.name}</h3>
      <p className="proj-description">{p.desc}</p>
      <div className="proj-stack" aria-label="Technology and focus areas">
        {p.stack.map((item) => (
          <StackPill key={item} label={item} cls={p.theme.pill} />
        ))}
      </div>
      <a className="proj-link" href={p.url} target="_blank" rel="noreferrer">
        Visit project <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default ProjectCard;

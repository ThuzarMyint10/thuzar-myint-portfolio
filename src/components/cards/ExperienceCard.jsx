function ExperienceCard({ exp, index }) {
  return (
    <div
      className={`experience-card reveal d${index}`}
      style={{
        "--accent": `var(${exp.accentVar})`,
      }}
    >
      {/* Glow */}
      <div className="experience-glow" />

      {/* Top */}
      <div className="experience-top">
        <div className="experience-left">
          <div className="company-row">
            <div className="company-logo">
              {exp.company.charAt(0)}
            </div>

            <div>
              <h3>{exp.company}</h3>

              <p className="role">{exp.role}</p>
            </div>
          </div>
        </div>

        <div className="experience-right">
          <div className="period">{exp.period}</div>

          {exp.current && (
            <div className="current">
              <span />
              CURRENT
            </div>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="meta-row">
        <div className="meta-pill">
          📍 {exp.location}
        </div>
      </div>

      {/* Tasks */}
      <div className="task-list">
        {exp.tasks.map((task) => (
          <div key={task} className="task-item">
            <div className="check">✓</div>

            <span>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
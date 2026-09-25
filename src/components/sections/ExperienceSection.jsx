import { EXPERIENCE } from "../../data/experienceData";
import ExperienceCard from "../cards/ExperienceCard";
import SectionHeader from "../common/SectionHeader";

function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="experience-container">

        <SectionHeader
          index={3}
          label="Experience"
          title="Work Experience"
          sub="A track record of delivering full-stack solutions across real companies — not just coding, but owning features end-to-end, working in agile teams, meeting deadlines, and collaborating effectively."
        />

        <div className="experience-list">

          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              exp={exp}
              index={i}
            />
          ))}

          {/* Education */}
          <div className="education-card reveal d3">
            <div className="education-icon">🎓</div>

            <div>
              <h3>Bachelor of Computer Science</h3>

              <p>
                University of Computer Studies, Myanmar · 2013 — 2018
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
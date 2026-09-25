import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import { PROJECTS } from "../../data/projectsData";

function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-container">
        <SectionHeader
          index={4}
          label="Projects"
          title="Selected Projects"
          sub="Business websites, commerce workflows and AI-enabled experiences built with teams across agriculture, animal health and wholesale."
        />
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} p={project} delay={i % 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

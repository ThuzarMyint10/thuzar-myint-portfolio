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
          title="Selected work"
          sub="A selection of business platforms and digital experiences across agriculture, animal health, and wholesale commerce."
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

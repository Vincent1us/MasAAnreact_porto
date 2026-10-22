import type { Project, Skill } from "../data/portfolioData";

interface ProjectsProps {
  projects: Project[];
  skills: Skill[];
}

export default function Projects({ projects, skills }: ProjectsProps) {
  return (
    <>
      {/* Bagian Portofolio Proyek */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Portofolio Proyek</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Keahlian & Teknologi (Kotak rapi tanpa logo) */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Keahlian & Teknologi</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-box">
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
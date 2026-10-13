import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title">Projects</h2>

        <p className="section-description">
          Applications I have worked on individually and with a team,
          bringing together user interfaces, APIs, and databases.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            aria-labelledby={`${project.id}-title`}
          >
            {project.image ? (
              <img
                className="project-image"
                src={project.image}
                alt={`${project.title} application preview`}
                loading="lazy"
                width="800"
                height="450"
              />
            ) : (
              <div className="project-placeholder" aria-hidden="true">
                <span>{project.title}</span>
              </div>
            )}

            <div className="project-content">
              <p className="project-type">{project.type}</p>

              <h3 id={`${project.id}-title`}>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-contribution">
                <h4>My contribution</h4>
                <p>{project.contribution}</p>
              </div>

              <ul
                className="skill-tags project-technologies"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              {(project.githubUrl || project.liveUrl) && (
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      className="project-button project-button-secondary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} code on GitHub (opens in a new tab)`}
                    >
                      View Code
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      className="project-button project-button-primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo (opens in a new tab)`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
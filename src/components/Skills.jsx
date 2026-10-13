const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend & Databases",
    description: "Building APIs and managing application data.",
    skills: ["Python", "Flask", "SQL", "PostgreSQL", "SQLAlchemy"],
  },
  {
    title: "Development Tools",
    description: "Tools I use to build, debug, and collaborate.",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Postman"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <p className="eyebrow">My toolkit</p>
        <h2 id="skills-title">Skills</h2>

        <p className="section-description">
          Technologies and tools I use to turn ideas into working web
          applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <ul className="skill-tags" aria-label={group.title}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
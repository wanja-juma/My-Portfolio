function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Hello, I’m</p>

        <h1 id="hero-title">Wanja Juma</h1>

        <h2>Full-Stack Developer</h2>

        <p className="hero-description">
          I’m an entry-level developer based in Nairobi. I build web applications using JavaScript, React,
          Python, Flask, and SQL.
        </p>

        <p className="hero-note">
          Bringing an operations background and a practical approach to
          solving problems through code.
        </p>
        <div className="hero-actions">
  <a className="project-button project-button-primary" href="#projects">
    View Projects
  </a>
</div>
      </div>

      <div className="hero-card">
        <span className="card-label">What I work with</span>

        <p>Frontend + Backend</p>

        <ul className="tech-list" aria-label="Technologies">
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Flask</li>
          <li>SQL</li>
        </ul>

        <span className="card-footer">
          Practical ideas. Thoughtful solutions.
        </span>
      </div>
    </section>
  );
}

export default Hero;
function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Get to know me</p>
        <h2 id="about-title">About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-content">
          <p>
            I’m Wanja Juma, an entry-level full-stack developer based in
            Nairobi. I enjoy turning everyday
            problems into useful, easy-to-use web applications.
          </p>

          <p>
            I build frontend interfaces with JavaScript and React, and
            backend APIs with Python, Flask, and SQL. Through individual
            and team projects, I have gained experience connecting
            interfaces to APIs, working with databases, and collaborating
            using Git and GitHub.
          </p>
          <p>
            Before transitioning into software development, I was self-employed,
            running my own retail shop selling shoes, clothing, and cosmetics.
            Managing the business helped me develop customer service, inventory
            management, organisation, and problem-solving skills that I now bring
            to my development work.
            </p>

          <p>
            I’m looking for opportunities to contribute, learn from
            experienced developers, and grow as a software engineer.
          </p>
        </div>

        <aside className="about-highlights" aria-label="My background">
          <h3>What I bring</h3>

          <ul className="highlights-list">
            <li>
              <h4>Practical problem-solving</h4>
              <p>
                An operations background that helps me understand
                workflows and user needs.
              </p>
            </li>

            <li>
              <h4>Full-stack foundations</h4>
              <p>
                Experience building React interfaces and Flask APIs
                backed by SQL databases.
              </p>
            </li>

            <li>
              <h4>Team collaboration</h4>
              <p>
                Experience contributing to shared projects and working
                with Git and GitHub.
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default About;
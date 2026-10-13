import contact from "../data/contact";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Let’s connect</p>
        <h2 id="contact-title">Contact Me</h2>

        <p className="section-description">
          Have an opportunity or a project in mind? I’d love to hear
          from you.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-content">
          <h3>Open to opportunities</h3>

          <p>
            I’m interested in entry-level developer roles and
            opportunities to build useful applications with a team.
            Let’s discuss how I can contribute.
          </p>

          <p className="contact-location">Based in Nairobi, Kenya.</p>
        </div>

        <div className="contact-actions">
          {contact.email && (
            <a
              className="project-button project-button-primary"
              href={`mailto:${contact.email}`}
            >
              Email Me
            </a>
          )}

          {contact.githubUrl && (
            <a
              className="project-button project-button-secondary"
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile (opens in a new tab)"
            >
              GitHub
            </a>
          )}

          {contact.linkedinUrl && (
            <a
              className="project-button project-button-secondary"
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile (opens in a new tab)"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
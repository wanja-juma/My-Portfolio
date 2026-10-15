function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home">
          Wanja<span>.</span>
        </a>

        <div className="nav-links">
          <a className="nav-link" href="#home">
            Home
          </a>

          <a className="nav-link" href="#about">
            About
          </a>

          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#projects">
  Projects
</a>
<a className="nav-link" href="#contact">
  Contact
</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
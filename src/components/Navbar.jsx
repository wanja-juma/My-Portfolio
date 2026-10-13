function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home">
          Ruth<span>.</span>
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
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
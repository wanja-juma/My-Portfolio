function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {currentYear} Wanja Juma. All rights reserved.</p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
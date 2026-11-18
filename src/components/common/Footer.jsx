function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">
        © {new Date().getFullYear()} Thu Zar Myint
      </span>

      <span className="footer-text">
        Built with React.js + Laravel
      </span>
    </footer>
  );
}

export default Footer;
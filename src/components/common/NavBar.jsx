import { useState } from "react";
import useNavScroll from "../../hooks/useNavScroll";
import { SECTIONS } from "../../constants/sections";
import scrollToSection from "../../utils/scrollToSection";

function NavBar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useNavScroll(setScrolled);

  const handleNav = (s) => {
    setActive(s);
    scrollToSection(s);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-primary">TZM</span>
        <span className="logo-secondary">.dev</span>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        {SECTIONS.map((s) => (
          <button
            key={s}
            className={`nav-btn ${active === s ? "active" : ""}`}
            onClick={() => handleNav(s)}
          >
            {s}
            {active === s && <span className="nav-active-dot" />}
          </button>
        ))}
      </div>

      {/* Hire Me CTA */}
      <button
        className="nav-hire-btn"
        onClick={() => handleNav("contact")}
      >
        Hire Me →
      </button>

      {/* Mobile Hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`ham-line ${menuOpen ? "open" : ""}`} />
        <span className={`ham-line ${menuOpen ? "open" : ""}`} />
        <span className={`ham-line ${menuOpen ? "open" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar-mobile">
          {SECTIONS.map((s) => (
            <button
              key={s}
              className={`nav-mobile-btn ${active === s ? "active" : ""}`}
              onClick={() => handleNav(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
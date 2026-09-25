import Avatar from "../common/Avatar";
import TechPill from "../common/TechPill";

import useTypewriter from "../../hooks/useTypewriter";

import { TYPEWRITER_TEXTS } from "../../data/typewriterTexts";
import { TECH_PILLS } from "../../data/techPills";
import { ABOUT_DATA } from "../../data/aboutData";

import scrollToSection from "../../utils/scrollToSection";

function AboutSection() {
  const typed = useTypewriter(TYPEWRITER_TEXTS);

  return (
    <section id="about" className="section about-section">
      {/* Avatar */}
      <div className="reveal about-avatar">
        <Avatar />
      </div>

      {/* Badge */}
      <div className="reveal d1 about-badge-wrap">
        <span className="about-badge">
          <span className="about-badge-dot" />
          {ABOUT_DATA.badge}
        </span>
      </div>

      {/* Name */}
      <h1 className="reveal d2 about-title">
        {ABOUT_DATA.name}
      </h1>

      {/* Typewriter */}
      <div className="reveal d3 about-typewriter">
        {typed}
        <span className="cursor">|</span>
      </div>

      {/* Bio */}
      <p className="reveal d4 about-bio">
        {ABOUT_DATA.bio}
      </p>

      {/* Stats */}
      <div className="reveal d4 about-stats">
        {ABOUT_DATA.stats.map(([v, l]) => (
          <div key={l} className="about-stat">
            <div className="stat-value">{v}</div>

            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* Tech Pills */}
      <div className="reveal about-pills">
        {TECH_PILLS.map((p) => (
          <TechPill key={p.label} {...p} />
        ))}
      </div>

      {/* Buttons */}
      <div className="reveal about-actions">
        <button
          className="primary-btn"
          onClick={() => scrollToSection("projects")}
        >
          View Projects →
        </button>

        <button
          className="secondary-btn"
          onClick={() => scrollToSection("contact")}
        >
          Get In Touch
        </button>
      </div>

      {/* Scroll */}
      <div className="scroll-indicator">
        <span>SCROLL</span>

        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default AboutSection;
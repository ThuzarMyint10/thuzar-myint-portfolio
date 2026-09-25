import { useState } from "react";
import { CATS } from "../../data/TechCategories";
import CategoryCard from "../../components/cards/CategoryCard";
import SkillCard from "../../components/cards/SkillCard";
import SectionHeader from "../common/SectionHeader";

export default function TechnicalExpertise() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <section id="skills" className="section tech-section">
        {/* HEADER */}
        <SectionHeader
          index={2}
          label="Skills"
          title="Technical Expertise"
          sub="A full-stack developer with deep expertise across Vue.js, React, Laravel, MySQL, Docker, and AI integration — not surface-level knowledge, but real hands-on experience battle-tested in production environments."
        />

        <div className="tech-badge">
          <span className="tech-badge-dot"></span>
          What I bring to the table
        </div>

      

        {/* GRID */}
        <div className="tech-grid">
          {CATS.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              index={i}
              onClick={() => setActiveModal(cat)}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            {/* MODAL HEADER */}
            <div className="modal-header" style={{ position: "relative" }}>
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 22,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: `${activeModal.color}15`,
                    border: `1px solid ${activeModal.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                  }}
                >
                  {activeModal.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff" }}>
                    {activeModal.title}
                  </h2>
                  <div
                    style={{
                      color: activeModal.accent,
                      marginTop: 5,
                      fontWeight: 600,
                    }}
                  >
                    {activeModal.tagline}
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: "rgba(220,230,225,.65)",
                  lineHeight: 1.8,
                  fontSize: 14,
                }}
              >
                {activeModal.desc}
              </p>
            </div>

            {/* SKILLS GRID */}
            <div className="modal-grid">
              {activeModal.skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  catColor={activeModal.color}
                  catAccent={activeModal.accent}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
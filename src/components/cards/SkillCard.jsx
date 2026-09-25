import { useState } from "react";
import CircleProgress from "../common/CircleProgress";
import LevelBadge from "../common/LevelBadge";

export default function SkillCard({ skill, catColor, catAccent, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.25)",
        border: `1px solid ${hovered ? catColor + "44" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 22,
        padding: "24px",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        animation: `fadeSlideUp 0.4s ease ${index * 0.06}s both`,
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top right, ${catColor}15, transparent 40%)`,
          pointerEvents: "none",
        }}
      />

      {/* TOP ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 20,
          marginBottom: 22,
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              background: `${catColor}15`,
              border: `1px solid ${catColor}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              boxShadow: `0 0 20px ${catColor}20`,
            }}
          >
            {skill.icon}
          </div>
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 6,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {skill.name}
            </div>
            <LevelBadge level={skill.level} />
          </div>
        </div>

        {/* Right */}
        <CircleProgress pct={skill.pct} color={catColor} size={68} />
      </div>

      {/* HIGHLIGHT */}
      <div
        style={{
          color: catAccent,
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 14,
          letterSpacing: ".02em",
        }}
      >
        {skill.highlight}
      </div>

      {/* HEADLINE */}
      <div
        style={{
          fontSize: 24,
          lineHeight: 1.3,
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: 16,
          maxWidth: "90%",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {skill.headline}
      </div>

      {/* DESCRIPTION */}
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.9,
          color: "rgba(220,230,225,0.72)",
          marginBottom: 24,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {skill.desc}
      </div>

      {/* FACTS GRID */}
      {skill.facts && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: 12,
            marginBottom: 22,
          }}
        >
          {skill.facts.map((fact, i) => (
            <div
              key={i}
              style={{
                padding: "12px 10px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 4,
                }}
              >
                {fact.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(220,230,225,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAGS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {skill.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "rgba(220,230,225,0.72)",
              fontWeight: 500,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
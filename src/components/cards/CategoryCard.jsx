import { useState } from "react";
import CircleProgress from "../common/CircleProgress";

export default function CategoryCard({ cat, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  const avgPct = Math.round(
    cat.skills.reduce((a, s) => a + s.pct, 0) / cat.skills.length
  );

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "28px 24px",
        borderRadius: 22,
        cursor: "pointer",
        background:
          "linear-gradient(160deg, rgba(8,19,11,0.6), rgba(11,26,14,0.6))",
        border: `1px solid ${
          hovered ? cat.color + "30" : "rgba(0,194,110,0.05)"
        }`,
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 40px ${cat.color}10` : "none",
        transition: "all 0.3s ease",
        animation: `fadeSlideUp 0.5s ease ${index * 0.08}s both`,
      }}
    >
      {/* Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",   // ← add this
            marginBottom: 18,
          }}
        >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            background: `${cat.color}08`,
            border: `1px solid ${cat.color}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {cat.icon}
        </div>
        <CircleProgress pct={avgPct} color={cat.color} size={58} />
      </div>

      <h3
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: "rgba(255,255,255,0.85)",
          marginBottom: 8,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {cat.title}
      </h3>

      <div
        style={{
          fontSize: 12,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: "rgba(200,255,220,0.6)",
          marginBottom: 12,
          fontWeight: 700,
        }}
      >
        {cat.tagline}
      </div>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.8,
          color: "rgba(220,230,225,.5)",
          marginBottom: 18,
        }}
      >
        {cat.desc}
      </p>

      {/* Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {cat.pills.map((pill) => (
          <span
            key={pill}
            style={{
              fontSize: 11,
              padding: "5px 12px",
              borderRadius: 999,
              background: `${cat.color}08`,
              border: `1px solid ${cat.color}20`,
              color: "rgba(200,255,220,0.7)",
              fontWeight: 600,
            }}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
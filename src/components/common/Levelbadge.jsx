import { LEVEL_STYLES } from "../../constants/levelStyles";

export default function LevelBadge({ level }) {
  const s = LEVEL_STYLES[level] || LEVEL_STYLES.Proficient;

  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        padding: "3px 9px",
        borderRadius: 99,
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {level}
    </span>
  );
}
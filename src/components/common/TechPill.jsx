import { PILL_COLORS }
from "../../constants/pillColors";

function TechPill({
  label,
  cls,
}) {
  const c =
    PILL_COLORS[cls] ||
    PILL_COLORS.blue;

  return (
    <span
      className="tech-pill"
      style={{
        "--pill-bg": c.bg,
        "--pill-border": c.border,
        "--pill-color": c.color,
      }}
    >
      {label}
    </span>
  );
}

export default TechPill;
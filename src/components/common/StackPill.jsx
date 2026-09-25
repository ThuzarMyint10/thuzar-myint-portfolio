import { PILL_COLORS } from "../../constants/pillColors";

function StackPill({ label, cls, style = {} }) {
  const c = PILL_COLORS[cls] || PILL_COLORS.blue;

  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 20,
        fontFamily: "'Roboto', monospace",

        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.color,

        ...style,
      }}
    >
      {label}
    </span>
  );
}

export default StackPill;
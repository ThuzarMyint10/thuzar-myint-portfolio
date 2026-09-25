import { useState, useEffect } from "react";

export default function CircleProgress({
  pct,
  size = 72,
  color,
  trackColor = "rgba(255,255,255,0.08)",
}) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(pct);
    }, 100);
    return () => clearTimeout(timer);
  }, [pct]);

  const dash = circumference * (animated / 100);

  return (
    <div className="progress-wrapper">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={6}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference - dash}`}
          style={{
            transition: "stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)",
            filter: `drop-shadow(0 0 8px ${color})`,
          }}
        />
      </svg>
      <div className="progress-inner">
        <span className="progress-text">{animated}%</span>
      </div>
    </div>
  );
}
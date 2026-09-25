function SectionHeader({
  index,
  label,
  title,
  sub,
  delay = "",
}) {
  return (
    <>
      <div className={`section-label reveal ${delay}`}>
        {String(index).padStart(2, "0")} / {label.toUpperCase()}
      </div>

      <h2 className={`section-title reveal ${delay}`}>
        {title}
      </h2>

      <p className={`section-subtitle reveal ${delay}`}>
        {sub}
      </p>
    </>
  );
}

export default SectionHeader;
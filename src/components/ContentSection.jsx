export default function ContentSection({
  id,
  title,
  items,
  className = "",
  renderItem,
}) {
  return (
    <section id={id} className={`content-section ${className}`}>
      <div className="section-inner">
        <header className="section-heading">
          <h2>{title}</h2>
        </header>
        <div className={`${className}__grid`}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
}

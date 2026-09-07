export default function ContentSection({
  id,
  title,
  items,
  className = "",
  renderItem,
  action,
}) {
  return (
    <section id={id} className={`content-section ${className}`}>
      <div className="section-inner">
        <header className={`section-heading${action ? " section-heading--with-action" : ""}`}>
          <h2>{title}</h2>
          {action}
        </header>
        <div className={`${className}__grid`}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
}

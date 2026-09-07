import { dimensionDiagrams } from "../../data/dimensionDiagrams";

export default function DimensionTable({ section }) {
  const diagram = dimensionDiagrams[section.id];
  return (
    <section className="dimension-detail__table" id={section.id}>
      <h2>{section.title} 치수표</h2>
      {diagram && (
        <img
          className="dimension-table-diagram"
          src={diagram.src}
          alt={diagram.alt}
          style={{ width: diagram.width }}
          loading="lazy"
        />
      )}
      <div className="dimension-table-wrap">
        <table className="dimension-data-table">
          <caption>{section.title} 치수 및 규격</caption>
          <thead>
            {section.headers.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, index) => (
                  <th key={index} colSpan={cell.colSpan} scope={cell.colSpan > 1 ? "colgroup" : "col"}>
                    {cell.label}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {section.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, index) => {
                  const Tag = index === 0 ? "th" : "td";
                  return (
                    <Tag key={index} scope={index === 0 ? "row" : undefined} colSpan={typeof cell === "object" ? cell.colSpan : undefined}>
                      {typeof cell === "object" ? cell.value : cell}
                    </Tag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.notes?.map((note) => <p className="dimension-table-note" key={note}>{note}</p>)}
    </section>
  );
}

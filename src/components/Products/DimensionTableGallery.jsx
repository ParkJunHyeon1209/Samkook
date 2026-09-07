import { Link } from "react-router-dom";
import { getProductCategory } from "../../data/products";

export default function DimensionTableGallery({ groups }) {
  return (
    <div className="dimension-groups">
      {groups.map((group) => (
        <section className="dimension-group" id={group.slug} key={group.slug}>
          <div className="dimension-group__heading">
            <h2>{group.title}</h2>
            <span>{group.slug === "accessories" ? group.tables.length : 1} ITEMS</span>
          </div>
          <div className="dimension-table-grid">
            {(group.slug === "accessories" ? group.tables : [{ ...group.tables[0], title: group.title }]).map((table) => (
              <Link
                className="dimension-table-card"
                key={table.slug}
                to={group.slug === "accessories" ? `/products/${group.slug}/${table.slug}` : `/products/${group.slug}`}
              >
                <img src={table.representativeImage ?? getProductCategory(group.slug).image} alt={table.title} />
                <strong>{table.title}</strong>
                <span>자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

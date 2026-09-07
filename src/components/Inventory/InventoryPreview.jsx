import { Link } from "react-router-dom";
import { inventoryGroups } from "../../data/inventory";
import "../Products/ProductCatalog.css";
import "./InventoryPreview.css";

export default function InventoryPreview() {
  return (
    <section id="inventory" className="inventory-preview content-section">
      <div className="section-inner">
        <div className="inventory-preview__header">
          <header className="section-heading">
            <h2>보유현황</h2>
          </header>
        </div>
        <div className="inventory-preview__groups">
          {inventoryGroups.map((group) => (
            <article className="product-card-item" key={group.slug}>
              <Link to={`/inventory?group=${group.slug}`}>
                <div className="product-card-item__image">
                  <img src={group.image} alt={group.title} />
                  <span>자세히 보기</span>
                </div>
                <div className="product-card-item__body">
                  <small>{group.description}</small>
                  <strong>{group.title}</strong>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

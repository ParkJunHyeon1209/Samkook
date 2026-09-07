import { SiteHeader } from "../Samguk/Samguk";
import DimensionTableGallery from "./DimensionTableGallery";
import { dimensionTableGroups } from "../../data/dimensionTables";
import "./ProductCatalog.css";

export default function ProductCatalog() {
  return (
    <main className="product-page">
      <SiteHeader staticHeader />
      <section className="product-list-section">
        <header className="product-list-heading">
          <small>SAMGUK STEEL PRODUCTS</small>
          <h1>주요제품</h1>
        </header>
        <nav className="dimension-nav" aria-label="치수표 바로가기">
          {dimensionTableGroups.map((group) => (
            <a href={`#${group.slug}`} key={group.slug}>
              {group.title}
            </a>
          ))}
        </nav>
        <DimensionTableGallery groups={dimensionTableGroups} />
      </section>
    </main>
  );
}

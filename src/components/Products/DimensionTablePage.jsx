import { Link, Navigate, useParams } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import {
  dimensionTableGroups,
  getDimensionTable,
} from "../../data/dimensionTables";
import { getProductCategory } from "../../data/products";
import DimensionTable from "./DimensionTable";
import "./ProductCatalog.css";

export default function DimensionTablePage() {
  const { groupSlug, tableSlug } = useParams();
  const group = dimensionTableGroups.find((item) => item.slug === groupSlug);
  const result = tableSlug ? getDimensionTable(groupSlug, tableSlug) : null;

  if (!group || (tableSlug && !result)) {
    return <Navigate to="/products" replace />;
  }

  const tables = result ? [result.table] : group.tables;
  const category = getProductCategory(groupSlug);
  const title = result ? result.table.title : group.title;
  const sections = tables.flatMap((table) => table.sections);

  return (
    <main className="dimension-detail-page">
      <SiteHeader staticHeader />
      <section className="dimension-detail">
        <Link className="dimension-detail__back" to={`/products#${group.slug}`}>
          ← 주요제품 전체보기
        </Link>
        <header className="dimension-detail__heading">
          <h1>{title}</h1>
        </header>
        <figure className="dimension-detail__representative">
          <img
            src={
              result?.table.representativeImage ?? category?.image
            }
            alt={`${title} 대표사진`}
          />
          <figcaption>{title} 대표사진</figcaption>
        </figure>
        <div className="dimension-detail__sections">
          {sections.map((section) => <DimensionTable key={section.id} section={section} />)}
          {sections.length === 0 && <p className="dimension-table-note">치수표 준비 중입니다.</p>}
        </div>
      </section>
    </main>
  );
}

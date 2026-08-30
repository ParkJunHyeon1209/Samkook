import { Link, Navigate, useParams } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import ProductCardList from "./ProductCardList";
import {
  getProductCategory,
  getProductCondition,
  productConditions,
} from "../../data/products";
import "./ProductCatalog.css";

export default function ProductCatalog() {
  const { categorySlug, conditionSlug } = useParams();
  const category = getProductCategory(categorySlug);
  const condition = getProductCondition(conditionSlug);

  if (!category) {
    return <Navigate to="/products/h-beam/used" replace />;
  }

  if (!condition) {
    return <Navigate to={`/products/${category.slug}/used`} replace />;
  }

  const products = category.variants[condition.slug];

  return (
    <main className="product-page">
      <SiteHeader productNavigation />

      <section className="product-list-section">
        <div className="product-list-heading">
          <small>SAMGUK STEEL PRODUCTS</small>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>

        <nav className="product-condition-tabs" aria-label={`${category.title} 제품 상태`}>
          {productConditions.map((item) => (
            <Link
              className={condition.slug === item.slug ? "active" : ""}
              key={item.slug}
              to={`/products/${category.slug}/${item.slug}`}
            >
              <strong>{item.title}</strong>
              <span>{category.title} {item.title} 제품 보기</span>
            </Link>
          ))}
        </nav>

        <div className="product-list-title">
          <div>
            <span>{condition.title}</span>
            <h2>{category.title} {condition.title}</h2>
          </div>
          <span>{products.length} PRODUCTS</span>
        </div>

        <ProductCardList products={products} condition={condition.title} />
      </section>
    </main>
  );
}

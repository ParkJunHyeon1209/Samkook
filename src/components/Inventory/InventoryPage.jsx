import { useSearchParams } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import ProductCardList from "../Products/ProductCardList";
import { inventoryGroups } from "../../data/inventory";
import "../Products/ProductCatalog.css";
import "./InventoryPage.css";

export default function InventoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedGroup =
    inventoryGroups.find((group) => group.slug === searchParams.get("group")) ??
    inventoryGroups[0];
  const selectedCategory =
    selectedGroup.filters.find(
      (category) => category.slug === searchParams.get("filter"),
    ) ?? selectedGroup.filters[0];

  return (
    <main className="inventory-page">
      <SiteHeader staticHeader />
      <section className="inventory-section">
        <header className="inventory-heading">
          <small>INVENTORY STATUS</small>
          <h1>{selectedGroup.title} 보유현황</h1>
          <p>삼국철강이 현재 보유하고 있는 철강재입니다.</p>
        </header>
        <div
          className="inventory-filter inventory-group-filter"
          role="group"
          aria-label="보유현황 분류"
        >
          {inventoryGroups.map((group) => (
            <button
              key={group.slug}
              type="button"
              className={selectedGroup.slug === group.slug ? "active" : ""}
              aria-pressed={selectedGroup.slug === group.slug}
              onClick={() => setSearchParams({ group: group.slug })}
            >
              {group.title}
            </button>
          ))}
        </div>
        <div
          className="inventory-filter"
          role="group"
          aria-label={`${selectedGroup.title} 필터`}
        >
          {selectedGroup.filters.map((category) => (
            <button
              className={
                selectedCategory.slug === category.slug ? "active" : ""
              }
              key={category.slug}
              type="button"
              onClick={() =>
                setSearchParams({
                  group: selectedGroup.slug,
                  filter: category.slug,
                })
              }
              aria-pressed={selectedCategory.slug === category.slug}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="inventory-list-heading">
          <h2>{selectedCategory.title}</h2>
          <span>{selectedCategory.items.length} ITEMS</span>
        </div>
        {selectedCategory.items.length > 0 ? (
          <ProductCardList products={selectedCategory.items} condition={null} />
        ) : (
          <p className="inventory-empty">
            {selectedCategory.title} 사진을 준비 중입니다.
          </p>
        )}
      </section>
    </main>
  );
}

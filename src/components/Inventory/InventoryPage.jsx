import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import ProductCardList from "../Products/ProductCardList";
import { inventoryGroups } from "../../data/inventory";

const InventoryPageElement = styled("main", { target: "inventory-page" })`
  min-height: 100vh;

  background: #f4f6f8;

  & .product-image-modal__content > img {
    object-fit: contain;
  }
`;

const InventorySection = styled("section", { target: "inventory-section" })`
  width: min(1180px, calc(100% - 48px));

  margin: 0 auto;

  padding: 70px 0 100px;

  @media (max-width: 680px) {
    width: calc(100% - 32px);
    padding: 40px 0 70px;
  }
`;

const InventoryHeading = styled("header", { target: "inventory-heading" })`
  margin-bottom: 38px;

  padding-bottom: 28px;

  border-bottom: 1px solid #dbe2e8;

  & small {
    color: #1768e5;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0;
  }

  & h1 {
    margin: 8px 0 12px;
    color: #101923;
    font-size: 40px;
    letter-spacing: 0;
  }

  & p {
    margin: 0;
    color: #66717d;
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 680px) {
    & h1 {
      font-size: 32px;
    }
  }
`;

const InventoryFilter = styled("div", { target: "inventory-filter inventory-group-filter" })`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-bottom: 42px;

  margin-bottom: 18px;

  & button {
    min-width: 150px;
    padding: 14px 24px;
    color: #66717d;
    background: #fff;
    border: 1px solid #dbe2e8;
    cursor: pointer;
    font-weight: 700;
  }

  & button.active {
    color: #fff;
    background: #1768e5;
    border-color: #1768e5;
  }

  @media (max-width: 680px) {
    gap: 5px;

    & button {
      min-width: 0;
      flex: 1;
      padding: 12px 8px;
      font-size: 15px;
    }
  }
`;

const InventoryFilterElement = styled("div", { target: "inventory-filter" })`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-bottom: 42px;

  & button {
    min-width: 150px;
    padding: 14px 24px;
    color: #66717d;
    background: #fff;
    border: 1px solid #dbe2e8;
    cursor: pointer;
    font-weight: 700;
  }

  & button.active {
    color: #fff;
    background: #1768e5;
    border-color: #1768e5;
  }

  @media (max-width: 680px) {
    gap: 5px;

    & button {
      min-width: 0;
      flex: 1;
      padding: 12px 8px;
      font-size: 15px;
    }
  }
`;

const InventoryListHeading = styled("div", { target: "inventory-list-heading" })`
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 18px;

  & h2 {
    margin: 0;
    font-size: 26px;
  }

  & span {
    color: #87929c;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;

const InventoryEmpty = styled("p", { target: "inventory-empty" })`
  padding: 40px 0;

  text-align: center;

  color: #66717d;

  font-size: 17px;
`;

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
    <InventoryPageElement>
      <SiteHeader staticHeader />
      <InventorySection>
        <InventoryHeading>
          <small>INVENTORY STATUS</small>
          <h1>{selectedGroup.title} 보유현황</h1>
          <p>삼국철강이 현재 보유하고 있는 철강재입니다.</p>
        </InventoryHeading>
        <InventoryFilter

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
        </InventoryFilter>
        <InventoryFilterElement

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
        </InventoryFilterElement>
        <InventoryListHeading>
          <h2>{selectedCategory.title}</h2>
          <span>{selectedCategory.items.length} ITEMS</span>
        </InventoryListHeading>
        {selectedCategory.items.length > 0 ? (
          <ProductCardList products={selectedCategory.items} />
        ) : (
          <InventoryEmpty>
            {selectedCategory.title} 사진을 준비 중입니다.
          </InventoryEmpty>
        )}
      </InventorySection>
    </InventoryPageElement>
  );
}

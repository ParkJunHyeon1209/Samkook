import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LoadingImage from "../LoadingImage";
import { inventoryGroups } from "../../data/inventory";

const InventoryPreviewElement = styled("section", { target: "inventory-preview content-section" })`
  background: #fff;

  padding: 36px 0;

  @media (max-width:680px) {
    padding: 55px 0;
  }
`;

const SectionInner = styled("div", { target: "section-inner" })`
  width: min(1280px, calc(100% - 48px));

  margin: 0 auto;

  @media (max-width:680px) {
    width: calc(100% - 32px);
  }
`;

const InventoryPreviewHeader = styled("div", { target: "inventory-preview__header" })`
  @media (max-width: 680px) {
    margin-bottom: 28px;

    & .section-heading {
      margin-bottom: 18px;
    }
  }
`;

const SectionHeading = styled("header", { target: "section-heading" })`
  margin-bottom: 32px;

  text-align: center;

  & h2 {
    margin: 5px 0 0;
    font-size: 32px;
    letter-spacing: 0;
  }

  & h2::after {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    margin: 13px auto 0;
    background: var(--blue);
  }

  &.section-heading--with-action {
    position: relative;
  }

  @media (max-width:680px) {
    & h2 {
      font-size: 28px;
    }
  }
`;

const InventoryPreviewGroups = styled("div", { target: "inventory-preview__groups" })`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 18px;

  & .product-card-item > a {
    display: block;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCardItem = styled("article", { target: "product-card-item" })`
  overflow: hidden;

  background: #fff;

  border: 1px solid #dfe5ea;

  transition: .2s;

  &:hover {
    transform: translateY(-4px);
    border-color: #1768e5;
    box-shadow: 0 12px 30px rgba(0, 35, 70, .09);
  }

  &>button {
    width: 100%;
    padding: 0;
    text-align: left;
    background: none;
    border: 0;
    cursor: pointer;
  }

  & > button:disabled {
    color: inherit;
    cursor: default;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover .product-card-item__image span,
  &:focus-within .product-card-item__image span {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductCardItemImage = styled("div", { target: "product-card-item__image" })`
  height: 190px;

  position: relative;

  overflow: hidden;

  background: #dce1e5;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: saturate(.7);
    transition: .35s;
  }

  & span {
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 7px 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    background: rgba(3, 22, 38, .78);
    opacity: 0;
    transform: translateY(4px);
    pointer-events: none;
    transition: opacity .2s, transform .2s;
  }

  @media (hover: none) {
    & span {
      opacity: 1;
      transform: none;
    }
  }
`;

const ProductCardItemBody = styled("div", { target: "product-card-item__body" })`
  display: grid;

  grid-template-columns: 1fr auto;

  align-items: end;

  gap: 12px;

  padding: 20px;

  & small {
    grid-column: 1 / -1;
    color: #1768e5;
    font-size: 13px;
    font-weight: 800;
  }

  & strong {
    font-size: 20px;
  }
`;

export default function InventoryPreview() {
  return (
    <InventoryPreviewElement id="inventory" >
      <SectionInner>
        <InventoryPreviewHeader>
          <SectionHeading>
            <h2>보유현황</h2>
          </SectionHeading>
        </InventoryPreviewHeader>
        <InventoryPreviewGroups>
          {inventoryGroups.map((group) => (
            <ProductCardItem  key={group.slug}>
              <Link to={`/inventory?group=${group.slug}`}>
                <ProductCardItemImage>
                  <LoadingImage src={group.image} alt={group.title} />
                  <span>자세히 보기</span>
                </ProductCardItemImage>
                <ProductCardItemBody>
                  <small>{group.description}</small>
                  <strong>{group.title}</strong>
                </ProductCardItemBody>
              </Link>
            </ProductCardItem>
          ))}
        </InventoryPreviewGroups>
      </SectionInner>
    </InventoryPreviewElement>
  );
}

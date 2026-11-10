import styled from "@emotion/styled";
import { SiteHeader } from "../Samguk/Samguk";
import DimensionTableGallery from "./DimensionTableGallery";
import { dimensionTableGroups } from "../../data/dimensionTables";

const ProductPage = styled("main", { target: "product-page" })`
  min-height: 100vh;

  color: #101923;

  background: #f4f6f8;
`;

const ProductListSection = styled("section", { target: "product-list-section" })`
  width: min(1180px, calc(100% - 48px));

  margin: 0 auto;

  padding: 70px 0 100px;

  @media (max-width: 680px) {
    width: calc(100% - 32px);
    padding: 36px 0 70px;
  }
`;

const ProductListHeading = styled("header", { target: "product-list-heading" })`
  position: relative;

  padding: 42px 46px;

  color: #fff;

  background: linear-gradient(110deg, #061a2c, #0b3557);

  border-left: 4px solid #1768e5;

  & small {
    color: #68a5ff;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0;
  }

  & h1 {
    margin: 7px 0 10px;
    font-size: 40px;
    letter-spacing: 0;
  }

  @media (max-width: 680px) {
    padding: 30px 24px;

    & h1 {
      font-size: 32px;
    }
  }
`;

const DimensionNav = styled("nav", { target: "dimension-nav" })`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  margin: 24px 0 54px;

  & a {
    min-width: 130px;
    padding: 13px 20px;
    text-align: center;
    color: #66717d;
    font-size: 16px;
    font-weight: 700;
    transition: .2s;
    background: #fff;
    border: 1px solid #dbe2e8;
  }

  & a:hover {
    color: #fff;
    background: #1768e5;
    border-color: #1768e5;
  }

  @media (max-width: 680px) {
    overflow-x: auto;

    justify-content: flex-start;

    & a {
      min-width: 110px;
      flex: none;
    }
  }
`;

export default function ProductCatalog() {
  return (
    <ProductPage>
      <SiteHeader staticHeader />
      <ProductListSection>
        <ProductListHeading>
          <small>SAMGUK STEEL PRODUCTS</small>
          <h1>주요제품</h1>
        </ProductListHeading>
        <DimensionNav  aria-label="치수표 바로가기">
          {dimensionTableGroups.map((group) => (
            <a href={`#${group.slug}`} key={group.slug}>
              {group.title}
            </a>
          ))}
        </DimensionNav>
        <DimensionTableGallery groups={dimensionTableGroups} />
      </ProductListSection>
    </ProductPage>
  );
}

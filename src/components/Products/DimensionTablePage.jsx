import styled from "@emotion/styled";
import { Link, Navigate, useParams } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import {
  dimensionTableGroups,
  getDimensionTable,
} from "../../data/dimensionTables";
import { getProductCategory, productDescriptions } from "../../data/products";
import DimensionTable from "./DimensionTable";
import LoadingImage from "../LoadingImage";

const DimensionDetailPage = styled("main", { target: "dimension-detail-page" })`
  min-height: 100vh;

  background: #fff;
`;

const DimensionDetail = styled("section", { target: "dimension-detail" })`
  width: min(1180px, calc(100% - 48px));

  margin: 0 auto;

  padding: 52px 0 100px;

  @media (max-width: 680px) {
    width: calc(100% - 32px);
    padding: 36px 0 70px;
  }
`;

const DimensionDetailBack = styled(Link, { target: "dimension-detail__back" })`
  display: inline-block;

  margin-bottom: 30px;

  color: #66717d;

  font-size: 15px;

  font-weight: 700;

  &:hover {
    color: #1768e5;
  }
`;

const DimensionDetailHeading = styled("header", { target: "dimension-detail__heading" })`
  margin-bottom: 28px;

  & h1 {
    margin: 7px 0 10px;
    font-size: 38px;
  }

  @media (max-width: 680px) {
    & h1 {
      font-size: 31px;
    }
  }
`;

const ProductDescription = styled("p", { target: "product-description" })`
  margin: 0 0 24px;

  color: #526170;

  font-size: 18px;

  line-height: 1.9;

  word-break: keep-all;

  overflow-wrap: break-word;
`;

const DimensionDetailRepresentative = styled("figure", { target: "dimension-detail__representative" })`
  position: relative;

  min-height: 240px;

  margin: 0 0 64px;

  display: flex;

  flex-direction: column;

  align-items: center;

  & img {
    display: block;
    width: min(100%, 800px);
    height: auto;
    object-fit: contain;
  }

  & figcaption {
    margin-top: 12px;
    color: #66717d;
    font-size: 16px;
  }

  @media (max-width: 680px) {
    margin-bottom: 40px;
  }
`;

const DimensionDetailSections = styled("div", { target: "dimension-detail__sections" })`
  display: grid;

  gap: 56px;

  @media (max-width: 680px) {
    gap: 36px;
  }
`;

const DimensionTableNote = styled("p", { target: "dimension-table-note" })`
  margin: 14px 0 0;

  color: #66717d;

  font-size: 15px;

  line-height: 1.8;
`;

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
  const description = productDescriptions[title] ?? productDescriptions[group.title];
  const sections = tables.flatMap((table) => table.sections);

  return (
    <DimensionDetailPage>
      <SiteHeader staticHeader />
      <DimensionDetail>
        <DimensionDetailBack  to={`/products#${group.slug}`}>
          ← 주요제품 전체보기
        </DimensionDetailBack>
        <DimensionDetailHeading>
          <h1>{title}</h1>
          {description && <ProductDescription>{description}</ProductDescription>}
        </DimensionDetailHeading>
        <DimensionDetailRepresentative>
          <LoadingImage
            src={
              result?.table.representativeImage ?? category?.image
            }
            alt={`${title} 대표사진`}
          />
          <figcaption>{title} 대표사진</figcaption>
        </DimensionDetailRepresentative>
        <DimensionDetailSections>
          {sections.map((section) => <DimensionTable key={section.id} section={section} />)}
          {sections.length === 0 && <DimensionTableNote>치수표 준비 중입니다.</DimensionTableNote>}
        </DimensionDetailSections>
      </DimensionDetail>
    </DimensionDetailPage>
  );
}

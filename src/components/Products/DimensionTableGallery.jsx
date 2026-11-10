import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LoadingImage from "../LoadingImage";
import { getProductCategory } from "../../data/products";

const DimensionGroups = styled("div", { target: "dimension-groups" })`
  display: grid;

  gap: 68px;
`;

const DimensionGroup = styled("section", { target: "dimension-group" })`

`;

const DimensionGroupHeading = styled("div", { target: "dimension-group__heading" })`
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 18px;

  & h2 {
    margin: 0;
    font-size: 28px;
  }

  & span {
    color: #87929c;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;

const DimensionTableGrid = styled("div", { target: "dimension-table-grid" })`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const DimensionTableCard = styled(Link, { target: "dimension-table-card" })`
  position: relative;

  display: grid;

  grid-template-columns: 1fr auto;

  align-items: center;

  gap: 8px 12px;

  padding: 0 0 18px;

  overflow: hidden;

  text-align: left;

  background: #fff;

  border: 1px solid #dbe2e8;

  cursor: pointer;

  & img {
    width: 100%;
    height: 330px;
    grid-column: 1 / -1;
    object-fit: contain;
    background: #fff;
    border-bottom: 1px solid #e6eaee;
  }

  & strong {
    padding-left: 18px;
    font-size: 18px;
  }

  & span {
    padding-right: 18px;
    color: #1768e5;
    font-size: 13px;
    font-weight: 700;
  }
`;

export default function DimensionTableGallery({ groups }) {
  return (
    <DimensionGroups>
      {groups.map((group) => (
        <DimensionGroup  id={group.slug} key={group.slug}>
          <DimensionGroupHeading>
            <h2>{group.title}</h2>
            <span>{group.slug === "accessories" ? group.tables.length : 1} ITEMS</span>
          </DimensionGroupHeading>
          <DimensionTableGrid>
            {(group.slug === "accessories" ? group.tables : [{ ...group.tables[0], title: group.title }]).map((table) => (
              <DimensionTableCard

                key={table.slug}
                to={group.slug === "accessories" ? `/products/${group.slug}/${table.slug}` : `/products/${group.slug}`}
              >
                <LoadingImage src={table.representativeImage ?? getProductCategory(group.slug).image} alt={table.title} />
                <strong>{table.title}</strong>
                <span>자세히 보기 →</span>
              </DimensionTableCard>
            ))}
          </DimensionTableGrid>
        </DimensionGroup>
      ))}
    </DimensionGroups>
  );
}

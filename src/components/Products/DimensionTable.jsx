import styled from "@emotion/styled";
import { dimensionDiagrams } from "../../data/dimensionDiagrams";

const DimensionDetailTable = styled("section", { target: "dimension-detail__table" })`
  padding-top: 28px;

  border-top: 1px solid #dbe2e8;

  & h2 {
    margin: 0 0 24px;
    font-size: 24px;
  }

  @media (max-width: 680px) {
    padding-top: 20px;

    & h2 {
      font-size: 21px;
    }
  }

  min-width: 0;
`;

const DimensionTableDiagram = styled("img", { target: "dimension-table-diagram" })`
  display: block;

  max-width: 100%;

  height: auto;

  margin: 0 0 28px auto;
`;

const DimensionTableWrap = styled("div", { target: "dimension-table-wrap" })`
  width: 100%;

  overflow-x: auto;
`;

const DimensionDataTable = styled("table", { target: "dimension-data-table" })`
  width: 100%;

  table-layout: fixed;

  border-collapse: collapse;

  font-size: 16px;

  line-height: 1.6;

  font-variant-numeric: tabular-nums;

  & caption {
    padding: 10px 0;
    text-align: left;
    color: #66717d;
    font-size: 15px;
  }

  & th,
  & td {
    padding: 10px 6px;
    border: 1px solid #dbe2e8;
    text-align: center;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  & thead th {
    background: #eaf1f8;
    color: #183b5b;
    font-weight: 700;
  }

  & tbody th {
    background: #f5f7fa;
    font-weight: 600;
  }

  & tbody tr:nth-child(even) td {
    background: #fafbfd;
  }

  @media (max-width: 680px) {
    min-width: 640px;

    font-size: 14px;

    line-height: 1.4;

    & th,
  & td {
      padding: 7px 2px;
    }
  }
`;

const DimensionTableNote = styled("p", { target: "dimension-table-note" })`
  margin: 14px 0 0;

  color: #66717d;

  font-size: 15px;

  line-height: 1.8;
`;

export default function DimensionTable({ section }) {
  const diagram = dimensionDiagrams[section.id];
  return (
    <DimensionDetailTable  id={section.id}>
      <h2>{section.title} 치수표</h2>
      {diagram && (
        <DimensionTableDiagram

          src={diagram.src}
          alt={diagram.alt}
          style={{ width: diagram.width }}
          loading="lazy"
        />
      )}
      <DimensionTableWrap>
        <DimensionDataTable>
          <caption>{section.title} 치수 및 규격</caption>
          <thead>
            {section.headers.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, index) => (
                  <th key={index} colSpan={cell.colSpan} scope={cell.colSpan > 1 ? "colgroup" : "col"}>
                    {cell.label}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {section.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, index) => {
                  const Tag = index === 0 ? "th" : "td";
                  return (
                    <Tag key={index} scope={index === 0 ? "row" : undefined} colSpan={typeof cell === "object" ? cell.colSpan : undefined}>
                      {typeof cell === "object" ? cell.value : cell}
                    </Tag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </DimensionDataTable>
      </DimensionTableWrap>
      {section.notes?.map((note) => <DimensionTableNote  key={note}>{note}</DimensionTableNote>)}
    </DimensionDetailTable>
  );
}

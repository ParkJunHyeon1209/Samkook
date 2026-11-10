import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

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

const DeliveryRecordPreview = styled("div", { target: "delivery-record-preview" })`
  box-sizing: border-box;

  height: 190px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 12px;

  padding: 24px;

  color: #fff;

  background: linear-gradient(120deg, #061a2c, #154b76);

  & small {
    color: #90bdff;
  }

  & strong {
    font-size: 21px;
  }

  & span {
    font-size: 12px;
    color: #c9d8e6;
  }

  & b {
    font-size: 12px;
    color: #90bdff;
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

const DeliveryRecordDialog = styled("dialog", { target: "delivery-record-dialog" })`
  width: min(1100px, calc(100% - 32px));

  max-height: 85vh;

  padding: 0;

  border: 0;

  border-radius: 12px;

  color: #172b3c;

  &::backdrop {
    background: rgb(0 8 16 / 80%);
  }
`;

const DeliveryRecordContent = styled("div", { target: "delivery-record-content" })`
  position: relative;

  padding: 36px;

  & h2 {
    margin: 0 40px 28px 0;
    font-size: 24px;
  }

  @media (max-width: 680px) {
    padding: 24px 16px;

    & h2 {
      font-size: 20px;
    }
  }
`;

const DeliveryRecordClose = styled("button", { target: "delivery-record-close" })`
  position: absolute;

  top: 16px;

  right: 16px;

  width: 44px;

  height: 44px;

  border: 0;

  border-radius: 50%;

  background: #eaf1f8;

  color: #172b3c;

  font-size: 28px;

  cursor: pointer;
`;

const DeliveryRecordScroll = styled("div", { target: "delivery-record-scroll" })`
  overflow-x: auto;

  & table {
    width: 100%;
    min-width: 760px;
    border-collapse: collapse;
    font-size: 14px;
    line-height: 1.7;
  }

  & th,
  & td {
    padding: 18px 14px;
    border: 1px solid #dbe2e8;
    text-align: center;
  }

  & thead th {
    background: #123958;
    color: white;
  }

  & tbody th {
    width: 35%;
    text-align: left;
    font-weight: 500;
    word-break: keep-all;
  }

  & td {
    white-space: nowrap;
  }

  & td:nth-child(3) {
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  & tbody tr:nth-child(even) {
    background: #f4f7fa;
  }
`;

const records = [
  ["광명–시흥간 전력구 공사 현장", "24/10/11~진행중", "367,000", "한국전력공사", "임대"],
  ["신분당선 광교–호매실 복선전철 제3공구 건설공사 현장", "24/12/09~진행중", "3,400,000", "계룡건설", "판매"],
  ["광주도시철도 2호선 2단계 11공구 현장", "24/12/12~진행중", "700,000", "디엘건설", "판매"],
  ["서울원–큐브 물류창고 사업현장", "25/07/25~진행중", "1,023,000", "현대산업개발", "판매·임대"],
  ["시티오씨엘 8단지 토목공사 현장", "25/12/25~진행중", "2,400,414", "현대산업개발", "판매·임대"],
  ["을지로 행복복지 센터 현장", "26/03/26~진행중", "200,000", "우미건설", "판매"],
  ["그 외", "26.01. ~ 진행중", "1,720,000", "기타현장", "판매·임대"],
];

export default function DeliveryRecordCard() {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [isOpen]);

  return (
    <>
      <ProductCardItem>
        <button type="button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <DeliveryRecordPreview>
            <small>2026년 상반기</small>
            <strong>H-BEAM 납품 실적</strong>
            <span>현장별 계약기간 · 물량 · 원청사</span>
            <b>실적 보기 →</b>
          </DeliveryRecordPreview>
          <ProductCardItemBody><strong>H-BEAM 납품 실적</strong></ProductCardItemBody>
        </button>
      </ProductCardItem>
      <DeliveryRecordDialog ref={dialogRef}  onClose={() => setIsOpen(false)} onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }} aria-labelledby="delivery-record-title">
        <DeliveryRecordContent>
          <DeliveryRecordClose  type="button" onClick={() => setIsOpen(false)} aria-label="납품 실적 닫기">×</DeliveryRecordClose>
          <h2 id="delivery-record-title">2026년 (상반기) 납품 실적</h2>
          <DeliveryRecordScroll  tabIndex={0} role="region" aria-label="현장별 납품 실적 표">
            <table>
              <thead><tr>{["현장명", "계약기간", "계약물량 (kg)", "원청사", "비고"].map((label) => <th key={label} scope="col">{label}</th>)}</tr></thead>
              <tbody>{records.map(([site, ...values]) => (
                <tr key={site}><th scope="row">{site}</th>{values.map((value, index) => <td key={index}>{value}</td>)}</tr>
              ))}</tbody>
            </table>
          </DeliveryRecordScroll>
        </DeliveryRecordContent>
      </DeliveryRecordDialog>
    </>
  );
}

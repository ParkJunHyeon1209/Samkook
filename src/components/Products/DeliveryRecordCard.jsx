import { useEffect, useRef, useState } from "react";
import "./DeliveryRecordCard.css";

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
      <article className="product-card-item">
        <button type="button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <div className="delivery-record-preview">
            <small>2026년 상반기</small>
            <strong>H-BEAM 납품 실적</strong>
            <span>현장별 계약기간 · 물량 · 원청사</span>
            <b>실적 보기 →</b>
          </div>
          <div className="product-card-item__body"><strong>H-BEAM 납품 실적</strong></div>
        </button>
      </article>
      <dialog ref={dialogRef} className="delivery-record-dialog" onClose={() => setIsOpen(false)} onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }} aria-labelledby="delivery-record-title">
        <div className="delivery-record-content">
          <button className="delivery-record-close" type="button" onClick={() => setIsOpen(false)} aria-label="납품 실적 닫기">×</button>
          <h2 id="delivery-record-title">2026년 (상반기) 납품 실적</h2>
          <div className="delivery-record-scroll" tabIndex={0} role="region" aria-label="현장별 납품 실적 표">
            <table>
              <thead><tr>{["현장명", "계약기간", "계약물량 (kg)", "원청사", "비고"].map((label) => <th key={label} scope="col">{label}</th>)}</tr></thead>
              <tbody>{records.map(([site, ...values]) => (
                <tr key={site}><th scope="row">{site}</th>{values.map((value, index) => <td key={index}>{value}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </dialog>
    </>
  );
}

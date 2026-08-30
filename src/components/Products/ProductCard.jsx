import { useEffect, useState } from "react";

export default function ProductCard({ name, condition, image }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <article className="product-card-item">
        <button type="button" onClick={() => setIsOpen(true)}>
          <div className="product-card-item__image">
            <img src={image} alt={`${name} ${condition}`} />
            <span>이미지 크게 보기</span>
          </div>
          <div className="product-card-item__body">
            <strong>{name}</strong>
            <em>{condition}</em>
          </div>
        </button>
      </article>

      {isOpen && (
        <div
          className="product-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} 이미지`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="product-image-modal__content">
            <button
              className="product-image-modal__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="이미지 닫기"
            >
              ×
            </button>
            <img src={image} alt={`${name} ${condition}`} />
            <div>
              <span>{condition}</span>
              <strong>{name}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

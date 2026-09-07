import { useEffect, useState } from "react";

export default function ProductCard({ name, condition, image, images, actionLabel = "이미지 크게 보기" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const photos = images?.length ? images : [image];
  const imageAlt = [name, condition].filter(Boolean).join(" ");

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
        <button type="button" onClick={() => { setImageIndex(0); setIsOpen(true); }}>
          <div className="product-card-item__image">
            <img src={photos[0]} alt={imageAlt} />
            <span>{actionLabel}</span>
          </div>
          <div className="product-card-item__body">
            <strong>{name}</strong>
            {condition && <em>{condition}</em>}
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
            <img src={photos[imageIndex]} alt={`${imageAlt}${photos.length > 1 ? ` 사진 ${imageIndex + 1}` : ""}`} />
            <div>
              <span>{condition}</span>
              <strong>{name}</strong>
            </div>
            {photos.length > 1 && (
              <div className="product-image-modal__navigation">
                <button type="button" aria-label="이전 사진" onClick={() => setImageIndex((index) => (index - 1 + photos.length) % photos.length)}>← 이전</button>
                <span aria-live="polite">{imageIndex + 1} / {photos.length}</span>
                <button type="button" aria-label="다음 사진" onClick={() => setImageIndex((index) => (index + 1) % photos.length)}>다음 →</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

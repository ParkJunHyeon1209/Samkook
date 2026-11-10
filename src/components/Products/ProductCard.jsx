import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import LoadingImage from "../LoadingImage";

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

const ProductCardItemPlaceholder = styled("p", { target: "product-card-item__placeholder" })`
  display: grid;

  place-items: center;

  height: 100%;

  margin: 0;

  color: #66717d;

  font-size: 17px;
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

const ProductCardItemSpecification = styled("span", { target: "product-card-item__specification" })`
  white-space: pre-line;

  grid-column: 1 / -1;

  margin-top: -6px;

  color: #64748b;

  font-size: 17px;

  font-weight: 500;

  line-height: 1.5;
`;

const ProductImageModal = styled("div", { target: "product-image-modal" })`
  position: fixed;

  z-index: 100;

  inset: 0;

  display: grid;

  place-items: center;

  padding: 5vh 5vw;

  background: rgba(0, 8, 16, .84);

  backdrop-filter: blur(5px);
`;

const ProductImageModalContent = styled("div", { target: "product-image-modal__content" })`
  width: 80vw;

  height: 80vh;

  position: relative;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  background: #061a2c;

  box-shadow: 0 25px 80px rgba(0, 0, 0, .45);

  &>img {
    width: 100%;
    min-height: 0;
    flex: 1;
    object-fit: cover;
  }

  &>div {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 18px 24px;
    color: #fff;
  }

  &>div span {
    color: #68a5ff;
    font-size: 14px;
    font-weight: 800;
  }

  &>div strong {
    font-size: 20px;
  }

  &>.product-image-modal__navigation {
    justify-content: center;
    padding-top: 0;
  }

  @media (max-width: 680px) {
    width: 90vw;
  }
`;

const ProductImageModalClose = styled("button", { target: "product-image-modal__close" })`
  width: 42px;

  height: 42px;

  position: absolute;

  z-index: 1;

  top: 14px;

  right: 14px;

  color: #fff;

  background: rgba(2, 14, 25, .8);

  border: 1px solid rgba(255, 255, 255, .35);

  border-radius: 50%;

  cursor: pointer;

  font-size: 29px;

  line-height: 1;
`;

const ProductImageModalNavigation = styled("div", { target: "product-image-modal__navigation" })`
  & button {
    min-height: 44px;
    padding: 8px 18px;
    border: 1px solid #50677c;
    border-radius: 6px;
    color: #fff;
    background: #12324e;
    cursor: pointer;
  }

  & button:hover {
    background: #1768e5;
  }
`;

export default function ProductCard({ name, title, specification, image, images, actionLabel = "이미지 크게 보기" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const photos = images?.length ? images : image ? [image] : [];

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
      <ProductCardItem>
        <button type="button" disabled={!photos.length} onClick={() => { setImageIndex(0); setIsOpen(true); }}>
          <ProductCardItemImage>
            {photos.length ? (
              <>
                <LoadingImage src={photos[0]} alt={name} />
                <span>{actionLabel}</span>
              </>
            ) : <ProductCardItemPlaceholder>사진 준비 중</ProductCardItemPlaceholder>}
          </ProductCardItemImage>
          <ProductCardItemBody>
            <strong>{title ?? name}</strong>
            {specification && <ProductCardItemSpecification>{specification}</ProductCardItemSpecification>}
          </ProductCardItemBody>
        </button>
      </ProductCardItem>

      {isOpen && (
        <ProductImageModal

          role="dialog"
          aria-modal="true"
          aria-label={`${name} 이미지`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <ProductImageModalContent>
            <ProductImageModalClose

              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="이미지 닫기"
            >
              ×
            </ProductImageModalClose>
            <LoadingImage src={photos[imageIndex]} alt={`${name}${photos.length > 1 ? ` 사진 ${imageIndex + 1}` : ""}`} />
            <div>
              <strong>{name}</strong>
            </div>
            {photos.length > 1 && (
              <ProductImageModalNavigation>
                <button type="button" aria-label="이전 사진" onClick={() => setImageIndex((index) => (index - 1 + photos.length) % photos.length)}>← 이전</button>
                <span aria-live="polite">{imageIndex + 1} / {photos.length}</span>
                <button type="button" aria-label="다음 사진" onClick={() => setImageIndex((index) => (index + 1) % photos.length)}>다음 →</button>
              </ProductImageModalNavigation>
            )}
          </ProductImageModalContent>
        </ProductImageModal>
      )}
    </>
  );
}

import styled from "@emotion/styled";
import { useState } from "react";

const ImageLoadingStatus = styled("i", { target: "image-loading-status" })`
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 12px;

  color: #64748b;

  font-size: 14px;

  font-style: normal;

  text-align: center;

  pointer-events: none;
`;

const ImageLoadingSpinner = styled("i", { target: "image-loading-spinner" })`
  width: 32px;

  height: 32px;

  border: 3px solid #cbd5e1;

  border-top-color: #1768e5;

  border-radius: 50%;

  animation: image-loading-spin .8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

function ImageRequest({ src, alt, ...props }) {
  const [status, setStatus] = useState("loading");

  function checkImage(image) {
    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? "loaded" : "error");
    }
  }

  return (
    <>
      <img
        {...props}
        src={src}
        alt={alt}
        ref={checkImage}
        data-image-status={status}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
      {status !== "loaded" && (
        <ImageLoadingStatus  role="status" aria-label={status === "loading" ? "이미지 로딩 중" : "이미지를 불러오지 못했습니다"}>
          {status === "loading" ? <ImageLoadingSpinner  aria-hidden="true" /> : "이미지를 불러오지 못했습니다"}
        </ImageLoadingStatus>
      )}
    </>
  );
}

export default function LoadingImage(props) {
  return <ImageRequest key={props.src} {...props} />;
}

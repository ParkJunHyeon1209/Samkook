import { useState } from "react";
import "./LoadingImage.css";

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
        <i className="image-loading-status" role="status" aria-label={status === "loading" ? "이미지 로딩 중" : "이미지를 불러오지 못했습니다"}>
          {status === "loading" ? <i className="image-loading-spinner" aria-hidden="true" /> : "이미지를 불러오지 못했습니다"}
        </i>
      )}
    </>
  );
}

export default function LoadingImage(props) {
  return <ImageRequest key={props.src} {...props} />;
}

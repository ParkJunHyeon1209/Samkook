import { useEffect, useRef, useState } from "react";

const address = "경기도 화성시 우정읍 주곡리 161-90";
const mapLink = `https://map.kakao.com/link/search/${encodeURIComponent(address)}`;
let sdkPromise;

async function loadMapSdk(key) {
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      const timeout = window.setTimeout(() => reject(new Error("Map loading timed out")), 15000);
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(key)}&autoload=false&libraries=services`;
      script.onload = () => {
        if (!window.kakao?.maps) {
          clearTimeout(timeout);
          reject(new Error("Map SDK unavailable"));
          return;
        }
        window.kakao.maps.load(() => {
          clearTimeout(timeout);
          resolve(window.kakao.maps);
        });
      };
      script.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Map SDK unavailable"));
      };
      document.head.appendChild(script);
    });
  }
  const pendingSdk = sdkPromise;
  try {
    return await pendingSdk;
  } catch (error) {
    if (sdkPromise === pendingSdk) sdkPromise = undefined;
    throw error;
  }
}

export default function ContactMap() {
  const container = useRef(null);
  const key = import.meta.env.VITE_KAKAO_MAP_APP_KEY;
  const [status, setStatus] = useState(key ? "loading" : "unavailable");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!key) return;
    let cancelled = false;
    let observer;
    let marker;
    let infoWindow;
    async function initializeMap() {
      try {
        const maps = await loadMapSdk(key);
        if (cancelled) return;
        new maps.services.Geocoder().addressSearch(address, (results, resultStatus) => {
          if (cancelled) return;
          if (resultStatus !== maps.services.Status.OK || !results.length) {
            setStatus("unavailable");
            return;
          }
          const center = new maps.LatLng(results[0].y, results[0].x);
          const map = new maps.Map(container.current, { center, level: 3, scrollwheel: false });
          marker = new maps.Marker({ map, position: center, title: "삼국철강(주)" });
          infoWindow = new maps.InfoWindow({
            content: '<div style="padding:10px 16px;color:#172b3c;font-size:14px;white-space:nowrap">삼국철강(주)</div>',
          });
          infoWindow.open(map, marker);
          map.addControl(new maps.ZoomControl(), maps.ControlPosition.RIGHT);
          observer = new ResizeObserver(() => {
            map.relayout();
            map.setCenter(center);
          });
          observer.observe(container.current);
          setStatus("ready");
        });
      } catch {
        if (!cancelled) setStatus("unavailable");
      }
    }
    initializeMap();
    return () => {
      cancelled = true;
      observer?.disconnect();
      marker?.setMap(null);
      infoWindow?.close();
    };
  }, [key, attempt]);

  return (
    <section className="contact-map" aria-label="삼국철강 오시는 길">
      <div className="contact-map__heading">
        <strong>오시는 길</strong>
        <span>지도를 움직이거나 확대해 위치를 확인하세요</span>
      </div>
      <div className="contact-map__frame">
        <div ref={container} className="contact-map__canvas" aria-label="삼국철강 위치 지도" />
        {status !== "ready" && (
          <div className="contact-map__fallback" role="status">
            <strong>삼국철강(주)</strong>
            <span>{status === "loading" ? "지도를 불러오는 중입니다." : "지도를 불러오지 못했습니다."}</span>
            {status !== "loading" && key && <button type="button" onClick={() => {
              setStatus("loading");
              setAttempt((value) => value + 1);
            }}>지도 다시 불러오기</button>}
          </div>
        )}
      </div>
      <p>{address}</p>
      <a href={mapLink} target="_blank" rel="noreferrer">카카오맵에서 큰 지도 보기 ↗</a>
    </section>
  );
}

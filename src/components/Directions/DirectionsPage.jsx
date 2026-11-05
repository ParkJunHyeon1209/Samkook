import { Link } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import ContactMap from "../Map/ContactMap";
import "./DirectionsPage.css";

const address = "경기도 화성시 우정읍 주곡리 161-90";
const mapSearch = encodeURIComponent(address);

function LocationIllustration() {
  return (
    <svg
      viewBox="0 0 440 490"
      role="img"
      aria-label="경기도 화성에 위치한 삼국철강의 위치를 표시한 한국 지도 일러스트"
    >
      <defs>
        <pattern
          id="directions-dots"
          width="15"
          height="15"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="7" cy="7" r="5" fill="#e4e9ee" />
        </pattern>
        <linearGradient id="directions-pin" x2="0.8" y2="1">
          <stop stopColor="#2279dc" />
          <stop offset="1" stopColor="#172e70" />
        </linearGradient>
      </defs>
      <path
        d="M249 25 267 46 263 78 282 100 286 122 311 156 320 186 344 208 348 239 370 268 363 297 380 315 366 345 343 350 328 376 297 385 277 403 249 397 224 419 206 403 185 418 171 395 145 403 133 379 108 378 119 351 101 337 116 317 105 295 120 272 111 255 132 232 124 211 145 193 138 171 159 151 180 153 190 128 214 119 221 94 238 82 232 55Z"
        fill="url(#directions-dots)"
      />
      <ellipse cx="132" cy="455" rx="34" ry="14" fill="url(#directions-dots)" />
      <ellipse cx="153" cy="238" rx="35" ry="10" fill="#cbd9ec" opacity=".5" />
      <path
        d="M153 143c-27 0-47 20-47 46 0 33 47 67 47 67s47-34 47-67c0-26-20-46-47-46Z"
        fill="url(#directions-pin)"
      />
      <circle cx="153" cy="189" r="28" fill="white" />
      <path
        d="m153 170 17 10v19l-17 10-17-10v-19Zm0 0v20m-17-10 17 10 17-10m-17 10v19"
        fill="none"
        stroke="#1d59a5"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M205 185h49" stroke="#285da7" strokeWidth="1.5" />
      <circle cx="254" cy="185" r="3" fill="#285da7" />
      <text x="268" y="181" fill="#172d52" fontSize="19" fontWeight="700">
        화성
      </text>
      <text x="268" y="203" fill="#738297" fontSize="11" letterSpacing="1">
        SAMGUK STEEL
      </text>
    </svg>
  );
}

function DetailIcon({ type }) {
  const paths = {
    address: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c-1 5-4 5-7 3C8 17 4 13 3 7c0-3 2-4 4-4Z" />
    ),
    fax: (
      <>
        <path d="M6 9V3h12v6M6 17H3V9h18v8h-3M6 14h12v7H6Z" />
        <path d="M16 11h2M9 17h6" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
  };
  return (
    <span className="directions-detail-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
    </span>
  );
}

export default function DirectionsPage() {
  return (
    <main className="directions-page">
      <SiteHeader staticHeader />
      <nav className="directions-subnav" aria-label="회사소개">
        <Link to="/#company">핵심가치</Link>
        <Link to="/company/directions" aria-current="page">
          찾아오시는 길
        </Link>
      </nav>
      <div className="directions-inner">
        <header className="directions-title">
          <span>CONTACT & LOCATION</span>
          <h1>찾아오시는 길</h1>
          <p>삼국철강으로 오시는 길을 안내해 드립니다.</p>
        </header>
        <section
          className="directions-overview"
          aria-labelledby="directions-company"
        >
          <div className="directions-illustration">
            <LocationIllustration />
          </div>
          <div className="directions-details">
            <span className="directions-eyebrow">SAMGUK STEEL</span>
            <h2 id="directions-company">
              삼국철강<span>(주)</span>
            </h2>
            <dl>
              <div>
                <dt>
                  <DetailIcon type="address" />
                  주소
                </dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt>
                  <DetailIcon type="phone" />
                  전화
                </dt>
                <dd>
                  <a href="tel:0313513277">031-351-3277</a>
                </dd>
              </div>
              <div>
                <dt>
                  <DetailIcon type="fax" />
                  팩스
                </dt>
                <dd>031-351-3276</dd>
              </div>
              <div>
                <dt>
                  <DetailIcon type="email" />
                  이메일
                </dt>
                <dd>
                  <a href="mailto:samguksteel@naver.com">
                    samguksteel@naver.com
                  </a>
                </dd>
              </div>
            </dl>
            <div className="directions-hours">
              <strong>영업 시간</strong>
              <span>평일 08:30 – 17:30</span>
            </div>
            <div className="directions-actions">
              <a
                href={`https://map.kakao.com/link/search/${mapSearch}`}
                target="_blank"
                rel="noreferrer"
              >
                카카오맵에서 보기 <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`https://map.naver.com/p/search/${mapSearch}`}
                target="_blank"
                rel="noreferrer"
              >
                네이버 지도에서 보기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
        <section
          className="directions-map-section"
          aria-labelledby="directions-map-title"
        >
          <div className="directions-map-title">
            <h2 id="directions-map-title">위치 안내</h2>
            <p>방문 전 연락 주시면 친절하게 안내해 드리겠습니다.</p>
          </div>
          <ContactMap />
        </section>
      </div>
      <footer className="directions-footer">
        <strong>삼국철강(주)</strong>
        <p>{address}</p>
        <small>© 2026 SAMGUK STEEL Co., Ltd. All rights reserved.</small>
      </footer>
    </main>
  );
}

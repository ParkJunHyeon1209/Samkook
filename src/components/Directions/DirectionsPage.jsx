import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import ContactMap from "../Map/ContactMap";

const DirectionsDetailIcon = styled("span", { target: "directions-detail-icon" })`
  display: grid;

  place-items: center;

  flex-shrink: 0;

  width: 36px;

  height: 36px;

  background: #f0f5fb;

  color: #2d5894;

  border-radius: 50%;

  & svg {
    width: 19px;
    height: 19px;
  }
`;

const DirectionsPageElement = styled("main", { target: "directions-page" })`
  background: #fff;

  color: #171e29;

  min-height: 100vh;

  & a:focus-visible {
    outline: 3px solid #4c94eb;
    outline-offset: 4px;
  }
`;

const DirectionsSubnav = styled("nav", { target: "directions-subnav" })`
  display: flex;

  justify-content: center;

  border-bottom: 1px solid #e4e7eb;

  & a {
    width: 240px;
    text-align: center;
    padding: 27px 16px;
    text-decoration: none;
    color: #757c86;
    font-weight: 700;
    font-size: 16px;
    border-bottom: 3px solid transparent;
  }

  & a[aria-current] {
    color: #1d3e7e;
    border-color: #1d3e7e;
  }

  @media (max-width: 600px) {
    & a {
      width: 50%;
      padding: 21px 10px;
      font-size: 14px;
    }
  }
`;

const DirectionsInner = styled("div", { target: "directions-inner" })`
  width: min(1160px, calc(100% - 64px));

  margin: auto;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
  }
`;

const DirectionsTitle = styled("header", { target: "directions-title" })`
  text-align: center;

  padding: 91px 0 58px;

  & > span {
    color: #52749f;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
  }

  & h1 {
    font-size: clamp(34px, 4vw, 48px);
    letter-spacing: -2px;
    margin: 17px 0 18px;
    line-height: 1.25;
  }

  & p {
    color: #88909a;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    padding: 53px 0 10px;

    & h1 {
      letter-spacing: -1px;
    }

    & p {
      font-size: 13px;
    }
  }
`;

const DirectionsOverview = styled("section", { target: "directions-overview" })`
  display: grid;

  grid-template-columns: 0.95fr 1.2fr;

  gap: 68px;

  align-items: center;

  padding: 0 0 75px;

  @media (max-width: 800px) {
    gap: 20px;
    grid-template-columns: .8fr 1.2fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding-bottom: 40px;
  }
`;

const DirectionsIllustration = styled("div", { target: "directions-illustration" })`
  max-width: 440px;

  width: 100%;

  justify-self: center;

  & svg {
    display: block;
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 265px;
  }
`;

const DirectionsDetails = styled("div", { target: "directions-details" })`
  padding: 24px 0;

  & h2 {
    font-size: 30px;
    margin: 10px 0 27px;
    letter-spacing: -1px;
  }

  & h2 > span {
    font-size: 24px;
    margin-left: 4px;
  }

  & dl {
    border-top: 2px solid #263b5a;
    margin: 0;
    padding: 19px 0;
    border-bottom: 1px solid #e5e9ee;
  }

  & dl > div {
    display: grid;
    grid-template-columns: 115px 1fr;
    align-items: center;
    gap: 12px;
    padding: 13px 0;
  }

  & dt {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 15px;
    font-weight: 700;
  }

  & dd {
    margin: 0;
    color: #626b77;
    font-size: 15px;
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  & dd a {
    color: inherit;
    text-decoration: none;
  }

  & dd a:hover {
    color: #1768e5;
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    & dl > div {
      grid-template-columns: 90px 1fr;
    }

    & dt {
      gap: 8px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 0;

    & h2 {
      font-size: 27px;
    }

    & dd {
      font-size: 13px;
    }
  }
`;

const DirectionsEyebrow = styled("span", { target: "directions-eyebrow" })`
  color: #52749f;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 2.5px;
`;

const DirectionsHours = styled("div", { target: "directions-hours" })`
  display: flex;

  gap: 22px;

  font-size: 13px;

  color: #7b8593;

  padding: 22px 0;

  & strong {
    color: #485468;
  }
`;

const DirectionsActions = styled("div", { target: "directions-actions" })`
  display: flex;

  gap: 10px;

  & a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 15px 18px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    background: #203e74;
    text-decoration: none;
    border: 1px solid #203e74;
    transition: background .2s;
  }

  & a + a {
    color: #334867;
    background: white;
    border-color: #d8dfe8;
  }

  & a:hover {
    background: #edf3fb;
    color: #203e74;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: row;

    & a {
      padding: 14px 12px;
      font-size: 12px;
    }
  }
`;

const DirectionsMapSection = styled("section", { target: "directions-map-section" })`
  padding: 42px 0 90px;

  border-top: 1px solid #e5e9ee;

  & .contact-map {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: #526477;
  }

  & .contact-map__heading {
    display: none;
  }

  & .contact-map__frame {
    border: 1px solid #e1e6ec;
    border-radius: 0;
  }

  & .contact-map__canvas {
    height: 420px;
  }

  & .contact-map__fallback {
    background: #f3f5f7;
    color: #718094;
  }

  & .contact-map > p,
  & .contact-map > a {
    font-size: 13px;
    color: #66778d;
  }

  @media (max-width: 600px) {
    padding: 32px 0 45px;

    & .contact-map__canvas {
      height: 320px;
    }
  }
`;

const DirectionsMapTitle = styled("div", { target: "directions-map-title" })`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-bottom: 22px;

  & h2 {
    font-size: 23px;
    margin: 0;
  }

  & p {
    color: #818b98;
    font-size: 13px;
    margin: 0;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const DirectionsFooter = styled("footer", { target: "directions-footer" })`
  padding: 35px 24px;

  text-align: center;

  background: #f6f7f9;

  border-top: 1px solid #e8ebef;

  color: #8b94a1;

  & strong {
    color: #4e5b6c;
    font-size: 16px;
  }

  & p {
    font-size: 13px;
    margin: 12px 0;
  }

  & small {
    font-size: 11px;
  }
`;

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
    <DirectionsDetailIcon>
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
    </DirectionsDetailIcon>
  );
}

export default function DirectionsPage() {
  return (
    <DirectionsPageElement>
      <SiteHeader staticHeader />
      <DirectionsSubnav  aria-label="회사소개">
        <Link to="/company/values">핵심가치</Link>
        <Link to="/company/directions" aria-current="page">
          찾아오시는 길
        </Link>
      </DirectionsSubnav>
      <DirectionsInner>
        <DirectionsTitle>
          <span>CONTACT & LOCATION</span>
          <h1>찾아오시는 길</h1>
          <p>삼국철강으로 오시는 길을 안내해 드립니다.</p>
        </DirectionsTitle>
        <DirectionsOverview

          aria-labelledby="directions-company"
        >
          <DirectionsIllustration>
            <LocationIllustration />
          </DirectionsIllustration>
          <DirectionsDetails>
            <DirectionsEyebrow>SAMGUK STEEL</DirectionsEyebrow>
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
            <DirectionsHours>
              <strong>영업 시간</strong>
              <span>평일 08:30 – 17:30</span>
            </DirectionsHours>
            <DirectionsActions>
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
            </DirectionsActions>
          </DirectionsDetails>
        </DirectionsOverview>
        <DirectionsMapSection

          aria-labelledby="directions-map-title"
        >
          <DirectionsMapTitle>
            <h2 id="directions-map-title">위치 안내</h2>
            <p>방문 전 연락 주시면 친절하게 안내해 드리겠습니다.</p>
          </DirectionsMapTitle>
          <ContactMap />
        </DirectionsMapSection>
      </DirectionsInner>
      <DirectionsFooter>
        <strong>삼국철강(주)</strong>
        <p>{address}</p>
        <small>© 2026 SAMGUK STEEL Co., Ltd. All rights reserved.</small>
      </DirectionsFooter>
    </DirectionsPageElement>
  );
}

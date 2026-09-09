import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContentSection from "../ContentSection";
import InventoryPreview from "../Inventory/InventoryPreview";
import ContactMap from "../Map/ContactMap";
import ProductCard from "../Products/ProductCard";
import DeliveryRecordCard from "../Products/DeliveryRecordCard";
import { accessoryImages, productCategories } from "../../data/products";
import logoImage from "../../assets/images/Logo-White.webp";
import yardImage1 from "../../assets/images/gallery/yard-1.webp";
import yardImage2 from "../../assets/images/gallery/yard-2.webp";
import rentalSiteImage1 from "../../assets/images/gallery/rental-site-1.webp";
import rentalSiteImage2 from "../../assets/images/gallery/rental-site-2.webp";
import rentalSiteImage3 from "../../assets/images/gallery/rental-site-3.webp";
import rentalSiteImage4 from "../../assets/images/gallery/rental-site-4.webp";
import rentalSiteImage5 from "../../assets/images/gallery/rental-site-5.webp";
import shipmentImage1 from "../../assets/images/gallery/shipment-1.webp";
import shipmentImage2 from "../../assets/images/gallery/shipment-2.webp";
import shipmentImage3 from "../../assets/images/gallery/shipment-3.webp";
import shipmentImage4 from "../../assets/images/gallery/shipment-4.webp";
import "./Samguk.css";

const navItems = [
  ["회사소개", "#company"],
  ["사업분야", "#business"],
  ["주요제품", "/products"],
  ["보유현황", "/inventory"],
  ["납품실적", "#gallery"],
  ["고객지원", "#contact"],
];

const businessItems = [
  {
    title: "철강재 판매",
    eyebrow: "STEEL SALES",
    description:
      "H-Beam, 철근, 형강류 등 다양한 철강제품을 합리적인 가격으로 공급합니다.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?fm=webp&fit=crop&w=1200&q=85",
  },
  {
    title: "철강재 렌탈",
    eyebrow: "STEEL RENTAL",
    description:
      "필요한 기간만 효율적으로! 가설재, H-Beam 등 다양한 철강 임대 서비스를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?fm=webp&fit=crop&w=1200&q=85",
  },
  {
    title: "철강재 매입",
    eyebrow: "STEEL PURCHASE",
    description:
      "사용하지 않는 H-Beam, 철근, 형강류 등 다양한 철강제품을 신속하고 합리적인 가격으로 매입합니다.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?fm=webp&fit=crop&w=1200&q=85",
  },
];

const productItems = productCategories.map((category) =>
  category.slug === "accessories"
    ? { ...category, image: accessoryImages["복공판"] }
    : category
);

const galleryItems = [
  [
    "야적장 전경",
    yardImage1,
    [yardImage1, yardImage2],
  ],
  [
    "출하 / 상차 현장",
    shipmentImage1,
    [shipmentImage1, shipmentImage2, shipmentImage3, shipmentImage4],
  ],
  [
    "가설재 임대 현장",
    rentalSiteImage1,
    [rentalSiteImage1, rentalSiteImage2, rentalSiteImage3, rentalSiteImage4, rentalSiteImage5],
  ],
].map(([title, image, images]) => ({ title, image, images }));

const stats = [
  ["inventory", "보유 재고", "5,000톤+", "다양한 규격의 철강재 보유"],
  ["delivery", "연간 납품 규모", "12,000톤+", "풍부한 경험과 안정적인 공급"],
  ["partners", "주요 거래처", "300개+", "건설사 및 중공업 협력사"],
  ["location", "납품 가능 지역", "전국", "전국 어디든 신속 납품"],
];

const strengths = [
  ["estimate", "빠른 견적", "신속하고 정확한 견적 제공"],
  ["delivery", "신속 납품", "자체 운송망을 통한 빠른 납품"],
  ["shield", "렌탈 전문", "체계적인 임대 자재 관리"],
  ["customer", "고객 맞춤", "현장 상황에 맞춘 솔루션"],
  ["support", "신뢰와 책임", "정직한 거래와 책임 서비스"],
];

function StrengthIcon({ type }) {
  const paths = {
    estimate: (
      <>
        <circle cx="24" cy="27" r="15" />
        <path d="M24 12V7m-5 0h10M24 27l8-6M12 17l-3-3m27 3 3-3M24 42v-3" />
      </>
    ),
    delivery: (
      <>
        <path d="M5 14h24v20H5zM29 21h8l6 7v6H29zM10 14V9h14v5" />
        <circle cx="13" cy="35" r="4" />
        <circle cx="36" cy="35" r="4" />
      </>
    ),
    shield: (
      <path d="M24 5 40 12v11c0 10-6 17-16 21C14 40 8 33 8 23V12zM16 24l6 6 11-13" />
    ),
    customer: (
      <>
        <circle cx="19" cy="16" r="8" />
        <circle cx="34" cy="18" r="6" />
        <path d="M4 41c1-10 6-16 15-16s14 6 15 16M32 27c7 0 11 5 12 13" />
      </>
    ),
    support: (
      <>
        <path d="M8 26v-5a16 16 0 0 1 32 0v5M8 24H5v11h7V24zM40 24h3v11h-7V24zM36 37c-2 4-5 5-10 5" />
        <circle cx="24" cy="42" r="2" />
      </>
    ),
  };

  return (
    <svg className="strength-icon" viewBox="0 0 48 48" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function InfoIcon({ type, className = "info-icon" }) {
  const paths = {
    inventory: (
      <>
        <path d="M5 13 24 4l19 9-19 9zM5 13v22l19 9 19-9V13M24 22v22" />
        <path d="m14 9 19 9v10" />
      </>
    ),
    delivery: (
      <>
        <path d="M4 12h25v23H4zM29 20h8l7 8v7H29z" />
        <circle cx="13" cy="36" r="4" />
        <circle cx="37" cy="36" r="4" />
        <path d="M9 7h16M12 3h10" />
      </>
    ),
    partners: (
      <>
        <circle cx="18" cy="16" r="7" />
        <circle cx="34" cy="18" r="5" />
        <path d="M5 41c1-10 5-16 13-16s13 6 14 16M31 27c7 0 11 5 12 13" />
      </>
    ),
    location: (
      <>
        <path d="M40 20c0 11-16 24-16 24S8 31 8 20a16 16 0 1 1 32 0Z" />
        <circle cx="24" cy="20" r="5" />
      </>
    ),
    phone: (
      <path d="M13 5 6 10c1 15 17 31 32 32l5-7-10-7-4 5c-6-3-11-8-14-14l5-4z" />
    ),
    email: (
      <>
        <rect x="5" y="9" width="38" height="30" rx="3" />
        <path d="m7 13 17 14 17-14" />
      </>
    ),
  };

  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="삼국철강 홈">
      <img className="logo-image" src={logoImage} alt="" />
      <span>
        <strong>삼국철강(주)</strong>
        <small>SAMGUK STEEL</small>
      </span>
    </Link>
  );
}

function useMobileHeader() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 680px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 680px)");
    const updateScreenSize = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", updateScreenSize);
    return () => mediaQuery.removeEventListener("change", updateScreenSize);
  }, []);

  return isMobile;
}

export function SiteHeader({ staticHeader = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobileHeader();
  const { pathname } = useLocation();
  const links = navItems;

  return (
    <header
      className={`site-header${staticHeader ? " site-header--static" : ""}`}
    >
      <div className="header-inner">
        <Logo />
        {isMobile && (
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="메뉴 열기"
          >
            ☰
          </button>
        )}
        <nav className={menuOpen ? "open" : ""}>
          {links.map(([label, href]) => (
            <Link
              className={
                href.startsWith("/") && pathname.startsWith(href)
                  ? "active"
                  : ""
              }
              key={label}
              to={href.startsWith("/") ? href : `/${href}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function Samguk() {
  return (
    <main id="top">
      <SiteHeader />

      <section id="company" className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <h1>
            철강 판매와 매입, 그리고 렌탈의
            <br />
            새로운 기준
            <br />
            <strong>삼국철강(주)</strong>
          </h1>
          <p className="hero-kicker">Steel &amp; Rental Solution</p>
          <p className="hero-description">
            철강 판매, 매입 및 렌탈 전문기업 삼국철강(주)는
            <br />
            고객의 성공을 위한 최고의 파트너가 되겠습니다.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              견적 문의하기
            </a>
            <a className="button ghost" href="tel:0313513277">
              전화 상담하기
            </a>
          </div>
        </div>
        <div className="stats">
          {stats.map(([icon, label, value, detail]) => (
            <div className="stat" key={label}>
              <InfoIcon type={icon} className="stat-icon" />
              <div>
                <small>{label}</small>
                <strong>{value}</strong>
                <p>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContentSection
        id="business"
        title="사업분야"
        items={businessItems}
        className="business"
        renderItem={(item) => (
          <article className="business-card" key={item.title}>
            <img src={item.image} alt="" />
            <div className="business-copy">
              <small>{item.eyebrow}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        )}
      />

      <ContentSection
        id="products"
        title="주요 제품"
        action={<Link className="products-view-all" to="/products">전체보기 →</Link>}
        items={productItems}
        className="products"
        renderItem={(item) => (
          <Link
            className="product-card"
            key={item.title}
            to={item.slug === "accessories" ? "/products#accessories" : `/products/${item.slug}`}
          >
            <div className="image-wrap">
              <img src={item.image} alt={item.title} />
              <span className="card-more">자세히 보기</span>
            </div>
            <h3>{item.title}</h3>
          </Link>
        )}
      />

      <InventoryPreview />

      <section className="strengths">
        <div className="section-inner">
          <h2>삼국철강이 선택받는 이유</h2>
          <div className="strength-grid">
            {strengths.map(([icon, title, description]) => (
              <article key={icon}>
                <StrengthIcon type={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="content-section gallery">
        <div className="section-inner">
          <header className="section-heading">
            <h2>납품 및 현장 갤러리</h2>
          </header>
          <div className="product-card-list">
            {galleryItems.map((item) => (
              <ProductCard
                key={item.title}
                name={item.title}
                actionLabel="더보기"
                image={item.image}
                images={item.images}
              />
            ))}
            <DeliveryRecordCard />
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-inner contact-grid">
          <div>
            <h2>문의하기</h2>
            <p>
              철강 판매 및 렌탈에 관한 문의는 아래 연락처로 언제든지 연락주세요.
            </p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <div>
              <input aria-label="회사명" placeholder="회사명" />
              <input aria-label="담당자" placeholder="담당자" />
              <input aria-label="연락처" placeholder="연락처" />
            </div>
            <textarea aria-label="문의내용" placeholder="문의내용" />
            <button>문의 접수하기</button>
          </form>
          <address>
            <div className="contact-info-item">
              <InfoIcon type="phone" />
              <div>
                <b>031-351-3277</b>
                <span>
                  평일 08:30 - 17:30
                  <em className="contact-closed">(주말 및 공휴일 휴무)</em>
                </span>
              </div>
            </div>
            <div className="contact-info-item">
              <InfoIcon type="email" />
              <a href="mailto:samguksteel@naver.com">samguksteel@naver.com</a>
            </div>
            <div className="contact-info-item">
              <InfoIcon type="location" />
              <p>
                경기도 화성시 우정읍 주곡리 161-90
                <br />
                삼국철강(주)
              </p>
            </div>
          </address>
          <ContactMap />
        </div>
      </section>

      <footer>
        <div className="section-inner">
          <div className="footer-info">
          <Logo />
          <div className="footer-links">
            <a href="#top">개인정보처리방침</a>
            <a href="#top">이용약관</a>
          </div>
          <p>
            Copyright &copy; 2026 SAMGUK STEEL Co., Ltd. All rights reserved.
          </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

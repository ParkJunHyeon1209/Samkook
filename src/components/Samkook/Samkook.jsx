import { useState } from "react";
import ContentSection from "../ContentSection";
import "./Samkook.css";

const navItems = [
  "회사소개",
  "사업분야",
  "제품소개",
  "보유장비",
  "납품실적",
  "고객지원",
];

const businessItems = [
  {
    title: "철강 판매",
    eyebrow: "STEEL SALES",
    description:
      "H-Beam, 철근, 형강류 등 다양한 철강제품을 합리적인 가격으로 공급합니다.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "철강 렌탈",
    eyebrow: "STEEL RENTAL",
    description:
      "필요한 기간만 효율적으로! 가설재, H-Beam 등 다양한 철강 임대 서비스를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?auto=format&fit=crop&w=1200&q=85",
  },
];

const productItems = [
  [
    "H-BEAM",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "앵글",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "쟌넬",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=85",
  ],
  [
    "각종 부자재",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85",
  ],
].map(([title, image]) => ({ title, image }));

const galleryItems = [
  [
    "야적장 전경",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "출하 / 상차 현장",
    "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "가설재 임대 현장",
    "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "H-BEAM 시공 현장",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "지개차 작업",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
  ],
].map(([title, image]) => ({ title, image }));

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

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="삼국철강 홈">
      <span className="logo-mark">三</span>
      <span>
        <strong>삼국철강(주)</strong>
        <small>SAMKOOK STEEL</small>
      </span>
    </a>
  );
}

export default function Samkook() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="메뉴 열기"
          >
            ☰
          </button>
          <nav className={menuOpen ? "open" : ""}>
            {navItems.map((item, index) => (
              <a
                key={item}
                href={
                  index === 1
                    ? "#business"
                    : index === 2
                      ? "#products"
                      : index === 4
                        ? "#gallery"
                        : "#contact"
                }
              >
                {item}
              </a>
            ))}
          </nav>
          <a className="header-phone" href="tel:0310000000">
            <b>031-000-0000</b>
            <small>평일 08:30 - 17:30</small>
          </a>
        </div>
      </header>

      <section className="hero">
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
            <a className="button ghost" href="tel:0310000000">
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
              <a href="#contact">
                자세히 보기 <span>→</span>
              </a>
            </div>
          </article>
        )}
      />

      <ContentSection
        id="products"
        title="주요 제품"
        items={productItems}
        className="products"
        renderItem={(item) => (
          <article className="product-card" key={item.title}>
            <div className="image-wrap">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </article>
        )}
      />

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

      <ContentSection
        id="gallery"
        title="납품 및 현장 갤러리"
        items={galleryItems}
        className="gallery"
        renderItem={(item) => (
          <figure className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <figcaption>
              {item.title}
              <span>현장 보기 →</span>
            </figcaption>
          </figure>
        )}
      />

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
                <b>031-XXX-XXXX</b>
                <span>
                  평일 08:30 - 17:30
                  <em className="contact-closed">(주말 및 공휴일 휴무)</em>
                </span>
              </div>
            </div>
            <div className="contact-info-item">
              <InfoIcon type="email" />
              <a href="mailto:samkooksteel@example.com">
                samkooksteel@example.com
              </a>
            </div>
            <div className="contact-info-item">
              <InfoIcon type="location" />
              <p>
                경기도 화성시 XXX로 XX
                <br />
                삼국철강(주)
              </p>
            </div>
          </address>
        </div>
      </section>

      <footer>
        <div className="section-inner">
          <Logo />
          <div>
            <a href="#top">개인정보처리방침</a>
            <a href="#top">이용약관</a>
          </div>
          <p>
            Copyright &copy; 2026 SAMKOOK STEEL Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

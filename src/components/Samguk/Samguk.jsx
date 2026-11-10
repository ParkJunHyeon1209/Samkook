import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContentSection from "../ContentSection";
import LoadingImage from "../LoadingImage";
import ContactForm from "../ContactForm";
import InventoryPreview from "../Inventory/InventoryPreview";
import ContactMap from "../Map/ContactMap";
import HeroSlider from "./HeroSlider";
import ProductCard from "../Products/ProductCard";
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

const LogoElement = styled(Link, { target: "logo" })`
  display: flex;

  align-items: center;

  gap: 12px;

  flex: none;

  & strong {
    display: block;
    font-size: 24px;
    letter-spacing: 0;
  }

  & small {
    display: block;
    margin-top: 2px;
    font-size: 13px;
    letter-spacing: 0;
  }

  @media (max-width:680px) {
    & strong {
      font-size: 20px;
    }
  }
`;

const LogoImage = styled("img", { target: "logo-image" })`
  width: 48px;

  height: 48px;

  display: block;

  flex: none;

  object-fit: contain;

  @media (max-width:680px) {
    width: 40px;
    height: 40px;
  }
`;

const SiteHeaderElement = styled("header", { target: "site-header" })`
  &.site-header--static nav a.active {
    color: #68a5ff;
  }

  height: 88px;

  color: #fff;

  background: rgba(2, 15, 28, .97);

  position: sticky;

  z-index: 20;

  top: 0;

  left: 0;

  right: 0;

  border-bottom: 1px solid rgba(255, 255, 255, .09);

  & nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 38px;
    flex: none;
    height: 100%;
    margin-left: auto;
  }

  & nav a {
    font-size: 17px;
    font-weight: 600;
    transition: .2s;
  }

  & nav a:hover,
  & nav a:focus-visible {
    color: #68a5ff;
  }

  & nav .nav-submenu a {
    padding: 9px 7px;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 500;
  }

  & nav .nav-submenu a:hover,
  & nav .nav-submenu a:focus-visible {
    color: #68a5ff;
  }

  @media (max-width:960px) {
    & nav {
      gap: 18px;
    }
  }

  @media (max-width:680px) {
    height: 72px;

    & nav {
      display: none;
      position: absolute;
      top: 72px;
      left: 0;
      right: 0;
      height: auto;
      margin-left: 0;
      padding: 20px;
      flex-direction: column;
      background: #061a2c;
    }

    & nav.open {
      display: flex;
      align-items: stretch;
      gap: 18px;
    }

    & nav .nav-submenu a {
      padding: 7px 8px;
      color: #b9c9d8;
      font-size: 14px;
    }
  }
`;

const HeaderInner = styled("div", { target: "header-inner" })`
  width: min(1280px, calc(100% - 48px));

  height: 100%;

  margin: auto;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 52px;

  @media (max-width:680px) {
    width: calc(100% - 32px);
  }
`;

const MenuButton = styled("button", { target: "menu-button" })`
  display: none;

  border: 0;

  color: #fff;

  background: none;

  font-size: 27px;

  @media (max-width:680px) {
    display: block;
  }
`;

const NavItem = styled("div", { target: "nav-item" })`
  position: relative;

  display: flex;

  height: 100%;

  align-items: center;

  &:hover .nav-submenu,
  &:focus-within .nav-submenu {
    display: flex;
  }

  @media (max-width:680px) {
    height: auto;

    flex-direction: column;

    &>a {
      width: 100%;
      text-align: center;
    }
  }
`;

const NavSubmenu = styled("div", { target: "nav-submenu" })`
  position: absolute;

  top: 100%;

  left: 50%;

  z-index: 25;

  display: none;

  min-width: max-content;

  padding: 6px;

  transform: translateX(-50%);

  flex-direction: column;

  gap: 2px;

  background: rgba(2, 15, 28, .97);

  border: 1px solid rgba(255, 255, 255, .12);

  box-shadow: 0 12px 24px rgba(0, 0, 0, .24);

  @media (max-width:680px) {
    position: static;
    display: flex;
    width: 100%;
    min-width: 0;
    padding: 4px 0 0;
    transform: none;
    align-items: center;
    gap: 0;
    background: transparent;
    border: 0;
    box-shadow: none;
  }
`;

const Business = styled(ContentSection, { target: "business" })`
  background: #f5f7f9;
`;

const BusinessCard = styled("article", { target: "business-card" })`
  min-height: 310px;

  position: relative;

  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transition: .45s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width:680px) {
    min-height: 295px;
  }
`;

const BusinessCopy = styled("div", { target: "business-copy" })`
  width: 68%;

  min-height: 310px;

  position: relative;

  z-index: 1;

  padding: 37px 30px;

  color: #fff;

  background: linear-gradient(90deg, rgba(3, 26, 46, .98) 80%, rgba(3, 26, 46, .1));

  & small {
    color: #70a8fa;
    font-size: 14px;
    font-weight: 700;
  }

  & h3 {
    margin: 6px 0 12px;
    font-size: 27px;
  }

  & p {
    min-height: 75px;
    margin: 0;
    color: #d6dee5;
    font-size: 16px;
    line-height: 1.65;
  }

  @media (max-width:680px) {
    min-height: 295px;
    width: 67%;
    padding: 30px 22px;
  }
`;

const Products = styled(ContentSection, { target: "products" })`

`;

const ProductsViewAll = styled(Link, { target: "products-view-all" })`
  position: absolute;

  top: 0;

  right: 0;

  padding: 12px 20px;

  border: 1px solid #b9d2f5;

  color: #1768e5;

  font-size: 15px;

  font-weight: 700;

  &:hover,
  &:focus-visible {
    color: #fff;
    background: #1768e5;
  }

  @media (max-width: 680px) {
    position: static;
    display: inline-block;
    margin-top: 18px;
  }
`;

const ProductCardElement = styled(Link, { target: "product-card" })`
  &:hover img {
    transform: scale(1.05);
  }

  text-align: center;

  & img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    clip-path: inset(4.5% 5.8%);
    transition: .4s;
  }

  & h3 {
    margin: 12px 0 0;
    font-size: 17px;
  }

  &:hover .card-more,
  &:focus-visible .card-more {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--blue);
    outline-offset: 4px;
  }
`;

const ImageWrap = styled("div", { target: "image-wrap" })`
  position: relative;

  display: flex;

  align-items: center;

  aspect-ratio: 4 / 3;

  overflow: hidden;

  background: #fff;

  @media (max-width:680px) {
    aspect-ratio: 1;
  }
`;

const CardMore = styled("span", { target: "card-more" })`
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

  @media (hover: none) {
    opacity: 1;
    transform: none;
  }
`;

const ContentSectionElement = styled("section", { target: "content-section gallery" })`
  padding: 36px 0;

  background: #f5f7f9;

  & .product-card-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width:680px) {
    padding: 55px 0;

    & .product-card-list {
      grid-template-columns: 1fr;
    }
  }
`;

const SectionInner = styled("div", { target: "section-inner" })`
  width: min(1280px, calc(100% - 48px));

  margin: 0 auto;

  @media (max-width:680px) {
    width: calc(100% - 32px);
  }
`;

const SectionHeading = styled("header", { target: "section-heading" })`
  margin-bottom: 32px;

  text-align: center;

  & h2 {
    margin: 5px 0 0;
    font-size: 32px;
    letter-spacing: 0;
  }

  & h2::after {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    margin: 13px auto 0;
    background: var(--blue);
  }

  &.section-heading--with-action {
    position: relative;
  }

  @media (max-width:680px) {
    & h2 {
      font-size: 28px;
    }
  }
`;

const ProductCardList = styled("div", { target: "product-card-list" })`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Contact = styled("section", { target: "contact" })`
  & .contact-form-error {
    margin: 0 0 10px;
    color: #ffb4b4;
    font-size: 15px;
  }

  & [aria-invalid="true"] {
    border-color: #ff8585;
  }

  & input:focus,
  & textarea:focus {
    outline: 2px solid #68a5ff;
    outline-offset: 2px;
  }

  & .contact-confirmation h2 {
    margin: 0 0 24px;
    font-size: 23px;
  }

  padding: 24px 0;

  color: #fff;

  background: #061a2c;

  & h2 {
    margin: 0 0 12px;
    font-size: 25px;
    line-height: 1.45;
  }

  & p {
    color: #aebbc6;
    font-size: 15px;
    line-height: 1.7;
  }

  & form>div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  & form {
    position: relative;
    min-width: 0;
  }

  & input {
    min-width: 0;
  }

  & input,
  & textarea {
    width: 100%;
    padding: 11px 12px;
    color: #fff;
    background: #0a2135;
    border: 1px solid #2b4255;
    outline: none;
    font-size: 15px;
  }

  & textarea {
    height: 100px;
    padding-bottom: 42px;
    margin-top: 8px;
    resize: none;
  }

  & form button {
    position: absolute;
    right: 0;
    bottom: 4px;
    padding: 12px 22px;
    color: #fff;
    background: var(--blue);
    border: 0;
    cursor: pointer;
  }

  & address {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 20px;
    border-left: 1px solid #284056;
    font-style: normal;
    font-size: 15px;
  }

  & address b {
    font-size: 21px;
  }

  & address span {
    color: #aebbc6;
  }

  & address .contact-closed {
    margin-left: 3px;
    color: #5f9ff5;
    font-style: normal;
  }

  & address a {
    color: #dce6ef;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width:960px) {
    & address {
      grid-column: 1;
      padding: 20px 0 0;
      border: 0;
      border-top: 1px solid #284056;
    }
  }

  @media (max-width:680px) {
    & form>div {
      grid-template-columns: 1fr;
    }

    & textarea {
      height: 100px;
    }

    & form button {
      position: static;
      float: none;
      width: 100%;
      margin: 8px 0 0;
    }

    & address {
      grid-column: auto;
    }
  }
`;

const SectionInnerElement = styled("div", { target: "section-inner contact-grid" })`
  width: min(1280px, calc(100% - 48px));

  margin: 0 auto;

  display: grid;

  grid-template-columns: minmax(0, .75fr) minmax(0, 1.5fr) minmax(0, 1.25fr) minmax(0, 1fr);

  gap: 20px;

  align-items: start;

  &> :not(dialog) {
    min-width: 0;
  }

  & .contact-map__heading,
  & .contact-map>p,
  & .contact-map>a {
    display: none;
  }

  & .contact-map__canvas {
    height: 144px;
  }

  & .contact-map__frame {
    border-radius: 0;
    border: 1px solid #284056;
  }

  @media (max-width:960px) {
    grid-template-columns: minmax(0, 1fr);

    gap: 28px;

    & .contact-map__canvas {
      height: 180px;
    }
  }

  @media (max-width:680px) {
    width: calc(100% - 32px);
    grid-template-columns: 1fr;
  }
`;

const ContactInfoItem = styled("div", { target: "contact-info-item" })`
  display: flex;

  align-items: center;

  gap: 12px;

  & .info-icon {
    width: 27px;
    height: 27px;
    flex: 0 0 27px;
    fill: none;
    stroke: #5f9ff5;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  & .contact-fax-label {
    flex: 0 0 27px;
    width: 27px;
    align-self: flex-start;
    line-height: 27px;
    color: #5f9ff5;
    font-size: 14px;
    font-weight: 700;
  }

  &:has(.contact-fax-label)>div {
    line-height: 27px;
  }

  &>div {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;

const ContactFaxLabel = styled("span", { target: "contact-fax-label" })`

`;

const FooterInfo = styled("div", { target: "footer-info" })`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 28px;

  &>p {
    flex: none;
    margin: 0;
    line-height: 1.7;
    white-space: nowrap;
  }

  @media (max-width:960px) {
    flex-direction: column;

    gap: 10px;

    text-align: center;

    &>p {
      max-width: 100%;
      white-space: normal;
    }
  }
`;

const FooterLinks = styled("div", { target: "footer-links" })`

`;

const navItems = [
  {
    label: "회사소개",
    href: "/#company",
    subItems: [
      ["핵심가치", "/company/values"],
      ["찾아오시는 길", "/company/directions"],
    ],
  },
  { label: "사업분야", href: "#business" },
  {
    label: "주요제품",
    href: "/#products",
    subItems: [
      ["H-형강", "/products/h-beam"],
      ["앵글", "/products/angle"],
      ["쟌넬", "/products/channel"],
      ["각종 부자재", "/products#accessories"],
    ],
  },
  {
    label: "보유현황",
    href: "/#inventory",
    subItems: [
      ["형강", "/inventory?group=steel"],
      ["각종 부자재", "/inventory?group=accessories"],
    ],
  },
  { label: "고객지원", href: "#contact" },
];

const businessItems = [
  {
    title: "철강재 판매",
    eyebrow: "STEEL SALES",
    description:
      "H-형강, 철근, 형강류 등 다양한 철강제품을 합리적인 가격으로 공급합니다.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?fm=webp&fit=crop&w=1200&q=85",
  },
  {
    title: "철강재 매입",
    eyebrow: "STEEL PURCHASE",
    description:
      "사용하지 않는 H-형강, 철근, 형강류 등 다양한 철강제품을 신속하고 합리적인 가격으로 매입합니다.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?fm=webp&fit=crop&w=1200&q=85",
  },
  {
    title: "철강재 렌탈",
    eyebrow: "STEEL RENTAL",
    description:
      "필요한 기간만 효율적으로! 가설재, H-형강 등 다양한 철강 임대 서비스를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?fm=webp&fit=crop&w=1200&q=85",
  },
];

const productItems = productCategories.map((category) =>
  category.slug === "accessories"
    ? { ...category, image: accessoryImages["복공판"] }
    : category,
);

const galleryItems = [
  ["야적장 전경", yardImage1, [yardImage1, yardImage2]],
  [
    "출하 / 상차 현장",
    shipmentImage1,
    [shipmentImage1, shipmentImage2, shipmentImage3, shipmentImage4],
  ],
  [
    "주요 시공 현장",
    rentalSiteImage1,
    [
      rentalSiteImage1,
      rentalSiteImage2,
      rentalSiteImage3,
      rentalSiteImage4,
      rentalSiteImage5,
    ],
  ],
].map(([title, image, images]) => ({ title, image, images }));

// const stats = [
//   ["inventory", "보유 재고", "5,000톤+", "다양한 규격의 철강재 보유"],
//   ["delivery", "연간 납품 규모", "12,000톤+", "풍부한 경험과 안정적인 공급"],
//   ["partners", "주요 거래처", "300개+", "건설사 및 중공업 협력사"],
//   ["location", "납품 가능 지역", "전국", "전국 어디든 신속 납품"],
// ];

// const strengths = [
//   ["빠른 견적", "신속하고 정확한 견적 제공"],
//   ["신속 납품", "자체 운송망을 통한 빠른 납품"],
//   ["렌탈 전문", "체계적인 임대 자재 관리"],
//   ["고객 맞춤", "현장 상황에 맞춘 솔루션"],
//   ["신뢰와 책임", "정직한 거래와 책임 서비스"],
// ];

// function StrengthIcon({ type }) {
//   const paths = {
//     estimate: (
//       <>
//         <circle cx="24" cy="27" r="15" />
//         <path d="M24 12V7m-5 0h10M24 27l8-6M12 17l-3-3m27 3 3-3M24 42v-3" />
//       </>
//     ),
//     delivery: (
//       <>
//         <path d="M5 14h24v20H5zM29 21h8l6 7v6H29zM10 14V9h14v5" />
//         <circle cx="13" cy="35" r="4" />
//         <circle cx="36" cy="35" r="4" />
//       </>
//     ),
//     shield: (
//       <path d="M24 5 40 12v11c0 10-6 17-16 21C14 40 8 33 8 23V12zM16 24l6 6 11-13" />
//     ),
//     customer: (
//       <>
//         <circle cx="19" cy="16" r="8" />
//         <circle cx="34" cy="18" r="6" />
//         <path d="M4 41c1-10 6-16 15-16s14 6 15 16M32 27c7 0 11 5 12 13" />
//       </>
//     ),
//     support: (
//       <>
//         <path d="M8 26v-5a16 16 0 0 1 32 0v5M8 24H5v11h7V24zM40 24h3v11h-7V24zM36 37c-2 4-5 5-10 5" />
//         <circle cx="24" cy="42" r="2" />
//       </>
//     ),
//   };

//   return (
//     <svg className="strength-icon" viewBox="0 0 48 48" aria-hidden="true">
//       {paths[type]}
//     </svg>
//   );
// }

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
    <LogoElement  to="/" aria-label="삼국철강 홈">
      <LogoImage  src={logoImage} alt="" />
      <span>
        <strong>삼국철강(주)</strong>
        <small>SAMGUK STEEL</small>
      </span>
    </LogoElement>
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
  return (
    <SiteHeaderElement
      className={`site-header${staticHeader ? " site-header--static" : ""}`}
    >
      <HeaderInner>
        <Logo />
        {isMobile && (
          <MenuButton

            onClick={() => setMenuOpen((open) => !open)}
            aria-label="메뉴 열기"
          >
            ☰
          </MenuButton>
        )}
        <nav className={menuOpen ? "open" : ""}>
          {navItems.map(({ label, href, subItems }) => (
            <NavItem  key={label}>
              <Link
                className={
                  href.startsWith("/") && pathname.startsWith(href)
                    ? "active"
                    : ""
                }
                to={href.startsWith("/") ? href : `/${href}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
              {subItems && (
                <NavSubmenu>
                  {subItems.map(([subLabel, subHref]) => (
                    <Link
                      key={subLabel}
                      to={subHref}
                      onClick={() => setMenuOpen(false)}
                    >
                      {subLabel}
                    </Link>
                  ))}
                </NavSubmenu>
              )}
            </NavItem>
          ))}
        </nav>
      </HeaderInner>
    </SiteHeaderElement>
  );
}

export default function Samguk() {
  return (
    <main id="top">
      <SiteHeader />

      <HeroSlider />
      {/* <div className="stats">
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
      </HeroSlider> */}

      <Business
        id="business"
        title="사업분야"
        items={businessItems}

        renderItem={(item) => (
          <BusinessCard  key={item.title}>
            <LoadingImage src={item.image} alt="" />
            <BusinessCopy>
              <small>{item.eyebrow}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </BusinessCopy>
          </BusinessCard>
        )}
      />

      <Products
        id="products"
        title="주요 제품"
        action={
          <ProductsViewAll  to="/products">
            전체보기 →
          </ProductsViewAll>
        }
        items={productItems}

        renderItem={(item) => (
          <ProductCardElement

            key={item.title}
            to={
              item.slug === "accessories"
                ? "/products#accessories"
                : `/products/${item.slug}`
            }
          >
            <ImageWrap>
              <LoadingImage src={item.image} alt={item.title} />
              <CardMore>자세히 보기</CardMore>
            </ImageWrap>
            <h3>{item.title}</h3>
          </ProductCardElement>
        )}
      />

      <InventoryPreview />

      {/* <section id="values" className="strengths">
        <div className="section-inner">
          <h2>삼국철강 핵심가치</h2>
          <div className="strength-grid">
            {strengths.map(([title, description]) => (
              <article key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <ContentSectionElement id="gallery" >
        <SectionInner>
          <SectionHeading>
            <h2>납품 및 현장 갤러리</h2>
          </SectionHeading>
          <ProductCardList>
            {galleryItems.map((item) => (
              <ProductCard
                key={item.title}
                name={item.title}
                actionLabel="더보기"
                image={item.image}
                images={item.images}
              />
            ))}
          </ProductCardList>
        </SectionInner>
      </ContentSectionElement>

      <Contact id="contact" >
        <SectionInnerElement>
          <div>
            <h2>문의하기</h2>
            <p>철강 판매 렌탈 및 매입에 관한 문의는 언제든지 연락주세요.</p>
          </div>
          <ContactForm />
          <address>
            <ContactInfoItem>
              <InfoIcon type="phone" />
              <div>
                <span>031-351-3277</span>
              </div>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactFaxLabel>FAX</ContactFaxLabel>
              <div>
                <span>031-351-3276</span>
                <span>평일 08:30 - 17:30</span>
              </div>
            </ContactInfoItem>
            <ContactInfoItem>
              <InfoIcon type="email" />
              <a href="mailto:samguksteel@naver.com">samguksteel@naver.com</a>
            </ContactInfoItem>
            <ContactInfoItem>
              <InfoIcon type="location" />
              <p>
                경기도 화성시 우정읍 주곡리 161-90
                <br />
                삼국철강(주)
              </p>
            </ContactInfoItem>
          </address>
          <ContactMap />
        </SectionInnerElement>
      </Contact>

      <footer>
        <SectionInner>
          <FooterInfo>
            <Logo />
            <FooterLinks>
              <a href="#top">개인정보처리방침</a>
              <a href="#top">이용약관</a>
            </FooterLinks>
            <p>
              Copyright &copy; 2026 SAMGUK STEEL Co., Ltd. All rights reserved.
            </p>
          </FooterInfo>
        </SectionInner>
      </footer>
    </main>
  );
}

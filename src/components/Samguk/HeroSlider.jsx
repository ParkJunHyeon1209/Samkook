import { useEffect, useState } from "react";
import slide1 from "../../assets/images/hero/slide-1.webp";
import slide2 from "../../assets/images/hero/slide-2.webp";
import slide3 from "../../assets/images/hero/slide-3.webp";
import "./HeroSlider.css";

const slides = [
  {
    image: slide1,
    first: "철강의 가치를 넘어,",
    before: "",
    emphasis: "더 나은 내일",
    after: "을 만듭니다",
  },
  {
    image: slide2,
    first: "최고의 품질로,",
    before: "",
    emphasis: "신뢰를 쌓아갑니다",
    after: "",
  },
  {
    image: slide3,
    first: "함께하는 성장,",
    before: "",
    emphasis: "삼국철강",
    after: "이 만들어갑니다",
  },
];

export default function HeroSlider({ children }) {
  const [active, setActive] = useState(0);
  const [paused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const updateVisibility = () => setVisible(!document.hidden);
    const clearInteraction = () => setInteracting(false);
    document.addEventListener("visibilitychange", updateVisibility);
    window.addEventListener("blur", clearInteraction);
    window.addEventListener("pageshow", updateVisibility);
    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
      window.removeEventListener("blur", clearInteraction);
      window.removeEventListener("pageshow", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || interacting || !visible) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      3500,
    );
    return () => window.clearInterval(timer);
  }, [paused, interacting, visible, active]);

  const move = (direction) =>
    setActive((index) => (index + direction + slides.length) % slides.length);

  return (
    <section
      id="company"
      className="hero hero-slider"
      aria-label="삼국철강 소개"
      aria-roledescription="캐러셀"
      onFocusCapture={(event) => setInteracting(event.target.matches(":focus-visible"))}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setInteracting(false);
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-slide${active === index ? " is-active" : ""}`}
          aria-hidden={active !== index}
        >
          <img
            className="hero-slide__image"
            src={slide.image}
            alt=""
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          <div className="hero-slide__shade" />
          <div className="hero-slide__copy">
            <h1>
              {slide.first}
              <br />
              {slide.before}
              <strong>{slide.emphasis}</strong>
              {slide.after}
            </h1>
          </div>
        </div>
      ))}
      <button
        className="hero-slider__arrow hero-slider__arrow--previous"
        type="button"
        onClick={() => move(-1)}
        aria-label="이전 슬라이드"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </button>
      <button
        className="hero-slider__arrow hero-slider__arrow--next"
        type="button"
        onClick={() => move(1)}
        aria-label="다음 슬라이드"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
      <a className="hero-slider__scroll" href="#business" aria-label="아래 사업분야로 이동">
        <span className="hero-slider__scroll-motion">
          <span className="hero-slider__scroll-label">SCROLL</span>
          <svg viewBox="0 0 100 52" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m13 5 37 25L87 5" />
            <path d="m5 20 45 29 45-29" />
          </svg>
        </span>
      </a>
      {children}
    </section>
  );
}

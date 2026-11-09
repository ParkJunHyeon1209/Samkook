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
  const [paused, setPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (paused || interacting) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      3500,
    );
    return () => window.clearInterval(timer);
  }, [paused, interacting, active]);

  const move = (direction) =>
    setActive((index) => (index + direction + slides.length) % slides.length);

  return (
    <section
      id="company"
      className="hero hero-slider"
      aria-label="삼국철강 소개"
      aria-roledescription="캐러셀"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
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
      <div className="hero-slider__controls">
        <div className="hero-slider__dots" aria-label="슬라이드 선택">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`${index + 1}번 슬라이드`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <span className="hero-slider__count">
          0{active + 1} <span>/ 03</span>
        </span>
        <button
          className="hero-slider__pause"
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "슬라이드 자동 재생" : "슬라이드 일시 정지"}
        >
          {paused ? "▶" : "Ⅱ"}
        </button>
      </div>
      {children}
    </section>
  );
}

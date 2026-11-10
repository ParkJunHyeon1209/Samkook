import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import slide1 from "../../assets/images/hero/slide-1.webp";
import slide2 from "../../assets/images/hero/slide-2.webp";
import slide3 from "../../assets/images/hero/slide-3.webp";

const Hero = styled("section", { target: "hero hero-slider" })`
  &.hero-slider {
    min-height: max(680px, calc(100svh - 88px));
    background: #1b354c;
    isolation: isolate;
  }

  & .hero-slide h1 {
    font-family: "신명조", "HYSinMyeongJo-Medium", "HYSinMyeongJo", "HY신명조", "Batang", "바탕", "AppleMyungjo", serif;
    color: #fff;
    font-size: clamp(30px, 3.8vw, 64px);
    font-weight: 700;
    line-height: 1.55;
    letter-spacing: -.045em;
    text-shadow: 0 2px 20px rgb(0 0 0 / 35%);
  }

  & .hero-slide h1 strong {
    color: #ffd479;
    font-size: inherit;
    font-weight: 800;
    text-shadow: 0 1px 12px rgb(0 10 30 / 30%);
  }

  & button:focus-visible {
    outline: 3px solid var(--blue);
    outline-offset: 4px;
  }

  @media (max-width: 680px) {
    &.hero-slider {
      min-height: max(700px, calc(100svh - 72px));
    }

    & .hero-slide h1 {
      font-size: clamp(23px, 5.5vw, 37px);
      line-height: 1.65;
    }
  }

  min-height: calc(100vh - 88px);

  position: relative;

  display: flex;

  align-items: center;

  color: #fff;

  background: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=webp&fit=crop&w=2000&q=90') center/cover;

  & h1 {
    margin: 0;
    font-size: 45px;
    line-height: 1.3;
    letter-spacing: 0;
  }

  & h1 strong {
    font-size: 62px;
  }

  @media (min-width: 681px) and (max-width: 960px) {
    min-height: 820px;
  }

  @media (max-width:680px) {
    min-height: 850px;

    align-items: flex-start;

    & h1 {
      font-size: 33px;
    }

    & h1 strong {
      font-size: 45px;
    }
  }
`;

const HeroSlide = styled("div", { target: "hero-slide" })`
  position: absolute;

  inset: 0;

  opacity: 0;

  transition: opacity 1s ease;

  pointer-events: none;

  &.is-active {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const HeroSlideImage = styled("img", { target: "hero-slide__image" })`
  position: absolute;

  inset: 0;

  width: 100%;

  height: 100%;

  object-fit: cover;
`;

const HeroSlideShade = styled("div", { target: "hero-slide__shade" })`
  position: absolute;

  inset: 0;

  background: linear-gradient(180deg, rgb(0 12 29 / 16%), rgb(0 12 29 / 42%) 55%, rgb(0 12 29 / 25%));
`;

const HeroSlideCopy = styled("div", { target: "hero-slide__copy" })`
  position: absolute;

  inset: 0;

  display: grid;

  place-items: center;

  text-align: center;

  padding: 40px 75px;

  @media (max-width: 680px) {
    padding: 25px 30px 120px;
  }
`;

const HeroSliderArrow = styled("button", { target: "hero-slider__arrow hero-slider__arrow--previous" })`
  position: absolute;

  z-index: 4;

  top: calc(50% - 16px);

  transform: translateY(-50%);

  display: grid;

  place-items: center;

  padding: 0;

  width: 52px;

  height: 64px;

  border: 1px solid rgb(255 255 255 / 30%);

  background: rgb(0 18 37 / 12%);

  color: white;

  font-size: 42px;

  cursor: pointer;

  line-height: 1;

  & svg {
    display: block;
    width: 26px;
    height: 26px;
  }

  left: 24px;

  &.hero-slider__arrow--next {
    right: 24px;
  }

  @media (max-width: 680px) {
    width: 30px;

    height: 44px;

    top: calc(50% - 60px);

    font-size: 30px;

    border: 0;

    left: 0;

    &.hero-slider__arrow--next {
      right: 0;
    }
  }
`;

const HeroSliderArrowElement = styled("button", { target: "hero-slider__arrow hero-slider__arrow--next" })`
  position: absolute;

  z-index: 4;

  top: calc(50% - 16px);

  transform: translateY(-50%);

  display: grid;

  place-items: center;

  padding: 0;

  width: 52px;

  height: 64px;

  border: 1px solid rgb(255 255 255 / 30%);

  background: rgb(0 18 37 / 12%);

  color: white;

  font-size: 42px;

  cursor: pointer;

  line-height: 1;

  & svg {
    display: block;
    width: 26px;
    height: 26px;
  }

  &.hero-slider__arrow--previous {
    left: 24px;
  }

  right: 24px;

  @media (max-width: 680px) {
    width: 30px;

    height: 44px;

    top: calc(50% - 60px);

    font-size: 30px;

    border: 0;

    &.hero-slider__arrow--previous {
      left: 0;
    }

    right: 0;
  }
`;

const HeroSliderScroll = styled("a", { target: "hero-slider__scroll" })`
  position: absolute;

  z-index: 4;

  bottom: 32px;

  left: 50%;

  transform: translateX(-50%);

  color: #fff;

  padding: 12px;

  text-align: center;

  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 35%));

  & svg {
    display: block;
    width: 76px;
    height: 40px;
    margin-top: 7px;
  }

  &:focus-visible {
    outline: 3px solid var(--blue);
    outline-offset: 4px;
  }

  @media (max-width: 680px) {
    bottom: 24px;

    & svg {
      width: 62px;
      height: 33px;
    }
  }
`;

const HeroSliderScrollMotion = styled("span", { target: "hero-slider__scroll-motion" })`
  display: flex;

  flex-direction: column;

  align-items: center;

  animation: hero-scroll-bounce 1.8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroSliderScrollLabel = styled("span", { target: "hero-slider__scroll-label" })`
  font-family: 'Noto Sans KR', sans-serif;

  font-size: 17px;

  font-weight: 700;

  letter-spacing: 2px;

  line-height: 1.4;

  @media (max-width: 680px) {
    font-size: 14px;
  }
`;

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
    <Hero
      id="company"

      aria-label="삼국철강 소개"
      aria-roledescription="캐러셀"
      onFocusCapture={(event) => setInteracting(event.target.matches(":focus-visible"))}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setInteracting(false);
      }}
    >
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.image}
          className={`hero-slide${active === index ? " is-active" : ""}`}
          aria-hidden={active !== index}
        >
          <HeroSlideImage

            src={slide.image}
            alt=""
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          <HeroSlideShade  />
          <HeroSlideCopy>
            <h1>
              {slide.first}
              <br />
              {slide.before}
              <strong>{slide.emphasis}</strong>
              {slide.after}
            </h1>
          </HeroSlideCopy>
        </HeroSlide>
      ))}
      <HeroSliderArrow

        type="button"
        onClick={() => move(-1)}
        aria-label="이전 슬라이드"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </HeroSliderArrow>
      <HeroSliderArrowElement

        type="button"
        onClick={() => move(1)}
        aria-label="다음 슬라이드"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </HeroSliderArrowElement>
      <HeroSliderScroll  href="#business" aria-label="아래 사업분야로 이동">
        <HeroSliderScrollMotion>
          <HeroSliderScrollLabel>SCROLL</HeroSliderScrollLabel>
          <svg viewBox="0 0 100 52" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m13 5 37 25L87 5" />
            <path d="m5 20 45 29 45-29" />
          </svg>
        </HeroSliderScrollMotion>
      </HeroSliderScroll>
      {children}
    </Hero>
  );
}

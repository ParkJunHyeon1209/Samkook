import { css, Global } from "@emotion/react";

const globalStyles = css`
  html,
  body,
  #root {
    min-height: 100%;
  }

  img[data-image-status="loading"],
  img[data-image-status="error"] {
    visibility: hidden;
  }

  @keyframes image-loading-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes hero-scroll-bounce {
    0%, 100% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(5px);
    }
  }

  :root {
    --blue: #1768e5;
    --hover-shadow: 0 18px 24px -16px rgb(0 0 0 / 48%);
    --hover-lift: -4px;
  }

  * {
    box-sizing: border-box;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  html {
    scroll-behavior: smooth;
  }

  [id] {
    scroll-margin-top: 100px;
  }

  body {
    margin: 0;
    color: #101923;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    background: #fff;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  article > a[href] {
    display: block;
  }

  :is(a[href], button:enabled),
  article:has(> :is(a[href], button:enabled)) {
    transition: translate 220ms ease, box-shadow 220ms ease,
      background-color 220ms ease, color 220ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    :root {
      --hover-lift: 0px;
    }
  }

  @media (hover: hover) {
    main a[href]:hover:has(> div img):not(article > *, header *, footer *, nav *),
    article:has(> :is(a[href], button:enabled):hover) {
      box-shadow: var(--hover-shadow);
      translate: 0 var(--hover-lift);
    }

    :is(nav:not(header nav) a[href], button:enabled):hover:not(article > *, [data-step-button]) {
      color: #fff;
      background-color: #234767;
    }
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  footer {
    padding: 12px 0;
    border-top: 1px solid #284056;
    color: #8998a5;
    background: #03111e;
  }

  footer .section-inner {
    width: min(1280px, calc(100% - 48px));
    margin-inline: auto;
  }

  footer .logo-image {
    width: 30px;
    height: 30px;
  }

  footer .logo strong {
    color: #fff;
    font-size: 16px;
  }

  footer .logo small {
    font-size: 9px;
  }

  footer p,
  footer a {
    font-size: 12px;
  }

  footer .footer-links {
    display: flex;
    flex: none;
    justify-content: flex-end;
    gap: 18px;
  }

  footer .footer-links a {
    white-space: nowrap;
  }

  @media (max-width:960px) {
    footer .footer-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width:680px) {
    footer .section-inner {
      width: calc(100% - 32px);
    }
  }
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

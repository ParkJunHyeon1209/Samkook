import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SiteHeader } from "../Samguk/Samguk";
import valueIcons from "../../assets/images/company/value-icons.webp";

const ValuesPageElement = styled("main", { target: "values-page" })`
  min-height: 100vh;

  background: #fff;

  color: #172236;

  & a:focus-visible {
    outline: 3px solid var(--blue);
    outline-offset: 4px;
  }
`;

const ValuesSubnav = styled("nav", { target: "values-subnav" })`
  display: flex;

  justify-content: center;

  border-bottom: 1px solid #e4e7eb;

  & a {
    width: 240px;
    padding: 27px 16px;
    text-align: center;
    color: #757c86;
    font-size: 16px;
    font-weight: 700;
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

const ValuesInner = styled("section", { target: "values-inner" })`
  width: min(1160px, calc(100% - 64px));

  margin: auto;

  padding-bottom: 110px;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    padding-bottom: 60px;
  }
`;

const ValuesHeading = styled("header", { target: "values-heading" })`
  padding: 85px 0 65px;

  text-align: center;

  & > span {
    color: #52749f;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
  }

  & h1 {
    margin: 17px 0;
    font-size: clamp(34px, 4vw, 48px);
    letter-spacing: -2px;
  }

  & p {
    margin: 0;
    color: #818b99;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    padding: 50px 0 45px;

    & p {
      font-size: 14px;
    }
  }
`;

const ValuesGrid = styled("div", { target: "values-grid" })`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 90px;

  row-gap: 65px;

  @media (max-width: 800px) {
    column-gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 38px;
  }
`;

const ValueItem = styled("article", { target: "value-item" })`
  text-align: center;

  padding: 0 20px 38px;

  border-bottom: 1px solid #e5eaf1;

  & h2 {
    margin: 9px 0 7px;
    color: #1d3270;
    font-size: 27px;
    letter-spacing: -1px;
  }

  & p {
    max-width: 440px;
    margin: 22px auto 0;
    color: #697481;
    font-size: 16px;
    line-height: 1.95;
  }

  @media (max-width: 800px) {
    padding-inline: 0;
  }

  @media (max-width: 600px) {
    & p {
      max-width: 360px;
      font-size: 15px;
    }
  }
`;

const ValueItemIcon = styled("svg", { target: "value-item__icon" })`
  display: block;

  width: min(225px, 70%);

  aspect-ratio: 1;

  margin: 0 auto 24px;

  border-radius: 50%;

  overflow: hidden;

  @media (max-width: 600px) {
    width: 190px;
    margin-bottom: 20px;
  }
`;

const ValueItemCopy = styled("div", { target: "value-item__copy" })`

`;

const ValueItemNumber = styled("span", { target: "value-item__number" })`
  display: block;

  font-size: 12px;

  letter-spacing: 2px;

  color: #96a5bb;
`;

const ValueItemEnglish = styled("span", { target: "value-item__english" })`
  color: #5974a1;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 2px;
`;

const ValuesFooter = styled("footer", { target: "values-footer" })`
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

const values = [
  { english: "QUALITY", title: "품질", x: 64, description: "최고의 품질을 최우선으로 생각하며, 엄격한 품질 관리와 철저한 검수를 통해 믿을 수 있는 철강 제품을 제공하겠습니다." },
  { english: "TRUST", title: "신뢰", x: 491, description: "고객과의 약속을 소중히 여기며, 정직하고 책임감 있는 자세로 오랜 시간 신뢰받는 기업이 되겠습니다." },
  { english: "EXPERTISE", title: "전문성", x: 921, description: "풍부한 경험과 전문적인 기술력을 바탕으로 현장에 최적화된 철강 솔루션을 제공하겠습니다." },
  { english: "CUSTOMER", title: "고객만족", x: 1348, description: "고객의 입장에서 먼저 생각하고, 신속하고 정확한 대응으로 고객 만족을 실현하겠습니다." },
];

export default function ValuesPage() {
  return (
    <ValuesPageElement>
      <SiteHeader staticHeader />
      <ValuesSubnav  aria-label="회사소개">
        <Link to="/company/values" aria-current="page">핵심가치</Link>
        <Link to="/company/directions">찾아오시는 길</Link>
      </ValuesSubnav>
      <ValuesInner  aria-labelledby="values-title">
        <ValuesHeading>
          <span>CORE VALUES</span>
          <h1 id="values-title">핵심가치</h1>
          <p>삼국철강이 지켜가는 네 가지 약속</p>
        </ValuesHeading>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueItem  key={value.english}>
              <ValueItemIcon  viewBox={`${value.x} 235 366 366`} aria-hidden="true">
                <image href={valueIcons} width="1774" height="887" />
              </ValueItemIcon>
              <ValueItemCopy>
                <ValueItemNumber>0{index + 1}</ValueItemNumber>
                <h2>{value.title}</h2>
                <ValueItemEnglish>{value.english}</ValueItemEnglish>
                <p>{value.description}</p>
              </ValueItemCopy>
            </ValueItem>
          ))}
        </ValuesGrid>
      </ValuesInner>
      <ValuesFooter>
        <strong>삼국철강(주)</strong>
        <p>경기도 화성시 우정읍 주곡리 161-90</p>
        <small>© 2026 SAMGUK STEEL Co., Ltd. All rights reserved.</small>
      </ValuesFooter>
    </ValuesPageElement>
  );
}

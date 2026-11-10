import styled from "@emotion/styled";

const ContentSectionElement = styled("section", { target: "content-section" })`
  padding: 36px 0;

  @media (max-width:680px) {
    padding: 55px 0;
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
const SectionGrid = styled.div`
  &.business__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &.products__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  @media (max-width:960px) {
    &.products__grid {
      grid-template-columns: repeat(3, 1fr);
    }

    &.business__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width:680px) {
    &.business__grid {
      grid-template-columns: 1fr;
    }

    &.products__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function ContentSection({
  id,
  title,
  items,
  className = "",
  renderItem,
  action,
}) {
  return (
    <ContentSectionElement id={id} className={`content-section ${className}`}>
      <SectionInner>
        <SectionHeading className={`section-heading${action ? " section-heading--with-action" : ""}`}>
          <h2>{title}</h2>
          {action}
        </SectionHeading>
        <SectionGrid className={`${className}__grid`}>
          {items.map((item, index) => renderItem(item, index))}
        </SectionGrid>
      </SectionInner>
    </ContentSectionElement>
  );
}

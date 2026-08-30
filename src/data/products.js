export const productCategories = [
  {
    slug: "h-beam",
    title: "H-BEAM",
    description: "현장 용도에 맞는 H-BEAM을 고재와 신재로 공급합니다.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=90",
    conditions: ["고재", "신재"],
    groupLabel: "용도",
    items: ["파일재", "버팀재", "띠장재", "우각"],
  },
  {
    slug: "angle",
    title: "앵글",
    description: "다양한 구조물과 보강 작업에 사용하는 앵글 제품입니다.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=90",
    conditions: ["고재", "신재"],
    groupLabel: "규격",
    items: ["규격 1", "규격 2", "규격 3"],
  },
  {
    slug: "channel",
    title: "쟌넬",
    description: "구조물 제작과 보강에 사용하는 채널 형강 제품입니다.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=2000&q=90",
    conditions: ["고재", "신재"],
    groupLabel: "사이즈",
    items: ["사이즈 1", "사이즈 2"],
  },
  {
    slug: "accessories",
    title: "각종 부자재",
    description: "철강 시공과 가설 작업에 필요한 각종 부자재를 공급합니다.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=90",
    conditions: ["고재", "신재"],
    groupLabel: "제품",
    items: [
      "스티프너",
      "연결철판",
      "자동화타",
      "반자동화타",
      "고정화타",
      "피스",
      "화타",
      "앵글잭",
      "스크류잭",
      "유압잭",
      "복공판",
      "마구리판",
      "화타철판",
      "잭 류",
      "대좌 류",
      "철판 류",
    ],
  },
].map((category) => ({
  ...category,
  variants: {
    used: [...category.items],
    new: [...category.items],
  },
}));

export function getProductCategory(slug) {
  return productCategories.find((category) => category.slug === slug);
}

export const productConditions = [
  { slug: "used", title: "고재" },
  { slug: "new", title: "신재" },
];

export function getProductCondition(slug) {
  return productConditions.find((condition) => condition.slug === slug);
}

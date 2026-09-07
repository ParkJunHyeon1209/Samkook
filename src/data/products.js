import hBeamImage from "../assets/images/products/h-beam.webp";
import angleImage from "../assets/images/products/angle.webp";
import channelImage from "../assets/images/products/channel.webp";
import jackImage from "../assets/images/products/jack.webp";
import baseImage from "../assets/images/products/base.webp";
import sheetPileImage from "../assets/images/products/sheet-pile.webp";
import deckPlateImage from "../assets/images/products/deck-plate.webp";

export const accessoryImages = {
  "잭": jackImage,
  "대좌": baseImage,
  "쉬트파일": sheetPileImage,
  "복공판": deckPlateImage,
};

export const productCategories = [
  {
    slug: "h-beam",
    title: "H-BEAM",
    description: "현장 용도에 맞는 H-BEAM을 고재와 신재로 공급합니다.",
    image: hBeamImage,
    conditions: ["신재", "고재"],
    groupLabel: "용도",
    items: ["파일재", "버팀재", "띠장재", "우각"],
  },
  {
    slug: "angle",
    title: "앵글",
    description: "다양한 구조물과 보강 작업에 사용하는 앵글 제품입니다.",
    image: angleImage,
    conditions: ["신재", "고재"],
    groupLabel: "규격",
    items: ["규격 1", "규격 2", "규격 3"],
  },
  {
    slug: "channel",
    title: "쟌넬",
    description: "구조물 제작과 보강에 사용하는 채널 형강 제품입니다.",
    image: channelImage,
    conditions: ["신재", "고재"],
    groupLabel: "사이즈",
    items: ["사이즈 1", "사이즈 2"],
  },
  {
    slug: "accessories",
    title: "각종 부자재",
    description: "철강 시공과 가설 작업에 필요한 각종 부자재를 공급합니다.",
    image: jackImage,
    conditions: ["신재", "고재"],
    groupLabel: "제품",
    items: [
      "잭",
      "대좌",
      "쉬트파일",
      "복공판",
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
  { slug: "new", title: "신재" },
  { slug: "used", title: "고재" },
];

export function getProductCondition(slug) {
  return productConditions.find((condition) => condition.slug === slug);
}

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

export const productDescriptions = {
  "H-형강": "H-형강은 단면이 ‘H’ 형태로 이루어진 구조용 형강으로, 높은 하중을 견디면서도 안정적인 구조 성능을 확보할 수 있는 제품입니다. 건축 및 토목 현장에서 건축물의 주요 골조를 비롯해 가설교량, 흙막이 구조물, 각종 대형 구조물의 지지재 등 다양한 용도로 활용됩니다. 균일한 단면과 뛰어난 강성을 바탕으로 구조물의 안정성을 높일 수 있으며, 시공 및 현장 적용이 용이해 각종 건설·토목공사에서 폭넓게 사용되는 대표적인 철강 자재입니다.",
  "앵글": "단면이 ‘ㄱ’자 형태로 이루어진 구조용 형강으로, ㄱ형강 또는 앵글(Angle)이라 합니다. 두 방향으로 절곡된 구조적 특성을 활용하여 하중을 지지하고 구조물을 보강하는 데 적합하며, 철탑, 트러스, 건축·토목 구조물, 선박 및 각종 철골 제작물 등에 폭넓게 사용됩니다. 규격과 두께가 다양해 용도에 맞는 제품 선택이 가능하며, 구조물의 보강 및 프레임 구성에 활용되는 대표적인 형강 제품입니다.",
  "쟌넬": "단면이 ‘ㄷ’자 형태로 이루어진 구조용 형강으로, 쟌넬(Channel) 또는 ㄷ형강이라고 합니다. 하나의 웨브에 두 개의 플랜지가 같은 방향으로 형성된 구조로, 우수한 강성과 안정성을 바탕으로 다양한 철골 구조물에 활용됩니다. 주로 건축·토목 구조물의 보강재, 철골 프레임, 기계 및 설비 구조물, H형강 및 I형강의 접합부 등에서 사용되며, 구조물의 지지와 보강을 위한 실용적인 형강 제품입니다.",
  "복공판": "복공판은 지하철, 교량, 터널 등 각종 토목공사 현장에서 작업 공간과 차량 통행로를 확보하기 위해 설치하는 철강 자재입니다. 높은 강도와 내구성을 바탕으로 작업자의 안전과 장비·차량의 원활한 이동을 지원하며, 반복 사용이 가능한 실용적인 가설 구조재로 널리 활용됩니다.",
};

export const productCategories = [
  {
    slug: "h-beam",
    title: "H-형강",
    image: hBeamImage,
  },
  {
    slug: "angle",
    title: "앵글",
    image: angleImage,
  },
  {
    slug: "channel",
    title: "쟌넬",
    image: channelImage,
  },
  {
    slug: "accessories",
    title: "각종 부자재",
    image: jackImage,
  },
];

export function getProductCategory(slug) {
  return productCategories.find((category) => category.slug === slug);
}

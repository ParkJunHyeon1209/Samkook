import hBeam from "../assets/images/dimensions/h-beam.webp";
import angle from "../assets/images/dimensions/angle.webp";
import channel from "../assets/images/dimensions/channel.webp";
import sheetPile from "../assets/images/dimensions/sheet-pile.webp";
import hydraulicJack from "../assets/images/dimensions/hydraulic-jack.webp";
import angleJack from "../assets/images/dimensions/angle-jack.webp";
import screwJack from "../assets/images/dimensions/screw-jack.webp";
import automaticBase from "../assets/images/dimensions/automatic-base.webp";
import semiAutomaticBase from "../assets/images/dimensions/semi-automatic-base.webp";

const hBeamDiagram = { src: hBeam, alt: "H-BEAM 단면의 H, B, t₁, t₂, r 치수 위치", width: 210 };
const angleDiagram = { src: angle, alt: "앵글 단면의 H, B, t 및 곡률 반경 위치", width: 240 };

export const dimensionDiagrams = {
  "h-beam-1": hBeamDiagram,
  "h-beam-2": hBeamDiagram,
  "h-beam-3": hBeamDiagram,
  "angle-1": angleDiagram,
  "angle-2": angleDiagram,
  "channel-1": { src: channel, alt: "쟌넬 단면의 H, B, t₁, t₂ 치수 위치", width: 200 },
  "sheet-pile": { src: sheetPile, alt: "쉬트파일 단면의 폭 B, 높이 h, 두께 t와 기준축", width: 400 },
  "hydraulic-jack": { src: hydraulicJack, alt: "유압잭 측면과 체결 홀 간격 A, B, C 도면", width: 560 },
  "angle-jack": { src: angleJack, alt: "앵글잭 체결판 4종의 홀 간격과 직경 도면", width: 300 },
  "screw-jack": { src: screwJack, alt: "스크류잭 브래킷과 4홀·8홀 체결 간격 A, B, C 도면", width: 560 },
  "automatic-base": { src: automaticBase, alt: "자동대좌와 형강 설치 구조도", width: 360 },
  "semi-automatic-base": { src: semiAutomaticBase, alt: "반자동대좌 제품 형상", width: 300 },
};

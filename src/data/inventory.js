import deck_plate from "../assets/images/inventory/deck-plate.webp";
import end_plate from "../assets/images/inventory/end-plate.webp";
import sheet_pile from "../assets/images/inventory/sheet-pile.webp";
import stiffener from "../assets/images/inventory/stiffener.webp";
import splice_plate from "../assets/images/inventory/splice-plate.webp";
import jack from "../assets/images/inventory/jack.webp";
import channel from "../assets/images/inventory/channel.webp";
import hwata from "../assets/images/inventory/hwata.webp";
import angle from "../assets/images/inventory/angle.webp";
import h_beam_1 from "../assets/images/inventory/h-beam-1.webp";
import h_beam_2 from "../assets/images/inventory/h-beam-2.webp";
import h_beam_3 from "../assets/images/inventory/h-beam-3.webp";
import h_beam_4 from "../assets/images/inventory/h-beam-4.webp";
import h_beam_5 from "../assets/images/inventory/h-beam-5.webp";
import h_beam_6 from "../assets/images/inventory/h-beam-6.webp";
import h_beam_7 from "../assets/images/inventory/h-beam-7.webp";

export const inventoryCategories = [
  {
    slug: "h-beam",
    title: "H-BEAM",
    items: [
      { id: "h-beam-1", name: "H-BEAM 1", image: h_beam_1 },
      { id: "h-beam-2", name: "H-BEAM 2", image: h_beam_2 },
      { id: "h-beam-3", name: "H-BEAM 3", image: h_beam_3 },
      { id: "h-beam-4", name: "H-BEAM 4", image: h_beam_4 },
      { id: "h-beam-5", name: "H-BEAM 5", image: h_beam_5 },
      { id: "h-beam-6", name: "H-BEAM 6", image: h_beam_6 },
      { id: "h-beam-7", name: "H-BEAM 7", image: h_beam_7 },
    ],
  },
  {
    slug: "angle",
    title: "앵글",
    items: [{ id: "angle", name: "앵글", image: angle }],
  },
  {
    slug: "channel",
    title: "쟌넬",
    items: [{ id: "channel", name: "쟌넬", image: channel }],
  },
];

export const inventoryItems = inventoryCategories.flatMap(
  (category) => category.items,
);
export const inventoryFilters = [
  { slug: "all", title: "전체보기", items: inventoryItems },
  ...inventoryCategories,
];

const accessoryCategories = [
  {
    slug: "jack",
    title: "잭",
    items: [{ id: "jack", name: "잭", image: jack }],
  },
  { slug: "base", title: "대좌", items: [] },
  {
    slug: "small-parts",
    title: "소부자재",
    items: [
      { id: "end-plate", name: "마구리판", image: end_plate },
      { id: "splice-plate", name: "연결철판", image: splice_plate },
      { id: "stiffener", name: "스티프너", image: stiffener },
    ],
  },
  {
    slug: "etc",
    title: "etc",
    items: [
      { id: "deck-plate", name: "복공판", image: deck_plate },
      { id: "sheet-pile", name: "쉬트파일", image: sheet_pile },
      { id: "hwata", name: "화타", image: hwata },
    ],
  },
];

export const inventoryGroups = [
  {
    slug: "steel",
    title: "형강",
    description: "H-BEAM · 앵글 · 쟌넬",
    image: h_beam_1,
    filters: inventoryFilters,
  },
  {
    slug: "accessories",
    title: "각종 부자재",
    description: "잭 · 대좌 · 소부자재 · etc",
    image: deck_plate,
    filters: [
      {
        slug: "all",
        title: "전체보기",
        items: accessoryCategories.flatMap((category) => category.items),
      },
      ...accessoryCategories,
    ],
  },
];

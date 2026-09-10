import deck_plate from "../assets/images/inventory/deck-plate.webp";
import end_plate from "../assets/images/inventory/end-plate.webp";
import stiffener from "../assets/images/inventory/stiffener.webp";
import stiffenerAdditional from "../assets/images/inventory/stiffener-2.webp";
import splice_plate from "../assets/images/inventory/splice-plate.webp";
import jack from "../assets/images/inventory/jack.webp";
import angle_jack from "../assets/images/inventory/angle-jack.webp";
import hydraulic_jack from "../assets/images/inventory/hydraulic-jack.webp";
import semi_automatic_base from "../assets/images/inventory/semi-automatic-base.webp";
import channel from "../assets/images/inventory/channel.webp";
import hwata from "../assets/images/inventory/hwata.webp";
import angle from "../assets/images/inventory/angle.webp";
import h_beam_1 from "../assets/images/inventory/h-beam-1.webp";
import h_beam_4 from "../assets/images/inventory/h-beam-4.webp";
import h_beam_5 from "../assets/images/inventory/h-beam-5.webp";
import h_beam_6 from "../assets/images/inventory/h-beam-6.webp";
import h_beam_7 from "../assets/images/inventory/h-beam-7.webp";

const inventoryCategories = [
  {
    slug: "h-beam",
    title: "H-BEAM",
    items: [
      { id: "h-beam-1", name: "H-BEAM 300 × 300 × 10 × 15", title: "H-BEAM", specification: "300 × 300 × 10 × 15", image: h_beam_1 },
      { id: "h-beam-4", name: "H-BEAM 300 × 305 × 15 × 15", title: "H-BEAM", specification: "300 × 305 × 15 × 15", image: h_beam_4 },
      { id: "h-beam-5", name: "H-BEAM 250 × 250 × 9 × 14", title: "H-BEAM", specification: "250 × 250 × 9 × 14", image: h_beam_5 },
      { id: "h-beam-6", name: "H-BEAM 440 × 300 × 11 × 18", title: "H-BEAM", specification: "440 × 300 × 11 × 18", image: h_beam_6 },
      { id: "h-beam-7", name: "H-BEAM 588 × 300 × 12 × 20", title: "H-BEAM", specification: "588 × 300 × 12 × 20", image: h_beam_7 },
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

const inventoryItems = inventoryCategories.flatMap(
  (category) => category.items,
);
const inventoryFilters = [
  { slug: "all", title: "전체보기", items: inventoryItems },
  ...inventoryCategories,
];

const accessoryCategories = [
  {
    slug: "jack",
    title: "잭",
    items: [
      { id: "jack", name: "잭", image: jack },
      { id: "angle-jack", name: "앵글잭", image: angle_jack },
      { id: "hydraulic-jack", name: "유압잭", image: hydraulic_jack },
    ],
  },
  { slug: "base", title: "대좌", items: [{ id: "base", name: "대좌", image: semi_automatic_base }] },
  {
    slug: "small-parts",
    title: "소부자재",
    items: [
      { id: "steel-plate", name: "철판", image: end_plate, images: [end_plate, splice_plate, stiffener, stiffenerAdditional] },
    ],
  },
  {
    slug: "etc",
    title: "etc",
    items: [
      { id: "deck-plate", name: "복공판", image: deck_plate },
      { id: "hwata", name: "지하철 화타", image: hwata },
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

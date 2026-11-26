import { accessoryImages } from "./products";
import { dimensionTableData } from "./dimensionTableData";
import jackAdditionalImage from "../assets/images/products/jack-additional.webp";

const sectionEntries = (sections) => sections.map((section) => ({
  slug: section.id,
  previousSlugs: section.previousIds ?? [],
  title: section.title,
  sections: [section],
}));

export const dimensionTableGroups = [
  { slug: "h-beam", title: "H-형강", tables: sectionEntries(dimensionTableData.hbeam) },
  { slug: "angle", title: "앵글", tables: sectionEntries(dimensionTableData.angle) },
  { slug: "channel", title: "쟌넬", tables: sectionEntries(dimensionTableData.channel) },
  {
    slug: "accessories",
    title: "각종 부자재",
    tables: [
      { slug: "accessory-1", title: "잭", representativeImage: accessoryImages["잭"], additionalImages: [jackAdditionalImage], sections: dimensionTableData.jack },
      { slug: "accessory-2", title: "대좌", representativeImage: accessoryImages["대좌"], sections: dimensionTableData.base },
      {
        slug: "accessory-4",
        title: "복공판",
        representativeImage: accessoryImages["복공판"],
        sections: [{
          id: "deck-plate",
          title: "복공판",
          headers: [[
            { label: "길이 (mm)", colSpan: 1 },
            { label: "폭 (mm)", colSpan: 1 },
            { label: "높이 (mm)", colSpan: 1 },
          ]],
          rows: [["1990", "750", "200"]],
        }],
      },
      {
        slug: "steel-plate",
        title: "철판",
        representativeImage: accessoryImages["철판"],
        sections: [{
          id: "steel-plate",
          title: "철판",
          headers: [
            ["규격", "3'×6'", "4'×8'", "5'×10'", "5'×20'", "6'×10'", "6'×20'", "8'×20'"],
            ["폭 (mm)", "914", "1,219", "1,524", "1,524", "1,829", "1,829", "2,438"],
            ["길이 (mm)", "1,829", "2,438", "3,048", "6,096", "3,048", "6,096", "6,096"],
          ].map((row) => row.map((label) => ({ label, colSpan: 1 }))),
          rows: [
            ["1.6", "21", "37", "", "", "", "", ""],
            ["2", "26", "47", "73", "", "", "", ""],
            ["1.3", "30", "54", "84", "", "", "", ""],
            ["2.5", "33", "58", "91", "", "", "", ""],
            ["2.6", "34", "61", "95", "", "", "", ""],
            ["2.7", "35", "63", "99", "", "", "", ""],
            ["3", "39", "70", "109", "219", "131", "263", ""],
            ["3.2", "42", "75", "117", "233", "140", "280", ""],
            ["3.5", "46", "82", "128", "255", "153", "306", ""],
            ["4", "54", "93", "146", "292", "175", "350", ""],
            ["4.5", "59", "105", "164", "328", "197", "394", "525"],
            ["5", "66", "117", "182", "365", "219", "438", "583"],
            ["6", "79", "140", "219", "438", "263", "525", "700"],
            ["7", "92", "163", "255", "510", "306", "613", "817"],
            ["8", "105", "187", "292", "583", "350", "700", "933"],
            ["9", "118", "210", "328", "656", "394", "788", "1,050"],
            ["10", "131", "233", "365", "729", "438", "875", "1,167"],
            ["11", "144", "257", "401", "802", "481", "963", "1,283"],
            ["12", "158", "280", "438", "875", "525", "1,050", "1,400"],
            ["13", "171", "303", "474", "948", "569", "1,137", "1,516"],
            ["14", "184", "327", "510", "1,021", "613", "1,225", "1,633"],
          ],
          notes: ["첫 열은 두께(mm)이며, 표의 무게 단위는 kg입니다."],
        }],
      },
    ],
  },
];

export function getDimensionTable(groupSlug, tableSlug) {
  const group = dimensionTableGroups.find((item) => item.slug === groupSlug);
  const table = group?.tables.find((item) => item.slug === tableSlug || item.previousSlugs?.includes(tableSlug));
  return table ? { group, table } : null;
}

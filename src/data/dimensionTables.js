import { accessoryImages } from "./products";
import { dimensionTableData } from "./dimensionTableData";

const sectionEntries = (sections) => sections.map((section) => ({
  slug: section.id,
  previousSlugs: section.previousIds ?? [],
  title: section.title,
  sections: [section],
}));

export const dimensionTableGroups = [
  { slug: "h-beam", title: "H-BEAM", tables: sectionEntries(dimensionTableData.hbeam) },
  { slug: "angle", title: "앵글", tables: sectionEntries(dimensionTableData.angle) },
  { slug: "channel", title: "쟌넬", tables: sectionEntries(dimensionTableData.channel) },
  {
    slug: "accessories",
    title: "각종 부자재",
    tables: [
      { slug: "accessory-1", title: "잭", representativeImage: accessoryImages["잭"], sections: dimensionTableData.jack },
      { slug: "accessory-2", title: "대좌", representativeImage: accessoryImages["대좌"], sections: dimensionTableData.base },
      { slug: "accessory-3", title: "쉬트파일", representativeImage: accessoryImages["쉬트파일"], sections: dimensionTableData.sheet },
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
    ],
  },
];

export function getDimensionTable(groupSlug, tableSlug) {
  const group = dimensionTableGroups.find((item) => item.slug === groupSlug);
  const table = group?.tables.find((item) => item.slug === tableSlug || item.previousSlugs?.includes(tableSlug));
  return table ? { group, table } : null;
}

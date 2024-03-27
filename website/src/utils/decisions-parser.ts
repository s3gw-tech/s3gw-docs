import logger from "@docusaurus/logger";

export function decisionsPrefixParser(filename: string): {
  filename: string;
  numberPrefix?: number;
} {
  const minFileLen =
    4 + // prefix
    1 + // separator
    1; // name

  if (filename.length < minFileLen || filename.charAt(4) !== "-") {
    // logger.info(`Document at '${filename}' is not a decision`);
    return { filename: filename };
  }

  const idxStr = filename.substring(0, 4);
  const idx = parseInt(idxStr);
  if (Number.isNaN(idx)) {
    logger.warn(`Could not parse Decision ID from '${filename}'`);
    return { filename: filename };
  }

  const fname = filename.substring(5);
  logger.info(`Decision ID ${idx} name '${fname}' found`);

  return {
    filename: filename,
    numberPrefix: idx,
  };
}

export async function decisionsItemGenerator({
  defaultSidebarItemsGenerator,
  numberPrefixParser,
  item,
  version,
  docs,
  isCategoryIndex,
}) {
  const decisionsItems: any[] = docs.filter(
    (value: any) => value.sidebarPosition !== undefined
  );
  const readmeItem = docs.find(
    (value: any) => value.id.toLowerCase() === "readme"
  );
  const templateItem = docs.find(
    (value: any) =>
      value.sidebarPosition === undefined && value.id.includes("template")
  );

  const sidebarItems = await defaultSidebarItemsGenerator({
    numberPrefixParser,
    item,
    version,
    docs: decisionsItems,
    isCategoryIndex,
  });
  const items: any[] = [
    {
      type: "doc",
      id: readmeItem.id,
    },
    {
      type: "doc",
      id: templateItem.id,
    },
    {
      type: "category",
      label: "Decisions",
      items: sidebarItems,
    },
  ];
  return items;
}

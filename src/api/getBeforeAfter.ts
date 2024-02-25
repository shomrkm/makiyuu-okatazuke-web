import type { BeforeAfter, BeforeAfterResponse } from "../types/beforeAfter";

export const getBeforeAfters = async (): Promise<BeforeAfter[]> => {
  const response = await fetch(
    "https://makiyuu-okatazuke.cdn.newt.so/v1/makiyuu-okatazuke/before-after",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.NEWT_TOKEN}`,
      },
    },
  );
  const beforeAfters: BeforeAfterResponse = await response.json();
  return beforeAfters.items.sort(
    (a: BeforeAfter, b: BeforeAfter) => b._sys.customOrder - a._sys.customOrder,
  );
};

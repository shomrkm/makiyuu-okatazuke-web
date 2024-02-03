import type { Service } from "../types/service";

export const getService = async (): Promise<Service[]> => {
  const response = await fetch("https://makiyuu-okatazuke.cdn.newt.so/v1/makiyuu-okatazuke/services", {
      headers: {
        Authorization: `Bearer ${import.meta.env.NEWT_TOKEN}`,
      },
    });
  const services = await response.json()
  return services.items;
}

import type { Service, ServiceResponse } from "../types/service";

export const getService = async (): Promise<Service[]> => {
  const response = await fetch(
    "https://makiyuu-okatazuke.cdn.newt.so/v1/makiyuu-okatazuke/services",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.NEWT_TOKEN}`,
      },
    },
  );
  const services: ServiceResponse = await response.json();
  return services.items.sort(
    (a: Service, b: Service) => b._sys.customOrder - a._sys.customOrder,
  );
};

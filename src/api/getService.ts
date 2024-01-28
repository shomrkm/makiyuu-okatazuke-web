import type { Services, Service } from "../types/service";

export const getService = async (): Promise<Service> => {
  const response = await fetch("https://makiyuu-okatazuke.cdn.newt.so/v1/makiyuu-okatazuke/services", {
      headers: {
        Authorization: `Bearer ${import.meta.env.NEWT_TOKEN}`,
      },
    });
  const services: Services = await response.json()

  if(services?.items?.length === 0) {
    throw Error('Service not found')
  }

  return services?.items[0];
}

import { formatToCurrency } from "../../utils/formatToCurrency"

type Props = {
  serviceId: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  enableLink?: boolean;
}

export const ServiceCard = ({ serviceId, name, price, duration, description, enableLink = false }: Props) => {
  return (
    <div className="flex flex-col pb-4 border-b-2">
      <div className="sm:mb-4 mb-2">
        { enableLink ? (
          <a href={`/services/${serviceId}`} className="text-blue-500 underline">
            <h2 className="md:text-2xl text-lg">{name}</h2>
          </a>
        ) : (
          <h2 className="sm:text-2xl text-lg">{name}</h2>
        )}
      </div>
      <div className="flex w-auto mb-4 lg:text-base text-sm">
        <div className="h-auto p-3 w-1/2 bg-accent text-white rounded-sm text-wrap">{duration}</div>
        <div className="w-1/2 text-3xl text-gray-700 text-center my-auto">
          <span className="mr-1">{formatToCurrency(price)}</span>
          <span className="text-base">円</span></div>
      </div>
      <span className="text-gray-500 md:text-base text-sm">{description}</span>
    </div>
  )
}

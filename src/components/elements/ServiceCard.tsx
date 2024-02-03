import { formatToCurrency } from "../../utils/formatToCurrency"

type Props = {
  name: string;
  price: number;
  duration: string;
  description: string;
}

export const ServiceCard = ({ name, price, duration, description }: Props) => {
  return (
    <div className="flex flex-col p-2 border-b-2">
      <h2 className="lg:text-2xl text-xl text-gray-700">{name}</h2>
      <div className="flex w-auto my-2 lg:text-base text-sm">
        <div className="h-auto p-3 w-1/2 bg-accent text-white rounded-sm text-wrap">{duration}</div>
        <div className="w-1/2 text-3xl text-gray-700 text-center my-auto">
          <span className="mr-1">{formatToCurrency(price)}</span>
          <span className="text-base">円</span></div>
      </div>
      <span className="text-gray-500 md:text-base text-sm">{description}</span>
    </div>
  )
}

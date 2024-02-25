import { formatToCurrency } from "../../utils/formatToCurrency";

type Props = {
  serviceId: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  enableLink?: boolean;
};

export const ServiceCard = ({
  serviceId,
  name,
  price,
  duration,
  description,
  enableLink = false,
}: Props) => {
  return (
    <div className="flex flex-col border-b-2 pb-4">
      <div className="mb-2 sm:mb-4">
        {enableLink ? (
          <a
            href={`/services/${serviceId}`}
            className="text-blue-500 underline"
          >
            <h2 className="text-lg md:text-2xl">{name}</h2>
          </a>
        ) : (
          <h2 className="text-lg sm:text-2xl">{name}</h2>
        )}
      </div>
      <div className="mb-4 flex w-auto text-sm lg:text-base">
        <div className="h-auto w-1/2 text-wrap rounded-sm bg-accent p-3 text-white">
          {duration}
        </div>
        <div className="my-auto w-1/2 text-center text-3xl text-gray-700">
          <span className="mr-1">{formatToCurrency(price)}</span>
          <span className="text-base">円</span>
        </div>
      </div>
      <span className="text-sm text-gray-500 md:text-base">{description}</span>
    </div>
  );
};

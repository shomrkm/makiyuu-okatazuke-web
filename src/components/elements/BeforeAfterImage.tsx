import type { BeforeAfter } from "../../types/beforeAfter";

type Props = {
  beforeImage: BeforeAfter["beforeImage"];
  afterImage: BeforeAfter["afterImage"];
};

export const BeforeAfterImage = ({ beforeImage, afterImage }: Props) => {
  return (
    <>
      <div className="flex max-w-[600px] flex-col items-center justify-center">
        <h3 className="mb-2 w-full rounded-lg bg-primary py-1 text-center text-accent">
          Before
        </h3>
        <img
          src={beforeImage.src}
          alt={beforeImage.altText}
          width={beforeImage.width}
          height={beforeImage.height}
        />
      </div>
      <div className="flex max-w-[600px] flex-col items-center justify-center">
        <h3 className="mb-2 w-full rounded-lg bg-secondary py-1 text-center text-white">
          After
        </h3>
        <img
          src={afterImage.src}
          alt={afterImage.altText}
          width={afterImage.width}
          height={afterImage.height}
        />
      </div>
    </>
  );
};

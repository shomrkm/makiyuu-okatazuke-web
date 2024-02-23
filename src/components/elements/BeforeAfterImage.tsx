import type { BeforeAfter } from "../../types/beforeAfter"

type Props = {
  beforeImage: BeforeAfter['beforeImage'] 
  afterImage: BeforeAfter['afterImage'] 
}

export const BeforeAfterImage = ({ beforeImage, afterImage }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[700px]">
        <h3 className="bg-primary text-accent text-center w-full py-1 rounded-lg mb-2">Before</h3>
        <img src={beforeImage.src} alt={beforeImage.altText} width={beforeImage.width} height={beforeImage.height} />
      </div>
      <div className="flex flex-col justify-center items-center max-w-[700px]">
        <h3 className="bg-secondary text-white text-center w-full py-1 rounded-lg mb-2">After</h3>
        <img src={afterImage.src} alt={afterImage.altText} width={afterImage.width} height={afterImage.height} />
      </div>
    </>
  )
}
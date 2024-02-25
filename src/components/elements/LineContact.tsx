import clsx from "clsx";
import { FaLine } from "react-icons/fa";

type Props = {
  className?: string;
};

export const LineContact = ({ className = "" }: Props) => {
  return (
    <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=makiyuu_2023">
      <div className={clsx("flex items-center gap-2", `${className}`)}>
        <FaLine />
        <span>公式LINEアカウントはこちら</span>
      </div>
    </a>
  );
};

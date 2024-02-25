import clsx from "clsx";
import ProfileImage from "../../pages/images/makiyuu-profile.jpg";

const sizes = {
  sm: "w-10 h-10",
  md: "w-20 h-20",
  lg: "w-32 h-32",
};

type Props = {
  size?: keyof typeof sizes;
  className?: string;
};

export const ProfileIcon = ({ size = "sm", className }: Props) => {
  return (
    <img
      src={ProfileImage.src}
      alt="プロフィールアイコン"
      className={clsx(sizes[size], "rounded-full", `${className}`)}
    />
  );
};

import clsx from "clsx";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
}

export const ProfileIcon = ({ size = 'sm', className }: Props) => {
  return (
    <img src="/public/makiyuu-profile.jpg" alt="プロフィールアイコン" className={clsx(sizes[size], "rounded-full", `${className}`)} />
   )
}
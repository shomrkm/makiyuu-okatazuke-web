import { type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const LinkBox = ({ href, children }: Props) => (
  <a
    href={href}
    className="flex min-h-10 w-full min-w-40 items-center justify-center bg-accent text-slate-100 lg:h-20"
  >
    {children}
  </a>
);

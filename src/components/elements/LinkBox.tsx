import { type ReactNode } from 'react'

type Props = {
  href: string;
  children: ReactNode;
}

export const LinkBox = ({href, children}: Props) => (
  <a href={href} className="flex justify-center items-center bg-accent text-slate-100 w-full lg:h-20 min-w-40 min-h-10">
    {children}
  </a>
)

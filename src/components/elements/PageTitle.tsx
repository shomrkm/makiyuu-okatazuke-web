import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const PageTitle = ({children}: Props) => {
  return (
    <div className='flex justify-center items-center w-auto'>
      <h1 className='bg-accent text-slate-200 md:text-3xl text-base md:px-10 px-2 py-2'>{children}</h1>
    </div>
  )
}

import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const PageTitle = ({children}: Props) => {
  return (
    <div className='flex justify-center items-center w-auto'>
      <h1 className='bg-accent text-slate-200 sm:text-3xl text-xl px-10 py-2'>{children}</h1>
    </div>
  )
}

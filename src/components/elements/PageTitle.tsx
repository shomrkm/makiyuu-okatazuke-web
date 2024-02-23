import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const PageTitle = ({children}: Props) => {
  return (
    <div className='flex justify-center items-center w-auto'>
      <h1 className='text-accent sm:text-4xl text-2xl px-4 py-2 border-b-4 border-accent'>{children}</h1>
    </div>
  )
}

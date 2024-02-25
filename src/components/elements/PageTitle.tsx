import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  return (
    <div className="flex w-auto items-center justify-center">
      <h1 className="border-b-4 border-accent px-4 py-2 text-2xl text-accent sm:text-4xl">
        {children}
      </h1>
    </div>
  );
};

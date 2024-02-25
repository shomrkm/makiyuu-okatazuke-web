import React from "react";

type Props = {
  step: number;
  title: string;
  children: React.ReactNode;
};

export const StepContent = ({ step, title, children }: Props) => {
  return (
    <>
      <h2 className="flex items-center justify-center py-4">
        <span className="mr-4 text-2xl text-accent sm:text-4xl">{`STEP${step}`}</span>
        <span className="text-base sm:text-2xl">{title}</span>
      </h2>
      <div className="text-sm sm:text-base">{children}</div>
    </>
  );
};

import React from "react";

type Props = {
  step: number;
  title: string;
  children: React.ReactNode;
}

export const StepContent = ({ step, title, children }: Props) => {
  return (
    <>
      <h2 className="flex items-center justify-center py-4">
        <span className="sm:text-4xl text-2xl text-accent mr-2">{`STEP${step}`}</span>
        <span className="sm:text-2xl text-base">{title}</span>
      </h2>
      <div className="sm:text-base text-sm">
        {children}
      </div>
    </>
  )
}
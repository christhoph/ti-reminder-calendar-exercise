import type { PropsWithChildren } from "react";

type RemindersHeaderProps = PropsWithChildren & {
  title: string;
};

export const RemindersHeader = ({ children, title }: RemindersHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-2xl text-dark-slate">{title}</h3>

      {children}
    </div>
  );
};

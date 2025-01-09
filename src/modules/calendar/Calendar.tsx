import type { PropsWithChildren } from "react";

import { CalendarContextProvider } from "./Calendar.provider";
import { CalendarActions } from "./components/CalendarActions";
import { CalendarHeader } from "./components/CalendarHeader";
import { CalendarDayNames } from "./components/CalendarDayNames";
import { CalendarDayGrid } from "./components/CalendarDayGrid";

type CalendarProps = PropsWithChildren;

export const Calendar = ({ children }: CalendarProps) => {
  return (
    <CalendarContextProvider>
      <div className="h-full flex flex-col items-center justify-between bg-calendar-gradient gap-8 p-9 text-white">
        <CalendarHeader />

        <div className="h-96 flex flex-col gap-1 text-center">
          <CalendarActions />

          <CalendarDayNames />

          <CalendarDayGrid />
        </div>

        {children}
      </div>
    </CalendarContextProvider>
  );
};

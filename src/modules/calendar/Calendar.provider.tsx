import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import { CalendarManager } from "./Calendar.utils";
import { useCalendarState } from "./hooks/useCalendarState";

type CalendarContextState = ReturnType<typeof useCalendarState> & {
  calendar: CalendarManager;
};

const CalendarContext = createContext<CalendarContextState | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCalendar = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error(
      "useCalendar must be used within a <CalendarContextProvider />"
    );
  }

  return context;
};

type CalendarContextProps = PropsWithChildren;

export const CalendarContextProvider = ({ children }: CalendarContextProps) => {
  const calendarState = useCalendarState();

  const value = useMemo(
    () => ({
      ...calendarState,
      calendar: new CalendarManager(calendarState.currentDate),
    }),
    [calendarState]
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

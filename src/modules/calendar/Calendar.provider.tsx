import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

import { CalendarManager } from "./Calendar.utils";

type CalendarContextState = {
  currentDate: Date;
  calendar: CalendarManager;
  onDaySelect: (date: Date) => void;
  onNextMonth: () => void;
  onPrevMonth: () => void;
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
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());

  const onDaySelect = (date: Date) => {
    setCurrentDate(date);
  };

  const onNextMonth = () => {
    setCurrentDate((prev) => {
      const cloneDate = new Date(prev);

      cloneDate.setMonth(prev.getMonth() + 1);
      cloneDate.setDate(1);

      return cloneDate;
    });
  };

  const onPrevMonth = () => {
    setCurrentDate((prev) => {
      const cloneDate = new Date(prev);

      cloneDate.setMonth(prev.getMonth() - 1);
      cloneDate.setDate(1);

      return cloneDate;
    });
  };

  const value = useMemo(
    () => ({
      currentDate,
      calendar: new CalendarManager(currentDate),
      onDaySelect,
      onNextMonth,
      onPrevMonth,
    }),
    [currentDate]
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

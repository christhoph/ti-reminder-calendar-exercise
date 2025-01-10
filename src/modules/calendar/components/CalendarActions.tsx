import { ArrowChevronLeft, ArrowChevronRight } from "@/components/icons";

import { useCalendar } from "../Calendar.provider";

export const CalendarActions = () => {
  const { onSetNextMonth, onSetPrevMonth, onSetTodayDate } = useCalendar();

  return (
    <div
      data-testid="calendar-actions"
      className="flex items-center justify-center gap-1 mb-4"
    >
      <button
        onClick={onSetPrevMonth}
        className="h-6 w-6 flex items-center justify-center"
      >
        <ArrowChevronLeft />
      </button>

      <button onClick={onSetTodayDate} className="p-1.5">
        <div className="h-1.5 w-1.5 bg-light-gray rounded-full" />
      </button>

      <button
        onClick={onSetNextMonth}
        className="h-6 w-6 flex items-center justify-center"
      >
        <ArrowChevronRight />
      </button>
    </div>
  );
};

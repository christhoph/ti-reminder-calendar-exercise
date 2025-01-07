import { ArrowChevronLeft, ArrowChevronRight } from "@/components/icons";

import { useCalendar } from "../Calendar.provider";

export const CalendarActions = () => {
  const { onNextMonth, onPrevMonth } = useCalendar();

  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <button
        onClick={onPrevMonth}
        className="h-6 w-6 flex items-center justify-center"
      >
        <ArrowChevronLeft />
      </button>

      <div className="h-1.5 w-1.5 bg-light-gray rounded-full" />

      <button
        onClick={onNextMonth}
        className="h-6 w-6 flex items-center justify-center"
      >
        <ArrowChevronRight />
      </button>
    </div>
  );
};

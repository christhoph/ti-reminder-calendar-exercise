import { CalendarDay } from "./CalendarDay";

import { useCalendar } from "../Calendar.provider";

export const CalendarDayGrid = () => {
  const { calendar } = useCalendar();

  return (
    <div
      data-testid="calendar-day-grid"
      className="isolate grid grid-cols-7 gap-2 text-lg"
    >
      {calendar.getDaysOfTheMonth().map((day, index) => (
        <div
          className="h-11 w-11 flex p-px"
          key={day ? day.toLocaleDateString() : index}
          data-testid={
            day ? "calendar-day-grid-item" : "calendar-day-grid-empty"
          }
        >
          {day && <CalendarDay day={day} />}
        </div>
      ))}
    </div>
  );
};

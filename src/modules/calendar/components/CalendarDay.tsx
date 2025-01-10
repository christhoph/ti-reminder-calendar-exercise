import classNames from "classnames";

import { areDatesEqual } from "@/utils";

import { useCalendar } from "../Calendar.provider";
import { useCheckForReminders } from "../hooks/useCheckForReminders";

type CalendarDayProps = {
  day: Date;
};

export const CalendarDay = ({ day }: CalendarDayProps) => {
  const checkForReminders = useCheckForReminders();
  const { currentDate, onDaySelect } = useCalendar();

  const hasReminders = checkForReminders(day);
  const isToday = areDatesEqual(day, new Date());
  const isSelected = currentDate && areDatesEqual(day, currentDate);

  const handleDaySelect = () => {
    onDaySelect(day);
  };

  return (
    <button
      onClick={handleDaySelect}
      className={classNames(
        "flex flex-1 items-center justify-center rounded-full hover:bg-white hover:text-blue-500 relative",
        {
          "bg-white text-blue-500": isSelected,
          "bg-highlight-gradient hover:bg-highlight-gradient-hover":
            isToday && !isSelected,
        }
      )}
    >
      {day.getDate()}

      {hasReminders && (
        <span
          data-testid="calendar-day-indicator"
          className="h-1.5 w-1.5 bg-bright-cyan rounded-full absolute top-2 right-0"
        />
      )}
    </button>
  );
};

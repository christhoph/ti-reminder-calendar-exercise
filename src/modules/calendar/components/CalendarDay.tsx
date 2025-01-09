import classNames from "classnames";

import { useCalendar } from "../Calendar.provider";

type CalendarDayProps = {
  day: Date;
};

export const CalendarDay = ({ day }: CalendarDayProps) => {
  const { currentDate, calendar, onDaySelect } = useCalendar();

  const isToday = calendar.areDatesEqual(day, new Date());
  const isSelected = currentDate && calendar.areDatesEqual(day, currentDate);
  // TODO:: implement logic to know if it have reminders
  const hasReminders = false;

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
        <span className="h-1.5 w-1.5 bg-bright-cyan rounded-full absolute top-2 right-0" />
      )}
    </button>
  );
};

import { DAYS_OF_WEEK } from "../Calendar.constants";

export const CalendarDayNames = () => {
  const daysOfWeek = DAYS_OF_WEEK.map((day) => day.slice(0, 3));

  return (
    <div className="grid grid-cols-7 text-xs font-black">
      {daysOfWeek.map((day) => (
        <div key={day} className="uppercase">
          {day}
        </div>
      ))}
    </div>
  );
};

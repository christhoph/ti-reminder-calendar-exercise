import { useCalendar } from "../Calendar.provider";

export const CalendarHeader = () => {
  const { calendar } = useCalendar();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-black text-5rem leading-none">
        {calendar.getYear()}
      </h2>

      <h3 className="font-bold text-2.8125rem leading-none">
        {calendar.getMonthName()}
      </h3>
    </div>
  );
};

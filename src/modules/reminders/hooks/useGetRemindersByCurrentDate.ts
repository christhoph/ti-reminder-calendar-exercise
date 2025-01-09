import { format } from "date-fns";
import { useCallback } from "react";

import { useGetRemindersQuery } from "@/state/reminders";
import { useGetCurrentDateQuery } from "@/state/currentDate";

export const useGetRemindersByCurrentDate = () => {
  const { data: currentDate } = useGetCurrentDateQuery();
  const { data: remindersMap } = useGetRemindersQuery();

  const timeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);

    return hours * 60 + minutes;
  };

  const getRemindersByCurrentDate = useCallback(() => {
    const date = currentDate || new Date();
    const formattedDate = format(date, "MM/dd/yyyy");
    const remindersList = remindersMap?.get(formattedDate) ?? [];
    const remindersListSorted = remindersList.sort(
      (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
    );

    return remindersListSorted;
  }, [currentDate, remindersMap]);

  return getRemindersByCurrentDate;
};

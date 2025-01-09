import { useCallback } from "react";

import { useGetRemindersQuery } from "@/state/reminders";
import { useGetCurrentDateQuery } from "@/state/currentDate";
import { format } from "date-fns";

export const useGetRemindersByCurrentDate = () => {
  const { data: currentDate } = useGetCurrentDateQuery();
  const { data: remindersMap } = useGetRemindersQuery();

  const getRemindersByCurrentDate = useCallback(() => {
    const date = currentDate || new Date();
    const formattedDate = format(date, "MM/dd/yyyy");

    return remindersMap?.get(formattedDate) ?? [];
  }, [currentDate, remindersMap]);

  return getRemindersByCurrentDate;
};

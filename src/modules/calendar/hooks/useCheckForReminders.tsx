import { format } from "date-fns";

import { useGetRemindersQuery } from "@/state/reminders";

export const useCheckForReminders = () => {
  const { data: remindersMap } = useGetRemindersQuery();

  const checkForReminders = (date: Date): boolean => {
    const formattedDate = format(date, "MM/dd/yyyy");

    return !!remindersMap?.has(formattedDate);
  };

  return checkForReminders;
};

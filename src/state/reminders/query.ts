import { useQuery } from "@tanstack/react-query";

import { RemindersMap } from "./types";

const GET_REMINDERS = "GET_REMINDERS";

export const getRemindersKey = () => [GET_REMINDERS];

const getReminders = (): RemindersMap => new Map();

export const useGetRemindersQuery = () => {
  return useQuery({
    queryFn: getReminders,
    queryKey: getRemindersKey(),
  });
};

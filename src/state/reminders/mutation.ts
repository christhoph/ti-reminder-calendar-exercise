import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Reminder } from "@/modules/reminders/Reminders.types";

import { RemindersMap } from "./types";
import { getRemindersKey } from "./query";

export function useCreateRemindersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reminder: Reminder) => reminder,
    onSuccess: (data) => {
      const remindersKey = getRemindersKey();

      const queryData = queryClient.getQueryData<RemindersMap>(remindersKey);

      const remindersList = queryData?.get(data.date) ?? [];

      queryData?.set(data.date, [...remindersList, data]);

      queryClient.setQueryData(remindersKey, () => queryData);
    },
  });
}

export function useUpdateRemindersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reminder: Reminder) => reminder,
    onSuccess: (data) => {
      const remindersKey = getRemindersKey();

      const queryData = queryClient.getQueryData<RemindersMap>(remindersKey);

      const remindersList = queryData?.get(data.date) ?? [];

      // TODO:: take into account when it is a different date
      if (remindersList.length) {
        const remindersUpdatedList = remindersList.map((reminder) =>
          reminder.date === data.date ? data : reminder
        );

        queryData?.set(data.date, remindersUpdatedList);
      }

      queryClient.setQueryData(remindersKey, () => queryData);
    },
  });
}

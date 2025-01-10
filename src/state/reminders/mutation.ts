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

type ReminderToUpdate = {
  reminder: Reminder;
  prevReminderDate?: string;
};

export function useUpdateRemindersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ReminderToUpdate) => data,
    onSuccess: ({ reminder, prevReminderDate }) => {
      const remindersKey = getRemindersKey();

      const queryData = queryClient.getQueryData<RemindersMap>(remindersKey);

      const isSameDate = reminder.date === prevReminderDate;

      if (isSameDate) {
        const remindersList = queryData?.get(reminder.date) ?? [];

        const remindersListUpdated = remindersList.map((item) =>
          item.id === reminder.id ? reminder : item
        );

        queryData?.set(reminder.date, remindersListUpdated);
      }

      if (prevReminderDate && !isSameDate) {
        const remindersList = queryData?.get(reminder.date) ?? [];
        const prevRemindersList = queryData?.get(prevReminderDate) ?? [];

        const remindersListUpdated = [...remindersList, reminder];
        const prevRemindersListUpdated = prevRemindersList.filter(
          (item) => item.id !== reminder.id
        );

        queryData?.set(reminder.date, remindersListUpdated);

        if (prevRemindersListUpdated.length) {
          queryData?.set(prevReminderDate, prevRemindersListUpdated);
        } else {
          queryData?.delete(prevReminderDate);
        }
      }

      queryClient.setQueryData(remindersKey, () => queryData);
    },
  });
}

export function useRemoveRemindersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reminder: Reminder) => reminder,
    onSuccess: (data) => {
      const remindersKey = getRemindersKey();

      const queryData = queryClient.getQueryData<RemindersMap>(remindersKey);

      const remindersList = queryData?.get(data.date) ?? [];

      const reminderListUpdated = remindersList.filter(
        (item) => item.id !== data.id
      );

      if (reminderListUpdated.length) {
        queryData?.set(data.date, reminderListUpdated);
      } else {
        queryData?.delete(data.date);
      }

      queryClient.setQueryData(remindersKey, () => queryData);
    },
  });
}

import { parse } from "date-fns";
import { useCallback, useMemo } from "react";

import {
  useCreateRemindersMutation,
  useRemoveRemindersMutation,
  useUpdateRemindersMutation,
} from "@/state/reminders";
import {
  useGetCurrentDateMutation,
  useGetCurrentDateQuery,
} from "@/state/currentDate";

import { Reminder, RemindersSteps } from "../Reminders.types";

export const useRemindersMutate = () => {
  const { data: currentDate } = useGetCurrentDateQuery();
  const { mutate: updateCurrentDateMutate } = useGetCurrentDateMutation();

  const { mutate: createRemindersMutate } = useCreateRemindersMutation();
  const { mutate: editRemindersMutate } = useUpdateRemindersMutation();
  const { mutate: removeRemindersMutate } = useRemoveRemindersMutation();

  const onUpdateCurrentDate = useCallback(
    (reminderDateStr: string) => {
      if (currentDate) {
        const reminderDate = parse(reminderDateStr, "MM/dd/yyyy", new Date());

        updateCurrentDateMutate(reminderDate);
      }
    },
    [currentDate, updateCurrentDateMutate]
  );

  const onSaveReminder = useCallback(
    (
      reminder: Reminder,
      remindersStep: RemindersSteps,
      prevReminderDate?: string
    ) => {
      const mutate = () =>
        remindersStep === RemindersSteps.UPDATE_REMINDER
          ? editRemindersMutate({ reminder, prevReminderDate })
          : createRemindersMutate(reminder);

      mutate();
      onUpdateCurrentDate(reminder.date);
    },
    [createRemindersMutate, editRemindersMutate, onUpdateCurrentDate]
  );

  const onRemoveReminder = useCallback(
    (reminder: Reminder) => {
      removeRemindersMutate(reminder);
      onUpdateCurrentDate(reminder.date);
    },
    [onUpdateCurrentDate, removeRemindersMutate]
  );

  const value = useMemo(
    () => ({
      onSaveReminder,
      onRemoveReminder,
    }),
    [onRemoveReminder, onSaveReminder]
  );

  return value;
};

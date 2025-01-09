import {
  useCreateRemindersMutation,
  useUpdateRemindersMutation,
} from "@/state/reminders";

import { Reminder, RemindersSteps } from "../Reminders.types";

export const useRemindersMutate = () => {
  const { mutate: createRemindersMutate } = useCreateRemindersMutation();
  const { mutate: editRemindersMutate } = useUpdateRemindersMutation();

  const onSaveReminder = (
    reminder: Reminder,
    remindersStep: RemindersSteps
  ) => {
    const mutate =
      remindersStep === RemindersSteps.UPDATE_REMINDER
        ? editRemindersMutate
        : createRemindersMutate;

    mutate(reminder);
  };

  return {
    onSaveReminder,
  };
};

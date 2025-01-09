import { useState } from "react";

import { Reminder } from "../Reminders.types";

export const useReminderUpdate = () => {
  const [reminderToUpdate, setReminderToUpdate] = useState<Reminder | null>(
    null
  );

  const onSetReminderToUpdate = (reminder: Reminder) => {
    setReminderToUpdate(reminder);
  };

  const onResetReminderToUpdate = () => {
    setReminderToUpdate(null);
  };

  return {
    reminderToUpdate,
    onSetReminderToUpdate,
    onResetReminderToUpdate,
  };
};

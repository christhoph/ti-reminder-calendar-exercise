import { useCallback } from "react";

import { PencilIcon } from "@/components/icons";
import { Reminder } from "@/modules/reminders/Reminders.types";

import { useReminders } from "../../Reminders.provider";

type EditReminderButtonProps = {
  reminder: Reminder;
};

export const EditReminderButton = ({ reminder }: EditReminderButtonProps) => {
  const { onSetReminderToUpdate, onUpdateReminderStep } = useReminders();

  const handleUpdateReminder = useCallback(() => {
    onSetReminderToUpdate(reminder);
    onUpdateReminderStep();
  }, [onSetReminderToUpdate, onUpdateReminderStep, reminder]);

  return (
    <button
      onClick={handleUpdateReminder}
      className="flex items-center justify-center h-9 w-9 rounded-full bg-edit-gradient absolute -bottom-3 -right-3"
    >
      <PencilIcon />
    </button>
  );
};

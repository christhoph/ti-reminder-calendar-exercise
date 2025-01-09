import classNames from "classnames";

import { RemindersSteps } from "../../Reminders.types";
import { useReminders } from "../../Reminders.provider";

type RemoveReminderButtonProps = {
  className?: string;
};

export const RemoveReminderButton = ({
  className,
}: RemoveReminderButtonProps) => {
  const {
    remindersStep,
    reminderToUpdate,
    onRemoveReminder,
    onShowRemindersListStep,
  } = useReminders();

  const onReminderRemove = () => {
    if (reminderToUpdate) {
      onRemoveReminder(reminderToUpdate);
      onShowRemindersListStep();
    }
  };

  if (remindersStep !== RemindersSteps.UPDATE_REMINDER) {
    return;
  }

  return (
    <button
      type="button"
      onClick={onReminderRemove}
      className={classNames("bg-bright-red", className)}
    >
      Remove
    </button>
  );
};

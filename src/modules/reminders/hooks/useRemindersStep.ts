import { useState } from "react";

import { RemindersSteps } from "../Reminders.types";

export const useRemindersStep = () => {
  const [remindersStep, setRemindersStep] = useState<RemindersSteps>(
    RemindersSteps.REMINDERS_LIST
  );

  const onAddReminder = () => {
    setRemindersStep(RemindersSteps.ADD_REMINDER);
  };

  const onUpdateReminder = () => {
    setRemindersStep(RemindersSteps.UPDATE_REMINDER);
  };

  const onShowRemindersList = () => {
    setRemindersStep(RemindersSteps.REMINDERS_LIST);
  };

  return {
    remindersStep,
    onAddReminder,
    onUpdateReminder,
    onShowRemindersList,
  };
};

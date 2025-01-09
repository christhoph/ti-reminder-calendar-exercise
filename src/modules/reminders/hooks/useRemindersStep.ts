import { useState } from "react";

import { RemindersSteps } from "../Reminders.types";

export const useRemindersStep = () => {
  const [remindersStep, setRemindersStep] = useState<RemindersSteps>(
    RemindersSteps.REMINDERS_LIST
  );

  const onAddReminderStep = () => {
    setRemindersStep(RemindersSteps.ADD_REMINDER);
  };

  const onUpdateReminderStep = () => {
    setRemindersStep(RemindersSteps.UPDATE_REMINDER);
  };

  const onShowRemindersListStep = () => {
    setRemindersStep(RemindersSteps.REMINDERS_LIST);
  };

  return {
    remindersStep,
    onAddReminderStep,
    onUpdateReminderStep,
    onShowRemindersListStep,
  };
};

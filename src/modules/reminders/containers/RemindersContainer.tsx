import { ReminderFormContainer } from "./ReminderFormContainer";
import { RemindersListContainer } from "./RemindersListContainer";

import { useReminders } from "../Reminders.provider";
import { RemindersSteps } from "../Reminders.types";

export const RemindersContainer = () => {
  const { remindersStep } = useReminders();

  return (
    <div className="bg-white flex flex-col h-full p-9">
      {remindersStep === RemindersSteps.REMINDERS_LIST ? (
        <RemindersListContainer />
      ) : (
        <ReminderFormContainer />
      )}
    </div>
  );
};

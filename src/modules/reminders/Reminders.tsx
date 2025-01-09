import { useState } from "react";

import { RemindersSteps } from "./Reminders.types";
import { ReminderFormContainer } from "./containers/ReminderFormContainer";
import { RemindersListContainer } from "./containers/RemindersListContainer";

export const Reminders = () => {
  const [remindersStep] = useState<RemindersSteps>(
    RemindersSteps.REMINDERS_LIST
  );

  // TODO:: create logic to decide when to show each container

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

import { Reminder } from "@/modules/reminders/Reminders.types";

import { NoReminders } from "./NoReminders";
import { RemindersListItem } from "./RemindersListItem";

type RemindersListProps = {
  reminders?: Reminder[];
};

export const RemindersList = ({ reminders = [] }: RemindersListProps) => {
  if (!reminders.length) {
    return <NoReminders />;
  }

  return (
    <div className="w-full flex flex-col gap-8 overflow-y-auto p-6 scrollable-list">
      {reminders.map((reminder) => (
        <RemindersListItem {...reminder} key={reminder.title} />
      ))}
    </div>
  );
};

import { Reminder } from "../Reminders.types";
import { RemindersHeader } from "../components/RemindersHeader";
import { RemindersList } from "../components/RemindersList/RemindersList";
import { AddReminderButton } from "../components/RemindersList/AddReminderButton";

export const RemindersListContainer = () => {
  // TODO:: get the created reminders
  const reminders: Reminder[] = [];

  return (
    <>
      <RemindersHeader title="Friday, August 26, 2022">
        <AddReminderButton />
      </RemindersHeader>

      <div className="h-[calc(100% - 3rem)] max-h-[calc(100% - 3rem)] flex flex-col flex-1 items-center justify-center overflow-hidden mt-8 -mx-6">
        <RemindersList reminders={reminders} />
      </div>
    </>
  );
};

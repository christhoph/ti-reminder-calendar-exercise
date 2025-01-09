import { useReminders } from "../../Reminders.provider";

export const AddReminderButton = () => {
  const { onAddReminder } = useReminders();

  return (
    <button
      onClick={onAddReminder}
      className="bg-highlight-gradient rounded text-base text-white py-3 px-10"
    >
      Add reminder
    </button>
  );
};

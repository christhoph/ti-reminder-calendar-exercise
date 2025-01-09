import { useReminders } from "../../Reminders.provider";

export const AddReminderButton = () => {
  const { onAddReminderStep } = useReminders();

  return (
    <button
      onClick={onAddReminderStep}
      className="bg-highlight-gradient rounded text-base text-white py-3 px-10"
    >
      Add reminder
    </button>
  );
};

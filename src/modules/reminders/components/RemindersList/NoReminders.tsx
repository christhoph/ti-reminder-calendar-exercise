import NoReminderImage from "@/assets/no-reminders.svg";

export const NoReminders = () => {
  return (
    <div
      data-testid="no-reminders"
      className="flex flex-col items-center gap-1"
    >
      <img alt="no calendar reminders" src={NoReminderImage} />

      <span className="text-xl text-slate-gray">
        No reminders registered so far
      </span>
    </div>
  );
};

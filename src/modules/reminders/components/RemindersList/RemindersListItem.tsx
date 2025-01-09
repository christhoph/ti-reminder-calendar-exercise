import { ClockIcon, PencilIcon } from "@/components/icons";
import { Reminder } from "@/modules/reminders/Reminders.types";

type RemindersListItemProps = Reminder;

export const RemindersListItem = ({
  color,
  title,
  description,
  time,
}: RemindersListItemProps) => {
  return (
    <div className="flex min-h-[134px] w-full shadow-xxl relative rounded-3xl">
      <div className="p-3 pr-0">
        <div
          className="h-full w-3 rounded-3xl"
          style={{ backgroundColor: color }}
        />
      </div>

      <div className="flex flex-col flex-1 justify-evenly p-3">
        <h4 className="text-sm text-medium-gray">{title}</h4>
        <p className="text-lg text-dark-slate">{description}</p>
      </div>

      <div className="flex flex-col items-center justify-evenly h-full w-24 border-l border-l-light-lavender p-3">
        <ClockIcon />

        <span className="text-3xl text-medium-gray">{time}</span>
      </div>

      <button className="flex items-center justify-center h-9 w-9 rounded-full bg-edit-gradient absolute -bottom-3 -right-3">
        <PencilIcon />
      </button>
    </div>
  );
};

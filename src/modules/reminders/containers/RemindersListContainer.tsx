import classNames from "classnames";

import { RemindersList } from "../components/RemindersList/RemindersList";
import { useGetRemindersByCurrentDate } from "../hooks/useGetRemindersByCurrentDate";
import { RemindersListHeader } from "../components/RemindersHeader/RemindersListHeader";

export const RemindersListContainer = () => {
  const getRemindersByCurrentDate = useGetRemindersByCurrentDate();

  const reminders = getRemindersByCurrentDate();

  return (
    <>
      <RemindersListHeader />

      <div
        className={classNames(
          "h-[calc(100% - 3rem)] max-h-[calc(100% - 3rem)] flex flex-col flex-1 items-center overflow-hidden mt-8 -mx-6",
          {
            "justify-center": !reminders.length,
          }
        )}
      >
        <RemindersList reminders={reminders} />
      </div>
    </>
  );
};

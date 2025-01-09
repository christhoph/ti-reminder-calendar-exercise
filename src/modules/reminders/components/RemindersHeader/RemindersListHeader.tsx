import { RemindersHeader } from "./RemindersHeader";

import { useGetFormattedDate } from "../../hooks/useGetFormattedDate";
import { AddReminderButton } from "../RemindersList/AddReminderButton";

export const RemindersListHeader = () => {
  const getFormattedDate = useGetFormattedDate();

  return (
    <RemindersHeader title={getFormattedDate()}>
      <AddReminderButton />
    </RemindersHeader>
  );
};

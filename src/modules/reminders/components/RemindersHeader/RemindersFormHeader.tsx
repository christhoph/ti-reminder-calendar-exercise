import { useMemo } from "react";

import { RemindersHeader } from "./RemindersHeader";

import { RemindersSteps } from "../../Reminders.types";
import { useReminders } from "../../Reminders.provider";
import { useGetFormattedDate } from "../../hooks/useGetFormattedDate";

const reminderStepTitleMapper: Partial<Record<RemindersSteps, string>> = {
  [RemindersSteps.ADD_REMINDER]: "Add",
  [RemindersSteps.UPDATE_REMINDER]: "Edit",
};

export const RemindersFormHeader = () => {
  const { remindersStep } = useReminders();
  const getFormattedDate = useGetFormattedDate();

  const reminderHeaderTitle = useMemo(() => {
    const formattedDate = getFormattedDate();
    const reminderStepTitle = reminderStepTitleMapper[remindersStep];

    return `${reminderStepTitle} reminder - ${formattedDate}`;
  }, [getFormattedDate, remindersStep]);

  return <RemindersHeader title={reminderHeaderTitle} />;
};

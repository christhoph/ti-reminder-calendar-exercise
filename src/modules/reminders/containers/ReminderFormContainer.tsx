import { RemindersHeader } from "../components/RemindersHeader";
import { ReminderForm } from "../components/ReminderForm/ReminderForm";

export const ReminderFormContainer = () => {
  return (
    <>
      <RemindersHeader title="Add reminder - Friday, August 26, 2022" />

      <ReminderForm />
    </>
  );
};

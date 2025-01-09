export enum RemindersSteps {
  REMINDERS_LIST = "REMINDERS_LIST",
  ADD_REMINDER = "ADD_REMINDER",
  UPDATE_REMINDER = "UPDATE_REMINDER",
}

export type Reminder = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  color: string;
};

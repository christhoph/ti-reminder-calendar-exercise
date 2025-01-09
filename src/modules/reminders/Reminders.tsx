import { RemindersContextProvider } from "./Reminders.provider";
import { RemindersContainer } from "./containers/RemindersContainer";

export const Reminders = () => {
  return (
    <RemindersContextProvider>
      <RemindersContainer />
    </RemindersContextProvider>
  );
};

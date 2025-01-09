import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import { useRemindersStep } from "./hooks/useRemindersStep";
import { useRemindersMutate } from "./hooks/useRemindersMutate";

type RemindersContextState = ReturnType<typeof useRemindersStep> &
  ReturnType<typeof useRemindersMutate>;

const RemindersContext = createContext<RemindersContextState | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useReminders = () => {
  const context = useContext(RemindersContext);

  if (!context) {
    throw new Error(
      "useReminders must be used within a <RemindersContextProvider />"
    );
  }

  return context;
};

type RemindersContextProps = PropsWithChildren;

export const RemindersContextProvider = ({
  children,
}: RemindersContextProps) => {
  const remindersStep = useRemindersStep();
  const reminderMutate = useRemindersMutate();

  const value = useMemo(
    () => ({
      ...remindersStep,
      ...reminderMutate,
    }),
    [reminderMutate, remindersStep]
  );

  return (
    <RemindersContext.Provider value={value}>
      {children}
    </RemindersContext.Provider>
  );
};

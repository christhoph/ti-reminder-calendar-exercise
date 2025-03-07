/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import { useRemindersStep } from "./hooks/useRemindersStep";
import { useRemindersMutate } from "./hooks/useRemindersMutate";
import { useReminderUpdate } from "./hooks/useReminderUpdate";

export type RemindersContextState = ReturnType<typeof useRemindersStep> &
  ReturnType<typeof useRemindersMutate> &
  ReturnType<typeof useReminderUpdate>;

export const RemindersContext = createContext<RemindersContextState | null>(
  null
);

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
  const remindersMutate = useRemindersMutate();
  const remindersUpdate = useReminderUpdate();

  const value = useMemo(
    () => ({
      ...remindersMutate,
      ...remindersStep,
      ...remindersUpdate,
    }),
    [remindersMutate, remindersStep, remindersUpdate]
  );

  return (
    <RemindersContext.Provider value={value}>
      {children}
    </RemindersContext.Provider>
  );
};

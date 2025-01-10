import { PropsWithChildren } from "react";

import { RemindersSteps } from "../Reminders.types";
import { RemindersContext, RemindersContextState } from "../Reminders.provider";

type CalendarProviderMockProps = PropsWithChildren & {
  value?: Partial<RemindersContextState>;
};

export const RemindersProviderMock = ({
  children,
  value,
}: CalendarProviderMockProps) => {
  const mockValue: RemindersContextState = {
    remindersStep: RemindersSteps.REMINDERS_LIST,
    onAddReminderStep: vi.fn(),
    onUpdateReminderStep: vi.fn(),
    onShowRemindersListStep: vi.fn(),
    onSaveReminder: vi.fn(),
    onRemoveReminder: vi.fn(),
    reminderToUpdate: null,
    onSetReminderToUpdate: vi.fn(),
    onResetReminderToUpdate: vi.fn(),
    ...value,
  };

  return (
    <RemindersContext.Provider value={mockValue}>
      {children}
    </RemindersContext.Provider>
  );
};

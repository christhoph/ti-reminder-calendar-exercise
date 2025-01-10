import { PropsWithChildren } from "react";

import { CalendarManager } from "../utils/CalendarManager";
import { CalendarContext, CalendarContextState } from "../Calendar.provider";

type CalendarProviderMockProps = PropsWithChildren & {
  value?: Partial<CalendarContextState>;
};

export const CalendarProviderMock = ({
  children,
  value,
}: CalendarProviderMockProps) => {
  const currentDate = new Date();
  const mockValue: CalendarContextState = {
    currentDate,
    onDaySelect: vi.fn(),
    onSetNextMonth: vi.fn(),
    onSetPrevMonth: vi.fn(),
    onSetTodayDate: vi.fn(),
    calendar: new CalendarManager(value?.currentDate ?? currentDate),
    ...value,
  };

  return (
    <CalendarContext.Provider value={mockValue}>
      {children}
    </CalendarContext.Provider>
  );
};

import { describe, it, expect } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";

import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

import { CalendarDay } from "./CalendarDay";

import type { CalendarContextState } from "../Calendar.provider";
import { CalendarProviderMock } from "../tests/CalendarProviderMock";

import * as useCheckForReminders from "../hooks/useCheckForReminders";

const defaultDate = new Date("2025-01-09T00:00:00Z");
const calendarDayIndicatorTestId = "calendar-day-indicator";

type SetUpProps = {
  day?: Date;
  value?: Partial<CalendarContextState>;
};
const setup = ({ day = defaultDate, value }: Partial<SetUpProps> = {}) =>
  render(
    <ReactQueryProvider>
      <CalendarProviderMock value={value}>
        <CalendarDay day={day} />
      </CalendarProviderMock>
    </ReactQueryProvider>
  );

const mockUseCheckForReminders = (hasReminders: boolean = false) =>
  vi
    .spyOn(useCheckForReminders, "useCheckForReminders")
    .mockReturnValue(vi.fn().mockReturnValue(hasReminders));

describe("CalendarDay", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be rendered successfully", () => {
    setup();

    const calendarDay = screen.getByRole("button");
    const calendarDayIndicator = screen.queryByTestId(
      calendarDayIndicatorTestId
    );

    expect(calendarDay).toBeInTheDocument();
    expect(calendarDay).toHaveTextContent(defaultDate.getDate().toString());
    expect(calendarDayIndicator).toBeNull();
  });

  it("should set date when clicked", () => {
    const onDaySelect = vi.fn();

    setup({ value: { onDaySelect } });

    const calendarDay = screen.getByRole("button");

    act(() => {
      fireEvent.click(calendarDay);
    });

    expect(onDaySelect).toHaveBeenCalledWith(defaultDate);
  });

  it("should have today styles if it is today and not selected", () => {
    vi.setSystemTime(defaultDate);

    setup({ value: { currentDate: new Date("2025-01-19T00:00:00Z") } });

    const calendarDay = screen.getByRole("button");

    expect(calendarDay).toHaveClass(
      "bg-highlight-gradient hover:bg-highlight-gradient-hover"
    );
  });

  it("should have selected styles if it is today and is selected", () => {
    vi.setSystemTime(defaultDate);

    setup();

    const calendarDay = screen.getByRole("button");

    expect(calendarDay).toHaveClass("bg-white text-blue-500");
  });

  it("should not have selected or today styles if it is not today and not selected", () => {
    vi.setSystemTime(defaultDate);

    setup({
      day: new Date("2025-01-29T00:00:00Z"),
      value: { currentDate: new Date("2025-01-19T00:00:00Z") },
    });

    const calendarDay = screen.getByRole("button");

    expect(calendarDay).not.toHaveClass("bg-white text-blue-500");
    expect(calendarDay).not.toHaveClass(
      "bg-highlight-gradient hover:bg-highlight-gradient-hover"
    );
  });

  it("should not have reminders indicator", () => {
    mockUseCheckForReminders();

    setup();

    const calendarDayIndicator = screen.queryByTestId(
      calendarDayIndicatorTestId
    );

    expect(calendarDayIndicator).toBeNull();
  });

  it("should have reminders indicator", () => {
    mockUseCheckForReminders(true);

    setup();

    const calendarDayIndicator = screen.getByTestId(calendarDayIndicatorTestId);

    expect(calendarDayIndicator).toBeInTheDocument();
  });
});

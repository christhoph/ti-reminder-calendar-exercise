import { describe, it, expect } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";

import { CalendarActions } from "./CalendarActions";

import type { CalendarContextState } from "../Calendar.provider";
import { CalendarProviderMock } from "../tests/CalendarProviderMock";

const calendarActionsTestId = "calendar-actions";

type SetUpProps = {
  value?: Partial<CalendarContextState>;
};
const setup = ({ value }: Partial<SetUpProps> = {}) =>
  render(
    <CalendarProviderMock value={value}>
      <CalendarActions />
    </CalendarProviderMock>
  );

describe("CalendarActions", () => {
  it("should be rendered successfully", () => {
    setup();

    const calendarActions = screen.getByTestId(calendarActionsTestId);
    const calendarActionsButtons = screen.getAllByRole("button");

    expect(calendarActions).toBeInTheDocument();
    expect(calendarActionsButtons).toHaveLength(3);
  });

  it("should go to the previous month when clicked", () => {
    const onSetPrevMonth = vi.fn();

    setup({ value: { onSetPrevMonth } });

    const calendarActionsButtons = screen.getAllByRole("button");

    act(() => {
      fireEvent.click(calendarActionsButtons[0]);
    });

    expect(onSetPrevMonth).toHaveBeenCalledOnce();
  });

  it("should go to the next month when clicked", () => {
    const onSetNextMonth = vi.fn();

    setup({ value: { onSetNextMonth } });

    const calendarActionsButtons = screen.getAllByRole("button");

    act(() => {
      fireEvent.click(calendarActionsButtons[2]);
    });

    expect(onSetNextMonth).toHaveBeenCalledOnce();
  });

  it("should go to today when clicked", () => {
    const onSetTodayDate = vi.fn();

    setup({ value: { onSetTodayDate } });

    const calendarActionsButtons = screen.getAllByRole("button");

    act(() => {
      fireEvent.click(calendarActionsButtons[1]);
    });

    expect(onSetTodayDate).toHaveBeenCalledOnce();
  });
});

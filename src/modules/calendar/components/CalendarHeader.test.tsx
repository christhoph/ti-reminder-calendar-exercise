import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { CalendarHeader } from "./CalendarHeader";

import { MONTHS } from "../Calendar.constants";
import type { CalendarContextState } from "../Calendar.provider";
import { CalendarProviderMock } from "../tests/CalendarProviderMock";

const calendarHeaderTestId = "calendar-header";
const defaultDate = new Date("2025-01-09T00:00:00Z");

type SetUpProps = {
  value?: Partial<CalendarContextState>;
};
const setup = ({ value }: Partial<SetUpProps> = {}) =>
  render(
    <CalendarProviderMock value={value}>
      <CalendarHeader />
    </CalendarProviderMock>
  );

describe("CalendarHeader", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be rendered successfully", () => {
    vi.setSystemTime(defaultDate);

    setup();

    const calendarHeader = screen.getByTestId(calendarHeaderTestId);
    const calendarHeaderYear = screen.getByText(defaultDate.getFullYear());
    const calendarHeaderMonth = screen.getByText(
      MONTHS[defaultDate.getMonth()]
    );

    expect(calendarHeader).toBeInTheDocument();
    expect(calendarHeaderYear).toBeInTheDocument();
    expect(calendarHeaderMonth).toBeInTheDocument();
  });
});

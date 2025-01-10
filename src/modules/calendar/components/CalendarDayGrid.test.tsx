import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

import { CalendarDayGrid } from "./CalendarDayGrid";

import type { CalendarContextState } from "../Calendar.provider";
import { CalendarProviderMock } from "../tests/CalendarProviderMock";

const calendarDayGridTestId = "calendar-day-grid";
const defaultDate = new Date("2025-01-09T00:00:00Z");

type SetUpProps = {
  value?: Partial<CalendarContextState>;
};
const setup = ({ value }: Partial<SetUpProps> = {}) =>
  render(
    <ReactQueryProvider>
      <CalendarProviderMock value={value}>
        <CalendarDayGrid />
      </CalendarProviderMock>
    </ReactQueryProvider>
  );

describe("CalendarDayGrid", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be rendered successfully", () => {
    vi.setSystemTime(defaultDate);

    setup();

    const calendarDayGrid = screen.getByTestId(calendarDayGridTestId);
    const calendarDayGridItems = screen.getAllByTestId(
      `${calendarDayGridTestId}-item`
    );
    const calendarDayGridEmpty = screen.getAllByTestId(
      `${calendarDayGridTestId}-empty`
    );

    expect(calendarDayGrid).toBeInTheDocument();
    expect(calendarDayGridItems).toHaveLength(31);
    expect(calendarDayGridEmpty).toHaveLength(4);
  });

  it("should render february 2030 calendar", () => {
    vi.setSystemTime(new Date("2030-02-09T00:00:00Z"));

    setup();

    const calendarDayGrid = screen.getByTestId(calendarDayGridTestId);
    const calendarDayGridItems = screen.getAllByTestId(
      `${calendarDayGridTestId}-item`
    );
    const calendarDayGridEmpty = screen.getAllByTestId(
      `${calendarDayGridTestId}-empty`
    );

    expect(calendarDayGrid).toBeInTheDocument();
    expect(calendarDayGridItems).toHaveLength(28);
    expect(calendarDayGridEmpty).toHaveLength(7);
  });
});

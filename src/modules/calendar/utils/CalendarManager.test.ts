import { describe, it, expect } from "vitest";

import { CalendarManager } from "./CalendarManager";

import { MONTHS } from "../Calendar.constants";

const defaultDate = new Date("2025-01-09T00:00:00Z");

const setup = (date: Date = defaultDate) => new CalendarManager(date);

describe("CalendarHeader", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(defaultDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return the name of the month", () => {
    const calendar = setup();

    expect(calendar.getMonthName()).toEqual(MONTHS[defaultDate.getMonth()]);
  });

  it("should return the current year", () => {
    const calendar = setup();

    expect(calendar.getYear()).toEqual(defaultDate.getFullYear());
  });

  it("should return the days of the month list", () => {
    const calendar = setup();

    const daysOfTheMonth = calendar.getDaysOfTheMonth();

    expect(daysOfTheMonth).toHaveLength(35);
    expect(daysOfTheMonth.filter(Boolean)).toHaveLength(31);
    expect(daysOfTheMonth.filter((item) => !item)).toHaveLength(4);
  });
});

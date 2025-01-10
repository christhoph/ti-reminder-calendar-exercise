import { MONTHS } from "../Calendar.constants";
import { DateNullish } from "../Calendar.types";

export class CalendarManager {
  private now: Date;

  constructor(initialDate?: Date) {
    this.now = initialDate || new Date();
  }

  public getMonthName(): string {
    return MONTHS[this.now.getMonth()];
  }

  public getYear(): number {
    return this.now.getFullYear();
  }

  public getDaysOfTheMonth(): DateNullish[] {
    const days: DateNullish[] = [];
    const month = this.now.getMonth();
    const year = this.now.getFullYear();
    const LAST_DAY_NUMBER = 6;

    const firstDayOfTheMonth = new Date(year, month, 1);
    const lastDayOfTheMonth = new Date(year, month + 1, 0);

    const firstDayOfTheWeek = firstDayOfTheMonth.getDay();
    const lastDayOfTheWeek = lastDayOfTheMonth.getDay();

    for (let i = 0; i < firstDayOfTheWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDayOfTheMonth.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    for (let i = 0; i < LAST_DAY_NUMBER - lastDayOfTheWeek; i++) {
      days.push(null);
    }

    return days;
  }
}

import { nanoid } from "nanoid";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { RemindersList } from "./RemindersList";

import { Reminder } from "../../Reminders.types";
import { RemindersContextState } from "../../Reminders.provider";
import { RemindersProviderMock } from "../../tests/RemindersProviderMock";

const noRemindersTestId = "no-reminders";
const remindersListItemTestId = "reminders-list-item";

const mockReminder: Reminder = {
  id: nanoid(),
  time: "15:30",
  color: "#C8E6C9",
  date: "01/09/2025",
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor set amet.",
};

type SetUpProps = {
  reminders: Reminder[];
  value?: Partial<RemindersContextState>;
};
const setup = ({ reminders = [], value }: Partial<SetUpProps> = {}) =>
  render(
    <RemindersProviderMock value={value}>
      <RemindersList reminders={reminders} />
    </RemindersProviderMock>
  );

describe("RemindersList", () => {
  it("should be rendered successfully", () => {
    setup({ reminders: [mockReminder] });

    const noReminders = screen.queryByTestId(noRemindersTestId);
    const remindersListItem = screen.getByTestId(remindersListItemTestId);

    expect(noReminders).toBeNull();
    expect(remindersListItem).toBeInTheDocument();
  });

  it("should render the no reminders component", () => {
    setup();

    const noReminders = screen.getByTestId(noRemindersTestId);
    const remindersListItem = screen.queryByTestId(remindersListItemTestId);

    expect(noReminders).toBeInTheDocument();
    expect(remindersListItem).toBeNull();
  });
});

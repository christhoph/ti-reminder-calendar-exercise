import { nanoid } from "nanoid";
import { describe, it, expect } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";

import { EditReminderButton } from "./EditReminderButton";

import { Reminder } from "../../Reminders.types";
import { RemindersContextState } from "../../Reminders.provider";
import { RemindersProviderMock } from "../../tests/RemindersProviderMock";

const mockReminder: Reminder = {
  id: nanoid(),
  time: "15:30",
  color: "#C8E6C9",
  date: "01/09/2025",
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor set amet.",
};

type SetUpProps = {
  reminder: Reminder;
  value?: Partial<RemindersContextState>;
};
const setup = ({ reminder = mockReminder, value }: Partial<SetUpProps> = {}) =>
  render(
    <RemindersProviderMock value={value}>
      <EditReminderButton reminder={reminder} />
    </RemindersProviderMock>
  );

describe("EditReminderButton", () => {
  it("should be rendered successfully", () => {
    setup();

    const addReminderButton = screen.getByRole("button");

    expect(addReminderButton).toBeInTheDocument();
  });

  it("should call onSetReminderToUpdate when clicked", () => {
    const onSetReminderToUpdate = vi.fn();

    setup({ value: { onSetReminderToUpdate } });

    const addReminderButton = screen.getByRole("button");

    act(() => {
      fireEvent.click(addReminderButton);
    });

    expect(onSetReminderToUpdate).toHaveBeenCalledOnce();
    expect(onSetReminderToUpdate).toHaveBeenCalledWith(mockReminder);
  });

  it("should call onUpdateReminderStep when clicked", () => {
    const onUpdateReminderStep = vi.fn();

    setup({ value: { onUpdateReminderStep } });

    const addReminderButton = screen.getByRole("button");

    act(() => {
      fireEvent.click(addReminderButton);
    });

    expect(onUpdateReminderStep).toHaveBeenCalledOnce();
  });
});

import { describe, it, expect } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";

import { AddReminderButton } from "./AddReminderButton";

import { RemindersContextState } from "../../Reminders.provider";
import { RemindersProviderMock } from "../../tests/RemindersProviderMock";

type SetUpProps = {
  value?: Partial<RemindersContextState>;
};
const setup = ({ value }: Partial<SetUpProps> = {}) =>
  render(
    <RemindersProviderMock value={value}>
      <AddReminderButton />
    </RemindersProviderMock>
  );

describe("AddReminderButton", () => {
  it("should be rendered successfully", () => {
    setup();

    const addReminderButton = screen.getByRole("button");

    expect(addReminderButton).toBeInTheDocument();
    expect(addReminderButton).toHaveTextContent("Add reminder");
  });

  it("should call onAddReminderStep when clicked", () => {
    const onAddReminderStep = vi.fn();

    setup({ value: { onAddReminderStep } });

    const addReminderButton = screen.getByRole("button");

    act(() => {
      fireEvent.click(addReminderButton);
    });

    expect(onAddReminderStep).toHaveBeenCalledOnce();
  });
});

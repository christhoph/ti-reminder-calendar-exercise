import { nanoid } from "nanoid";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { RemindersListItem } from "./RemindersListItem";

import { Reminder } from "../../Reminders.types";
import { RemindersContextState } from "../../Reminders.provider";
import { RemindersProviderMock } from "../../tests/RemindersProviderMock";

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
  reminder: Reminder;
  value?: Partial<RemindersContextState>;
};
const setup = ({ reminder = mockReminder, value }: Partial<SetUpProps> = {}) =>
  render(
    <RemindersProviderMock value={value}>
      <RemindersListItem reminder={reminder} />
    </RemindersProviderMock>
  );

const hexToRgb = (hex: string) => {
  const hexColor = hex.replace("#", "");
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

describe("RemindersListItem", () => {
  it("should be rendered successfully", () => {
    setup();

    const remindersListItem = screen.getByTestId(remindersListItemTestId);
    const remindersListItemTitle = screen.getByText(mockReminder.title);
    const remindersListItemDescription = screen.getByText(
      mockReminder.description
    );
    const remindersListItemTime = screen.getByText(mockReminder.time);
    const remindersListItemEditButton = screen.getByRole("button");

    expect(remindersListItem).toBeInTheDocument();
    expect(remindersListItemTitle).toBeInTheDocument();
    expect(remindersListItemDescription).toBeInTheDocument();
    expect(remindersListItemTime).toBeInTheDocument();
    expect(remindersListItemEditButton).toBeInTheDocument();
  });

  it("should show the color indicator", () => {
    setup();

    const remindersListItem = screen.getByTestId(
      `${remindersListItemTestId}-color`
    );

    expect(remindersListItem).toBeInTheDocument();
    expect(remindersListItem).toHaveAttribute(
      "style",
      `background-color: ${hexToRgb(mockReminder.color)};`
    );
  });
});

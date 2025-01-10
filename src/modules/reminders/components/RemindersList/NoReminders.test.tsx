import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { NoReminders } from "./NoReminders";

const noRemindersTestId = "no-reminders";

const setup = () => render(<NoReminders />);

describe("NoReminders", () => {
  it("should be rendered successfully", () => {
    setup();

    const noReminders = screen.getByTestId(noRemindersTestId);

    expect(noReminders).toBeInTheDocument();
    expect(noReminders).toHaveTextContent("No reminders registered so far");
  });
});

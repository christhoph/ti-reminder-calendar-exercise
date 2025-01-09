import classNames from "classnames";

import { RemoveReminderButton } from "./RemoveReminderButton";

import { useReminders } from "../../Reminders.provider";

const baseButtonStyle = "px-5 py-3 rounded shadow-xxl text-base text-white";

export const FormActions = () => {
  const { onShowRemindersListStep } = useReminders();

  return (
    <div className="flex items-center justify-between">
      <div>
        <RemoveReminderButton className={baseButtonStyle} />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onShowRemindersListStep}
          className={classNames(baseButtonStyle, "bg-charcoal")}
        >
          Cancel
        </button>

        <button
          type="submit"
          className={classNames(
            baseButtonStyle,
            "bg-deep-blue disabled:opacity-70 disabled:cursor-not-allowed"
          )}
        >
          Save
        </button>
      </div>
    </div>
  );
};

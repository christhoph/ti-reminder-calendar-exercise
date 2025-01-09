import classNames from "classnames";

import { RemindersSteps } from "../../Reminders.types";
import { useReminders } from "../../Reminders.provider";

const baseButtonStyle = "px-5 py-3 rounded shadow-xxl text-base text-white";

export const FormActions = () => {
  const { remindersStep, onShowRemindersList } = useReminders();

  const onReminderRemove = () => {
    onShowRemindersList();
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        {remindersStep === RemindersSteps.UPDATE_REMINDER && (
          <button
            type="button"
            onClick={onReminderRemove}
            className={classNames(baseButtonStyle, "bg-bright-red")}
          >
            Remove
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onShowRemindersList}
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

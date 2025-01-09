import classNames from "classnames";

const baseButtonStyle = "px-5 py-3 rounded shadow-xxl text-base text-white";

// TODO:: implement actions logic
export const FormActions = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <button className={classNames(baseButtonStyle, "bg-bright-red")}>
          Remove
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className={classNames(baseButtonStyle, "bg-charcoal")}>
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

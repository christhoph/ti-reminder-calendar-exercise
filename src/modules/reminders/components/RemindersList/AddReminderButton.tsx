import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";

type AddReminderButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

export const AddReminderButton = ({
  className,
  ...props
}: AddReminderButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-highlight-gradient rounded text-base text-white py-3 px-10",
        className
      )}
    >
      Add reminder
    </button>
  );
};

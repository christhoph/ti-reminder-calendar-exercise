import classNames from "classnames";
import type { UseFormRegister } from "react-hook-form";

import { FormField } from "./FormField/FormField";
import { colorSet } from "./ReminderForm.constants";

import { Reminder } from "../../Reminders.types";

type ColorsFormFieldProps = {
  colorSelected?: string;
  errorMessage?: string;
  register: UseFormRegister<Reminder>;
  onColorSelect: (color: string) => void;
};

export const ColorsFormField = ({
  colorSelected,
  errorMessage,
  register,
  onColorSelect,
}: ColorsFormFieldProps) => {
  return (
    <FormField label="Colors" formId="color" errorMessage={errorMessage}>
      <input
        type="hidden"
        {...register("color", {
          required: "Please select a color from the 'Colors' list.",
        })}
      />

      <div className="w-full grid grid-cols-10 gap-2">
        {colorSet.map((color) => (
          <button
            key={color}
            type="button"
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            className={classNames(
              "aspect-[3.5/3] rounded-md border border-shadow-brown",
              {
                "border-4 !border-[#101277]":
                  !!colorSelected && colorSelected === color,
              }
            )}
          />
        ))}
      </div>
    </FormField>
  );
};

import { format, parse } from "date-fns";
import { IMaskInput } from "react-imask";
import { type Control, Controller } from "react-hook-form";

import { FormField } from "./FormField/FormField";
import { baseFieldStyle, DATE_REGEX } from "./ReminderForm.constants";

import { Reminder } from "../../Reminders.types";

type DateFormFieldProps = {
  errorMessage?: string;
  control: Control<Reminder>;
};

export const DateFormField = ({
  control,
  errorMessage,
}: DateFormFieldProps) => {
  return (
    <FormField label="Date" formId="date" errorMessage={errorMessage}>
      <Controller
        name="date"
        control={control}
        rules={{
          required: "Please fill out the 'Date' field.",
          pattern: {
            value: DATE_REGEX,
            message: "The date format is invalid",
          },
        }}
        render={({ field }) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <IMaskInput
            {...field}
            id="date"
            mask={Date}
            pattern="m{/}`d{/}`Y"
            placeholder="MM/DD/YYYY"
            className={baseFieldStyle}
            format={(date: Date): string => format(date, "MM/dd/yyyy")}
            parse={(value: string): Date =>
              parse(value, "MM/dd/yyyy", new Date())
            }
          />
        )}
      />
    </FormField>
  );
};

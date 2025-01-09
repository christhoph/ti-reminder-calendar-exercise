import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";

import { baseFieldStyle } from "./ReminderForm.constants";
import { FormField } from "./FormField/FormField";
import { ColorsFormField } from "./ColorsFormField";
import { DateFormField } from "./DateFormField";
import { FormActions } from "./FormActions";

import { Reminder } from "../../Reminders.types";

export const ReminderForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<Reminder>();

  const onColorSelect = (color: string) => {
    setValue("color", color);
  };

  const onSubmit: SubmitHandler<Reminder> = (data) => {
    // TODO:: implement submit logic
    console.log(data);
  };

  const colorSelected = watch("color");

  return (
    <form
      className="flex flex-col gap-1.5 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        label="Title"
        formId="title"
        errorMessage={errors.title?.message}
      >
        <input
          id="title"
          maxLength={25}
          placeholder="Title"
          className={baseFieldStyle}
          {...register("title", {
            required: "Please fill out the 'Title' field.",
            maxLength: 25,
          })}
        />
      </FormField>

      <FormField
        label="Description"
        formId="description"
        errorMessage={errors.description?.message}
      >
        <textarea
          id="description"
          rows={2}
          maxLength={70}
          className={classNames("resize-none", baseFieldStyle, "h-auto")}
          placeholder="Description"
          {...register("description", {
            required: "Please fill out the 'Description' field.",
            maxLength: 70,
          })}
        />
      </FormField>

      <div className="w-full grid grid-cols-2 gap-3">
        <DateFormField control={control} errorMessage={errors.date?.message} />

        <FormField
          label="Time"
          formId="time"
          errorMessage={errors.time?.message}
        >
          <input
            id="time"
            type="time"
            className={classNames(baseFieldStyle, "custom-time-input", {
              "custom-time-placeholder": !watch("time"),
            })}
            {...register("time", {
              required: "Please fill out the 'Time' field.",
            })}
          />
        </FormField>
      </div>

      <ColorsFormField
        register={register}
        onColorSelect={onColorSelect}
        colorSelected={colorSelected}
        errorMessage={errors.color?.message}
      />

      <div className="h-px w-full bg-shadow-dark-slate mb-6 mt-5" />

      <FormActions />
    </form>
  );
};

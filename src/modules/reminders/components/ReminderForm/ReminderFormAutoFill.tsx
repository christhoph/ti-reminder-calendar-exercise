import { format } from "date-fns";
import { useCallback, useEffect, useRef } from "react";
import type { UseFormReset, UseFormSetValue } from "react-hook-form";

import { areDatesEqual } from "@/utils";
import { useGetCurrentDateQuery } from "@/state/currentDate";

import { Reminder, RemindersSteps } from "../../Reminders.types";
import { useReminders } from "../../Reminders.provider";

type ReminderFormAutoFillProps = {
  reset: UseFormReset<Reminder>;
  setValue: UseFormSetValue<Reminder>;
};

export const ReminderFormAutoFill = ({
  reset,
  setValue,
}: ReminderFormAutoFillProps) => {
  const updated = useRef(false);
  const prevCurrentDate = useRef<Date | null>(null);
  const { data: currentDate } = useGetCurrentDateQuery();
  const { remindersStep, reminderToUpdate } = useReminders();

  const isSameDate = useCallback(
    () =>
      prevCurrentDate.current &&
      currentDate &&
      areDatesEqual(prevCurrentDate.current, currentDate),
    [currentDate]
  );

  const onUpdatePrevCurrentDate = useCallback(() => {
    if (updated.current && !isSameDate()) {
      if (currentDate) {
        prevCurrentDate.current = currentDate;
      }
    }
  }, [currentDate, isSameDate]);

  const onSyncCalendarDate = useCallback(() => {
    if (currentDate && !isSameDate()) {
      const formattedDate = format(currentDate, "yyyy-MM-dd");

      setValue("date", formattedDate);
    }
  }, [currentDate, isSameDate, setValue]);

  const onResetFormState = useCallback(() => {
    if (reminderToUpdate && remindersStep === RemindersSteps.UPDATE_REMINDER) {
      reset({
        ...reminderToUpdate,
        date: format(reminderToUpdate.date, "yyyy-MM-dd"),
      });

      updated.current = true;
    }
  }, [reminderToUpdate, remindersStep, reset]);

  useEffect(() => {
    onUpdatePrevCurrentDate();

    const timeout = setTimeout(() => {
      onSyncCalendarDate();

      if (!updated.current) {
        onResetFormState();
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [onResetFormState, onUpdatePrevCurrentDate, onSyncCalendarDate]);

  return null;
};

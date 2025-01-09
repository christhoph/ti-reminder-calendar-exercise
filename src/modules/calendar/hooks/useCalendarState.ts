import { useCallback } from "react";

import {
  useGetCurrentDateMutation,
  useGetCurrentDateQuery,
} from "@/state/currentDate";

export const useCalendarState = () => {
  const { mutate } = useGetCurrentDateMutation();
  const { data: currentDate } = useGetCurrentDateQuery();

  const onDaySelect = (date: Date) => {
    mutate(date);
  };

  const onSetNextMonth = useCallback(() => {
    if (currentDate) {
      const nextDate = new Date(currentDate);

      nextDate.setMonth(currentDate.getMonth() + 1);
      nextDate.setDate(1);

      mutate(nextDate);
    }
  }, [currentDate, mutate]);

  const onSetPrevMonth = useCallback(() => {
    if (currentDate) {
      const prevDate = new Date(currentDate);

      prevDate.setMonth(currentDate.getMonth() - 1);
      prevDate.setDate(1);

      mutate(prevDate);
    }
  }, [currentDate, mutate]);

  const onSetTodayDate = () => {
    mutate(new Date());
  };

  return {
    currentDate,
    onDaySelect,
    onSetNextMonth,
    onSetPrevMonth,
    onSetTodayDate,
  };
};

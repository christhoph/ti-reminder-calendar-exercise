import { format } from "date-fns";
import { useCallback } from "react";

import { useGetCurrentDateQuery } from "@/state/currentDate";

export const useGetFormattedDate = () => {
  const { data: currentDate } = useGetCurrentDateQuery();

  const getFormattedDate = useCallback(() => {
    const date = currentDate || new Date();

    return format(date, "eeee, MMMM dd, yyyy");
  }, [currentDate]);

  return getFormattedDate;
};

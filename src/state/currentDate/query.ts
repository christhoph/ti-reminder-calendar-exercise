import { useQuery } from "@tanstack/react-query";

const GET_CURRENT_DATE = "GET_CURRENT_DATE";

export const getCurrentDateKey = () => [GET_CURRENT_DATE];

const getCurrentDate = (): Date => new Date();

export const useGetCurrentDateQuery = () => {
  return useQuery({
    queryFn: getCurrentDate,
    queryKey: getCurrentDateKey(),
  });
};

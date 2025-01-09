import { useMutation, useQueryClient } from "@tanstack/react-query";

import { getCurrentDateKey } from "./query";

export function useGetCurrentDateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (date: Date) => date,
    onSuccess: (data) => {
      queryClient.setQueryData(getCurrentDateKey(), () => data);
    },
  });
}

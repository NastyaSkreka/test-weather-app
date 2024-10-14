import { QUERY_KEYS } from "@/const/app-keys.const";
import { userService } from "@/services/user.service";
import { IUser } from "@/types/user.types";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useInfiniteQuery<IUser[], Error>({
    queryKey: [QUERY_KEYS.USER],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext) =>
      userService.fetchUsers((pageParam as number) || 1),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

import { QUERY_KEYS } from "@/const/app-keys.const";
import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => userService.fetchUsers(),
  });
};

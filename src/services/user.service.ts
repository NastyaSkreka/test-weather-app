import axios from "axios";
import { IUserResponse } from "@/types/user.types";

class UserService {
  private BASE_URL = "https://randomuser.me/api/";

  async fetchUsers(page: number) {
    const response = await axios.get<IUserResponse>(`${this.BASE_URL}?results=10&page=${page}`);
    return response.data.results;
  }
}

export const userService = new UserService();

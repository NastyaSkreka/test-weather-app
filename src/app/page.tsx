"use client";

import UserList from "@/components/UserList";
import { useUsers } from "@/hooks/use-user";
import { useWeatherModal } from "@/hooks/use-weather-modal";
import { IUserBasicInfo } from "@/types/user.types";

export default function Home() {
  const { handleWeather, WeatherComponent } = useWeatherModal();
  const { data: users } = useUsers();

  const handleSave = (user: IUserBasicInfo) => {
    const savedUsersJson = localStorage.getItem("savedUsers");
    const savedUsers = savedUsersJson ? JSON.parse(savedUsersJson) : [];
    savedUsers.push(user);
    localStorage.setItem("savedUsers", JSON.stringify(savedUsers));
  };

  return (
    <div className="container mx-auto p-4">
      {users && (
        <UserList
          users={users}
          onSave={handleSave}
          onWeather={handleWeather}
          showSaveButton
        />
      )}
      <WeatherComponent />
    </div>
  );
}

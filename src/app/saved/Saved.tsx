"use client";

import UserList from "@/components/UserList";
import { useWeatherModal } from "@/hooks/use-weather-modal";
import { IUser } from "@/types/user.types";
import { useEffect, useState } from "react";

export default function Saved() {
  const { handleWeather, WeatherComponent } = useWeatherModal();
  const [savedUsers, setSavedUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const usersFromStorage = JSON.parse(
      localStorage.getItem("savedUsers") || "[]"
    );
    setSavedUsers(usersFromStorage);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mt-4">Saved Users</h2>
      {savedUsers.length > 0 &&
        savedUsers.map((user: IUser) => (
          <UserList user={user}  key={user.login.uuid} onWeather={handleWeather} showSaveButton />
        ))}
      <WeatherComponent />
    </div>
  );
}

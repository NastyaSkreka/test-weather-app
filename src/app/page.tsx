"use client";

import { useRouter } from 'next/navigation'; 
import Button from "@/components/ui/Button";
import UserList from "@/components/UserList";
import { useUsers } from "@/hooks/use-user";
import { useWeatherModal } from "@/hooks/use-weather-modal";
import { IUser, IUserBasicInfo } from "@/types/user.types";
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();
    const [savedUsersCount, setSavedUsersCount] = useState(0);

  const { handleWeather, WeatherComponent } = useWeatherModal();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useUsers();


  const handleSave = (user: IUserBasicInfo) => {
    const savedUsersJson = localStorage.getItem("savedUsers");
    const savedUsers = savedUsersJson ? JSON.parse(savedUsersJson) : [];
    savedUsers.push(user);
    localStorage.setItem("savedUsers", JSON.stringify(savedUsers));
    updateSavedUsersCount();
  };

  const updateSavedUsersCount = () => {
    const savedUsersJson = localStorage.getItem("savedUsers");
    const savedUsers = savedUsersJson ? JSON.parse(savedUsersJson) : [];
    setSavedUsersCount(savedUsers.length);
  };

  useEffect(() => {
    updateSavedUsersCount();
  }, []);

  const handleNavigateToSavedUsers = () => {
    router.push('/saved'); 
  };

  return (
    <div className="container mx-auto p-4">
         <Button
          label="Saved Users"
          onClick={handleNavigateToSavedUsers}
          disabled={savedUsersCount === 0}
          type="default"
        />
      {data?.pages.map((page, pageIndex) => (
        <div className="flex flex-wrap gap-5"  key={pageIndex}>
          {page.map((user: IUser) => (
            <UserList
              key={user.login.uuid}
              user={user}
              onSave={handleSave}
              onWeather={handleWeather}
              showSaveButton
            />
          ))}
        </div>
      ))}

      <WeatherComponent />

      <Button
        label={isFetchingNextPage ? "Loading more..." : "Load more"}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        type="load"
      />
    </div>
  );
}

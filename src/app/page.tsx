"use client";
import UserCard from "@/components/UserCard";
import WeatherModal from "@/components/WeatherModal";
import { useUsers } from "@/hooks/use-user";
import { useWeather } from "@/hooks/use-weather";
import { IUserBasicInfo } from "@/types/user.types";
import { useState } from "react";

export default function Home() {
  const [lat, setLat] = useState<string | null>(null);
  const [lon, setLon] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: users } = useUsers();
  const { data: weather } = useWeather(lat, lon);

  const handleSave = (user: IUserBasicInfo) => {};

  const handleWeather = (user: IUserBasicInfo) => {
    setLat(user.location.coordinates.latitude);
    setLon(user.location.coordinates.longitude);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      {users &&
        users.map((user) => (
          <UserCard
            key={user.login.uuid}
            name={user.name}
            gender={user.gender}
            email={user.email}
            location={user.location}
            picture={user.picture}
            onSave={() => handleSave(user)}
            onWeather={() => handleWeather(user)}
          />
        ))}

      <WeatherModal
        open={modalOpen}
        onClose={handleCloseModal}
        weather={weather!}
      />
    </div>
  );
}

"use client";
import UserCard from "@/components/UserCard";
import { useUsers } from "@/hooks/use-user";
import { IUserBasicInfo } from "@/types/user.types";

export default function Home() {
  const { data: users } = useUsers();

  const handleSave = (user: IUserBasicInfo) => {};

  const handleWeather = (user: IUserBasicInfo) => {};

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
    </div>
  );
}

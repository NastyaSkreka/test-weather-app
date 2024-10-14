import React from "react";
import UserCard from "./UserCard";
import { IUser, IUserBasicInfo } from "@/types/user.types";

interface UserListProps {
  users: IUser[];
  onSave?: (user: IUserBasicInfo) => void;
  onWeather: (user: IUserBasicInfo) => void;
  showSaveButton?: boolean;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onSave,
  onWeather,
  showSaveButton = true,
}) => {
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.login.uuid}
          name={user.name}
          gender={user.gender}
          email={user.email}
          location={user.location}
          picture={user.picture}
          onSave={showSaveButton && onSave ? () => onSave(user) : undefined}
          onWeather={() => onWeather(user)}
        />
      ))}
    </>
  );
};

export default UserList;

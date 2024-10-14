import React from "react";
import Button from "./ui/Button";
import { IUserBasicInfo } from "@/types/user.types";

interface UserCardProps extends IUserBasicInfo {
  onSave?: () => void;
  onWeather: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  gender,
  email,
  location,
  picture,
  onSave,
  onWeather,
}) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg p-6 bg-white mb-3 mt-2">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={picture.medium}
        alt={`${name}'s profile`}
      />
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{name.first}</h3>
        <p className="text-gray-600">{gender}</p>
        <p className="text-gray-600">
          {location.city}, {location.country}
        </p>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="flex justify-between mt-4">
        {onSave && <Button label="Save" onClick={onSave} />}
        <Button label="Weather" onClick={onWeather} />
      </div>
    </div>
  );
};

export default UserCard;

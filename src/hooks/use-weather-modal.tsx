import { useState } from 'react';
import { useWeather } from './use-weather';
import { IUserBasicInfo } from '@/types/user.types';
import WeatherModal from '@/components/WeatherModal';


export const useWeatherModal = () => {
  const [lat, setLat] = useState<string | null>(null);
  const [lon, setLon] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { data: weather } = useWeather(lat, lon);

  const handleWeather = (user: IUserBasicInfo) => {
    setLat(user.location.coordinates.latitude);
    setLon(user.location.coordinates.longitude);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const WeatherComponent = () => (
    <WeatherModal open={modalOpen} onClose={handleCloseModal} weather={weather!} />
  );

  return { handleWeather, WeatherComponent };
};

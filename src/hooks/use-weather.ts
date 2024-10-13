import { QUERY_KEYS } from '@/const/app-keys.const';
import { weatherService } from '@/services/weather.service';
import { useQuery } from '@tanstack/react-query';

export const useWeather = (lat: string | null, lon: string | null) => {
    return useQuery({
      queryKey: [QUERY_KEYS.WEATHER, lat, lon],
      queryFn: () => (lat && lon ? weatherService.fetchWeather(lat, lon) : Promise.resolve(null)),
      enabled: !!lat && !!lon,
    });
  };
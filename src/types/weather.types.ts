export interface ICurrentWeather {
  temperature: number; 
  windspeed: number;
  winddirection: number; 
  is_day: number; 
  weathercode: number; 
  time: string; 
}

export interface IWeatherResponse {
  current_weather: ICurrentWeather;
  current_weather_units: {
    temperature: string;
    windspeed: string;
    winddirection: string;
    time: string;
    is_day: string;
    weathercode: string;
  };
  interval: number;
}

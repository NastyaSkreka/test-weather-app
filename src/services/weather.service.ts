import { ICurrentWeather, IWeatherResponse } from "@/types/weather.types";
import axios from "axios";

class WeatherService {
  private BASE_URL = "https://api.open-meteo.com/v1/forecast?";

  async fetchWeather(lat: string, lon: string): Promise<ICurrentWeather> {
    const response = await axios.get<IWeatherResponse>(
      `${this.BASE_URL}latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    return response.data.current_weather;
  }
}

export const weatherService = new WeatherService();

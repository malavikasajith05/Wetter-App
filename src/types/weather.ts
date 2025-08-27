export interface WeatherData {
  current: {
    temperature: number;
    weathercode: number;
    windspeed: number;
    winddirection: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
}

export interface LocationData {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}
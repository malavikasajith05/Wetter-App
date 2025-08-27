
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

export const fetchWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  const data = await response.json();
  
  return {
    current: {
      temperature: Math.round(data.current.temperature_2m),
      weathercode: data.current.weathercode,
      windspeed: data.current.windspeed_10m,
      winddirection: data.current.winddirection_10m
    },
    hourly: {
      time: data.hourly.time,
      temperature_2m: data.hourly.temperature_2m,
      weathercode: data.hourly.weathercode
    },
    daily: {
      time: data.daily.time,
      temperature_2m_max: data.daily.temperature_2m_max,
      temperature_2m_min: data.daily.temperature_2m_min,
      weathercode: data.daily.weathercode
    }
  };
};

export const searchLocation = async (query: string): Promise<LocationData | null> => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
  );
  
  if (!response.ok) {
    throw new Error('Failed to search location');
  }
  
  const data = await response.json();
  
  if (data.results && data.results.length > 0) {
    const result = data.results[0];
    return {
      name: result.name,
      latitude: result.latitude,
      longitude: result.longitude,
      country: result.country_code
    };
  }
  
  return null;
};
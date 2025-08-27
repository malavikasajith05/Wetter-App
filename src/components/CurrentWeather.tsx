import React from 'react';
import { Wind } from 'lucide-react';
import type { WeatherData, LocationData } from '../services/weatherAPI';
import { getWeatherIcon, getWeatherDescription } from '../utils/weatherUtils';

interface CurrentWeatherProps {
  weather: WeatherData;
  location: LocationData;
  currentTime: Date;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather, location, currentTime }) => {
  const WeatherIcon = getWeatherIcon(weather.current.weathercode);

  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white text-lg font-medium">{location.name}</h2>
          <p className="text-gray-300 text-sm">
            {currentTime.toLocaleTimeString('de-DE', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
          <p className="text-gray-400 text-xs">
            {currentTime.toLocaleDateString('de-DE', { 
              weekday: 'long',
              day: 'numeric',
              month: 'long'
            })}
          </p>
        </div>
        <div className="text-right">
          <div className="text-white text-4xl font-light mb-2">
            {weather.current.temperature}°C
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <WeatherIcon size={32} className="text-yellow-400" />
          <span className="text-white font-medium">
            {getWeatherDescription(weather.current.weathercode)}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Wind size={16} />
          <span className="text-sm">{Math.round(weather.current.windspeed)} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
import React from 'react';
import type { WeatherData } from '../services/weatherAPI';
import { getWeatherIcon } from '../utils/weatherUtils';

interface HourlyForecastProps {
  weather: WeatherData;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ weather }) => {
  return (
    <div className="mt-6 bg-gray-800 bg-opacity-80 rounded-2xl p-6">
      <h3 className="text-white text-lg font-medium mb-4">Hourly Forecast:</h3>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {weather.hourly.time.slice(0, 24).map((time, index) => {
          const hour = new Date(time);
          const isCurrentHour = hour.getHours() === new Date().getHours();
          const WeatherIcon = getWeatherIcon(weather.hourly.weathercode[index]);
          
          return (
            <div
              key={time}
              className={`flex flex-col items-center space-y-2 min-w-16 p-3 rounded-xl transition-all ${
                isCurrentHour 
                  ? 'bg-blue-600 bg-opacity-50' 
                  : 'hover:bg-gray-700 bg-opacity-30'
              }`}
            >
              <span className="text-white text-sm font-medium">
                {hour.toLocaleTimeString('de-DE', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
              <WeatherIcon size={20} className="text-yellow-400" />
              <span className="text-white text-sm">
                {Math.round(weather.hourly.temperature_2m[index])}°
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
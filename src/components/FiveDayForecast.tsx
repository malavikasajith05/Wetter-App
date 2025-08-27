import React from 'react';
import type{ WeatherData } from '../services/weatherAPI';
import { getWeatherIcon, getDayName, getShortDayName } from '../utils/weatherUtils';

interface FiveDayForecastProps {
  weather: WeatherData;
}

const FiveDayForecast: React.FC<FiveDayForecastProps> = ({ weather }) => {
  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-2xl p-6">
      <h3 className="text-white text-lg font-medium mb-4">5 Days Forecast:</h3>
      <div className="space-y-3">
        {weather.daily.time.slice(0, 5).map((date, index) => {
          const WeatherIcon = getWeatherIcon(weather.daily.weathercode[index]);
          
          return (
            <div key={date} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <span className="text-white text-sm w-12">
                  {index === 0 ? 'Today' : getShortDayName(date)}
                </span>
                <WeatherIcon size={20} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  {getDayName(date)}
                </span>
              </div>
              <div className="text-white text-sm">
                <span className="font-medium">
                  {Math.round(weather.daily.temperature_2m_max[index])}°
                </span>
                <span className="text-gray-400 ml-2">
                  {Math.round(weather.daily.temperature_2m_min[index])}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
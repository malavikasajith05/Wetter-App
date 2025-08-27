import React, { useState, useEffect } from 'react';
import type { WeatherData, LocationData } from '../services/weatherAPI';
import { fetchWeatherData, searchLocation } from '../services/weatherAPI';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import FiveDayForecast from './FiveDayForecast';
import HourlyForecast from './HourlyForecast';
import LoadingSpinner from './LoadingSpinner';

const WeatherApp: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<LocationData>({ 
    name: 'Ulm', 
    latitude: 48.4011, 
    longitude: 9.9876,
    country: 'DE'
  });
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    loadWeatherData();
  }, [location]);

  const loadWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(location.latitude, location.longitude);
      setWeather(data);
    } catch (err) {
      setError('Failed to load weather data. Please try again.');
      console.error('Error fetching weather:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const locationData = await searchLocation(query);
      
      if (locationData) {
        setLocation(locationData);
      } else {
        setError('Location not found. Please try a different search.');
      }
    } catch (err) {
      setError('Failed to search location. Please try again.');
      console.error('Error searching location:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !weather) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold mb-6">Wie ist das Wetter heute?</h1>
          <SearchBar onSearch={handleSearch} loading={loading} />
          
          {error && (
            <div className="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}
        </div>

        {weather && (
          <div className="bg-black bg-opacity-30 rounded-3xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CurrentWeather 
                weather={weather} 
                location={location} 
                currentTime={currentTime} 
              />
              <FiveDayForecast weather={weather} />
            </div>
            <HourlyForecast weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
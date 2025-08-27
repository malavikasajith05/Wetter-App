# Wetter-App
Modern weather app built with React, TypeScript, and Tailwind CSS
# Weather App 🌤️

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get current weather conditions, 5-day forecasts, and hourly predictions for any location worldwide.

## 🚀 Live Demo

[View Live App](https://yourusername.github.io/weather-app/) *(Replace with your actual GitHub username)*

## ✨ Features

- **Current Weather**: Real-time temperature, weather conditions, and wind speed
- **5-Day Forecast**: Daily high/low temperatures with weather icons
- **Hourly Forecast**: 24-hour temperature and weather predictions
- **Location Search**: Search for weather in any city worldwide
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Clock**: Live updating time display
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **API**: Open-Meteo Weather API (free, no API key required)
- **Deployment**: GitHub Pages

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   

2. Install dependencies:
   
   npm install
   

3. Start the development server:
   
   npm run dev
   

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
weather-app/
├── src/
│   ├── components/          # React components
│   │   ├── WeatherApp.tsx   # Main app component
│   │   ├── CurrentWeather.tsx
│   │   ├── FiveDayForecast.tsx
│   │   ├── HourlyForecast.tsx
│   │   ├── SearchBar.tsx
│   │   └── LoadingSpinner.tsx
│   ├── services/            # API services
│   │   └── weatherAPI.ts    # Weather data fetching
│   ├── utils/               # Utility functions
│   │   └── weatherUtils.ts  # Weather-related helpers
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
└── dist/                    # Production build
```

## 🎨 Key Components

- **WeatherApp**: Main container component managing state and API calls
- **CurrentWeather**: Displays current weather conditions and location info
- **FiveDayForecast**: Shows 5-day weather forecast with daily highs/lows
- **HourlyForecast**: 24-hour scrollable weather timeline
- **SearchBar**: Location search functionality with autocomplete

## 🌐 API Integration

This app uses the [Open-Meteo API](https://open-meteo.com/), which provides:
- Current weather conditions
- Hourly forecasts for 7 days
- Daily forecasts for 16 days
- No API key required
- Free tier with generous rate limits





---

⭐ If you found this project helpful, please give it a star on GitHub!

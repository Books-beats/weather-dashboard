"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import RecentSearches from "./components/RecentSearches";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { getWeatherData, getForecastData } from "./services/weatherService";
import { PageWrapper } from "./styles/components/common.styles";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import { WeatherResponse, ForecastResponse } from "./types/weather";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<any[]>([]);
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const handleSearch = async (location: any) => {
    setShowSuggestions(false);
    setLoading(true);
    setError(null);

    try {
      const weatherData = await getWeatherData(location);

      const forecastData = await getForecastData(location);

      setCurrentWeather(weatherData);
      setForecast(forecastData);

      const updated = [
        location,
        ...recentSearches.filter((s) => s.name !== location.name),
      ];

      setRecentSearches(updated);
      localStorage.setItem("recentSearches", JSON.stringify(updated));
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper $darkMode={darkMode}>
      <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Search
          darkMode={darkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />

        {recentSearches.length > 0 && !currentWeather && (
          <RecentSearches
            darkMode={darkMode}
            handleSearch={handleSearch}
            recentSearches={recentSearches}
          />
        )}

        {loading && <Loader />}

        {error && <Error error={error} darkMode={darkMode} />}

        {currentWeather && !loading && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <WeatherCard darkMode={darkMode} currentWeather={currentWeather} />
            <ForecastCard darkMode={darkMode} forecast={forecast} />
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Page;

"use client";
import { useState, useEffect } from "react";
import { FiMoon, FiSun, FiMapPin, FiEye } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { BsCloudRain, BsCloudSnow } from "react-icons/bs";
import { AiOutlineThunderbolt, AiOutlineSun } from "react-icons/ai";
import { RiDrizzleLine } from "react-icons/ri";
import { CiCloud, CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { FaGaugeSimple } from "react-icons/fa6";
import axios from "axios";

export interface WeatherResponse {
  location: WeatherLocation;
  current: CurrentWeather;
}

export interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;

  // Optional fields (not always present)
  short_rad?: number;
  diff_rad?: number;
  dni?: number;
  gti?: number;
}

export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface ForecastResponse {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayInfo;
  astro: AstroInfo;
  hour: HourInfo[];
}

export interface DayInfo {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface AstroInfo {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

export interface HourInfo {
  time_epoch: number;
  time: string;

  temp_c: number;
  temp_f: number;

  is_day: number;

  condition: Condition;

  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;

  pressure_mb: number;
  pressure_in: number;

  precip_mm: number;
  precip_in: number;

  snow_cm: number;

  humidity: number;
  cloud: number;

  feelslike_c: number;
  feelslike_f: number;

  windchill_c: number;
  windchill_f: number;

  heatindex_c: number;
  heatindex_f: number;

  dewpoint_c: number;
  dewpoint_f: number;

  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;

  vis_km: number;
  vis_miles: number;

  gust_mph: number;
  gust_kph: number;

  uv: number;

  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState<any[]>([]);
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
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

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const getWeatherIcon = (condition: string) => {
    const code = condition?.toLowerCase() || "";
    if (code.includes("rain")) return <BsCloudRain size={26} />;
    if (code.includes("snow")) return <BsCloudSnow size={26} />;
    if (code.includes("drizzle")) return <RiDrizzleLine size={26} />;
    if (code.includes("thunder")) return <AiOutlineThunderbolt size={26} />;
    if (code.includes("partlycloudy")) return <CiCloud size={26} />;
    return <AiOutlineSun size={46} />;
  };

  const handleInputChange = async (e: any) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 2) {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
        const params = {
          q: searchQuery,
        };
        const res = await axios.get(`${baseUrl}/api/locations/autocomplete`, {
          params,
        });
        setSuggestions(res.data);
        setShowSuggestions(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearch = async (location: any) => {
    setShowSuggestions(false);
    setLoading(true);
    setError(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
      const params = {
        q: location.name,
      };

      const weather = await axios.get(`${baseUrl}/api/weather/current`, {
        params,
      });

      const forecastParams = {
        q: location.name,
        days: 5,
      };

      const forecastResult = await axios.get(
        `${baseUrl}/api/weather/forecast`,
        { params: forecastParams }
      );

      setCurrentWeather(weather.data);
      setForecast(forecastResult.data.forecast);

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

  // Helper to get day name from date
  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        transition: "background-color 300ms",
        padding: "2rem",
        background: darkMode
          ? "linear-gradient(to bottom right, #111827, #1f2937)"
          : "linear-gradient(to bottom right, #eff6ff, #dbeafe)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        {/* Header with Dark Mode Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1
              style={{
                fontSize: "1.875rem",
                fontWeight: 300,
                marginBottom: "0.5rem",
                color: darkMode ? "white" : "#1f2937",
                margin: "0 0 0.5rem 0",
              }}
            >
              Weather
            </h1>
            <p
              style={{
                fontSize: "0.875rem",
                color: darkMode ? "#9ca3af" : "#4b5563",
                margin: 0,
              }}
            >
              Search for a city to view current conditions
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            style={{
              padding: "0.75rem",
              borderRadius: "9999px",
              transition: "background-color 300ms",
              backgroundColor: darkMode ? "#374151" : "white",
              color: darkMode ? "#facc15" : "#374151",
              border: "none",
              cursor: "pointer",
              boxShadow: darkMode ? "none" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ position: "relative", marginBottom: "2rem" }}>
          <div style={{ position: "relative" }}>
            <IoIosSearch
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1.25rem",
                height: "1.25rem",
                color: darkMode ? "#6b7280" : "#9ca3af",
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for a location..."
              style={{
                width: "100%",
                paddingLeft: "3rem",
                paddingRight: "1rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
                outline: "none",
                backgroundColor: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "#1f2937",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Autocomplete Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                zIndex: 10,
                width: "100%",
                marginTop: "0.5rem",
                borderRadius: "0.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
                overflow: "hidden",
                backgroundColor: darkMode ? "#1f2937" : "white",
              }}
            >
              {suggestions.map((sug: any) => (
                <button
                  key={sug.id}
                  onClick={() => {
                    setSearchQuery(sug.name);
                    handleSearch(sug);
                  }}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    textAlign: "left",
                    transition: "background-color 300ms",
                    border: "none",
                    borderBottom: darkMode
                      ? "1px solid #374151"
                      : "1px solid #f3f4f6",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FiMapPin
                    style={{
                      width: "1rem",
                      height: "1rem",
                      color: darkMode ? "#6b7280" : "#9ca3af",
                    }}
                  />
                  <span style={{ color: darkMode ? "#e5e7eb" : "#1f2937" }}>
                    {sug.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && !currentWeather && (
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "0.875rem",
                marginBottom: "0.75rem",
                color: darkMode ? "#9ca3af" : "#4b5563",
                margin: "0 0 0.75rem 0",
              }}
            >
              Recent Searches
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {recentSearches.map((loc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSearch(loc)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    transition: "background-color 300ms",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    backgroundColor: darkMode ? "#1f2937" : "white",
                    color: darkMode ? "#d1d5db" : "#374151",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div style={{ textAlign: "center", padding: "3rem 0" }}>
            <div
              style={{
                display: "inline-block",
                width: "2rem",
                height: "2rem",
                border: "4px solid #60a5fa",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            style={{
              borderRadius: "0.5rem",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: darkMode ? "rgba(127, 29, 29, 0.3)" : "#fef2f2",
              border: darkMode ? "1px solid #991b1b" : "1px solid #e5e7eb",
              color: darkMode ? "#fca5a5" : "#b91c1c",
            }}
          >
            {error}
          </div>
        )}

        {/* Weather Display */}
        {currentWeather && !loading && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Current Weather Card */}
            <div
              style={{
                borderRadius: "1rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                padding: "2rem",
                backgroundColor: darkMode ? "#1f2937" : "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      marginBottom: "0.25rem",
                      color: darkMode ? "white" : "#1f2937",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    {currentWeather.location.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                      margin: 0,
                    }}
                  >
                    {currentWeather.current.condition.text}
                  </p>
                </div>
                <div style={{ color: darkMode ? "#60a5fa" : "#3b82f6" }}>
                  {getWeatherIcon(currentWeather.current.condition.text)}
                </div>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    fontSize: "3.75rem",
                    fontWeight: 300,
                    color: darkMode ? "white" : "#1f2937",
                    lineHeight: 1,
                  }}
                >
                  {currentWeather.current.temp_c}°
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    marginTop: "0.25rem",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    margin: "0.25rem 0 0 0",
                  }}
                >
                  Feels like {currentWeather.current.feelslike_c}°
                </p>
              </div>

              {/* Weather Details Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <FaWind
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: darkMode ? "#6b7280" : "#9ca3af",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: darkMode ? "#6b7280" : "#6b7280",
                        margin: 0,
                      }}
                    >
                      Wind
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: darkMode ? "#e5e7eb" : "#1f2937",
                        margin: 0,
                      }}
                    >
                      {currentWeather.current.wind_kph} km/h
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <CiDroplet
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: darkMode ? "#6b7280" : "#9ca3af",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: darkMode ? "#6b7280" : "#6b7280",
                        margin: 0,
                      }}
                    >
                      Humidity
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: darkMode ? "#e5e7eb" : "#1f2937",
                        margin: 0,
                      }}
                    >
                      {currentWeather.current.humidity}%
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <FiEye
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: darkMode ? "#6b7280" : "#9ca3af",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: darkMode ? "#6b7280" : "#6b7280",
                        margin: 0,
                      }}
                    >
                      Visibility
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: darkMode ? "#e5e7eb" : "#1f2937",
                        margin: 0,
                      }}
                    >
                      {currentWeather.current.vis_km} km
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <FaGaugeSimple
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: darkMode ? "#6b7280" : "#9ca3af",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: darkMode ? "#6b7280" : "#6b7280",
                        margin: 0,
                      }}
                    >
                      Pressure
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: darkMode ? "#e5e7eb" : "#1f2937",
                        margin: 0,
                      }}
                    >
                      {currentWeather.current.pressure_mb} mb
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            <div
              style={{
                borderRadius: "1rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                padding: "1.5rem",
                backgroundColor: darkMode ? "#1f2937" : "white",
              }}
            >
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 300,
                  marginBottom: "1rem",
                  color: darkMode ? "white" : "#1f2937",
                  margin: "0 0 1rem 0",
                }}
              >
                5-Day Forecast
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "1rem",
                }}
              >
                {forecast.forecastday.map((day, idx) => (
                  <div key={idx} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        marginBottom: "0.75rem",
                        color: darkMode ? "#9ca3af" : "#4b5563",
                        margin: "0 0 0.75rem 0",
                      }}
                    >
                      {getDayName(day.date)}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "0.75rem",
                        color: darkMode ? "#60a5fa" : "#3b82f6",
                      }}
                    >
                      {getWeatherIcon(day.day.condition.text)}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: darkMode ? "#e5e7eb" : "#1f2937",
                          margin: 0,
                        }}
                      >
                        {day.day.maxtemp_c}°
                      </p>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: darkMode ? "#6b7280" : "#6b7280",
                          margin: 0,
                        }}
                      >
                        {day.day.mintemp_c}°
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

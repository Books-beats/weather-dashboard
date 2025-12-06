import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const getLocationSuggestions = async (query: string) => {
  const params = { q: query };
  const response = await axios.get(`${baseUrl}/api/locations/autocomplete`, {
    params,
  });
  return response.data;
};

export const getWeatherData = async (location: any) => {
  const params = {
    q: location.name,
  };
  const weather = await axios.get(`${baseUrl}/api/weather/current`, {
    params,
  });
  return weather.data;
};

export const getForecastData = async (location: any) => {
  const forecastParams = {
    q: location.name,
    days: 5,
  };
  const forecastResult = await axios.get(`${baseUrl}/api/weather/forecast`, {
    params: forecastParams,
  });
  return forecastResult.data.forecast;
};

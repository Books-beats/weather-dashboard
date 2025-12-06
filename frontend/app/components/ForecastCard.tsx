import getDayName from "../utils/getDayName";
import { getWeatherIcon } from "../utils/weatherIcons";
import {
  Card,
  Title,
  ForecastGrid,
  ForecastItem,
  DayName,
  WeatherIconWrapper,
  TempWrapper,
  MaxTemp,
  MinTemp,
} from "../styles/components/ForecastCard.styles";

const ForecastCard = ({ darkMode, forecast }) => {
  return (
    <Card darkMode={darkMode}>
      <Title darkMode={darkMode}>5-Day Forecast</Title>
      <ForecastGrid>
        {forecast.forecastday.map((day: any, idx: number) => (
          <ForecastItem key={idx}>
            <DayName darkMode={darkMode}>{getDayName(day.date)}</DayName>
            <WeatherIconWrapper darkMode={darkMode}>
              {getWeatherIcon(day.day.condition.text)}
            </WeatherIconWrapper>
            <TempWrapper>
              <MaxTemp darkMode={darkMode}>{day.day.maxtemp_c}°</MaxTemp>
              <MinTemp darkMode={darkMode}>{day.day.mintemp_c}°</MinTemp>
            </TempWrapper>
          </ForecastItem>
        ))}
      </ForecastGrid>
    </Card>
  );
};

export default ForecastCard;

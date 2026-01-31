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
    <Card $darkmode={darkMode}>
      <Title $darkmode={darkMode}>5-Day Forecast</Title>
      <ForecastGrid>
        {forecast.forecastday.map((day: any, idx: number) => (
          <ForecastItem key={idx}>
            <DayName $darkmode={darkMode}>{getDayName(day.date)}</DayName>
            <WeatherIconWrapper $darkmode={darkMode}>
              {getWeatherIcon(day.day.condition.text)}
            </WeatherIconWrapper>
            <TempWrapper>
              <MaxTemp $darkmode={darkMode}>{day.day.maxtemp_c}°</MaxTemp>
              <MinTemp $darkmode={darkMode}>{day.day.mintemp_c}°</MinTemp>
            </TempWrapper>
          </ForecastItem>
        ))}
      </ForecastGrid>
    </Card>
  );
};

export default ForecastCard;

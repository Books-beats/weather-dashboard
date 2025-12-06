import { FiEye } from "react-icons/fi";
import { CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { FaGaugeSimple } from "react-icons/fa6";
import { getWeatherIcon } from "../utils/weatherIcons";
import {
  Card,
  Header,
  Location,
  Condition,
  Temp,
  FeelsLike,
  DetailItem,
  DetailText,
  DetailsGrid,
  IconWrapper,
} from "../styles/components/WeatherCard.styles";

const WeatherCard = ({ darkMode, currentWeather }) => {
  const weatherIconColor = darkMode ? "#60a5fa" : "#3b82f6";
  const detailIconColor = darkMode ? "#6b7280" : "#9ca3af";

  return (
    <Card $darkmode={darkMode}>
      <Header>
        <div>
          <Location $darkmode={darkMode}>
            {currentWeather.location.name}
          </Location>
          <Condition $darkmode={darkMode}>
            {currentWeather.current.condition.text}
          </Condition>
        </div>
        <div style={{ color: weatherIconColor }}>
          {getWeatherIcon(currentWeather.current.condition.text)}
        </div>
      </Header>

      <div style={{ marginBottom: "2rem" }}>
        <Temp $darkmode={darkMode}>{currentWeather.current.temp_c}°</Temp>
        <FeelsLike $darkmode={darkMode}>
          Feels like {currentWeather.current.feelslike_c}°
        </FeelsLike>
      </div>

      <DetailsGrid>
        <DetailItem>
          <IconWrapper color={detailIconColor}>
            <FaWind />
          </IconWrapper>
          <DetailText $darkmode={darkMode}>
            <p>Wind</p>
            <p>{currentWeather.current.wind_kph} km/h</p>
          </DetailText>
        </DetailItem>

        <DetailItem>
          <IconWrapper color={detailIconColor}>
            <CiDroplet />
          </IconWrapper>
          <DetailText $darkmode={darkMode}>
            <p>Humidity</p>
            <p>{currentWeather.current.humidity}%</p>
          </DetailText>
        </DetailItem>

        <DetailItem>
          <IconWrapper color={detailIconColor}>
            <FiEye />
          </IconWrapper>
          <DetailText $darkmode={darkMode}>
            <p>Visibility</p>
            <p>{currentWeather.current.vis_km} km</p>
          </DetailText>
        </DetailItem>

        <DetailItem>
          <IconWrapper color={detailIconColor}>
            <FaGaugeSimple />
          </IconWrapper>
          <DetailText $darkmode={darkMode}>
            <p>Pressure</p>
            <p>{currentWeather.current.pressure_mb} mb</p>
          </DetailText>
        </DetailItem>
      </DetailsGrid>
    </Card>
  );
};

export default WeatherCard;

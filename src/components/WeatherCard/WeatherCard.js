import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });
  const imageSrcUrl = weatherOption.url || "";
  return (
    <CurrentTemperatureUnitContext.Provider>
      <section className="weather">
        <div className="weather__info">{weatherTemp}°F</div>
        <img src={imageSrcUrl} className="weather__image" alt="Weather" />
      </section>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default WeatherCard;

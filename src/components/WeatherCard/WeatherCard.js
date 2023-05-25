import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";
import React from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );
  console.log(weatherTemp);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });
  const imageSrcUrl = weatherOption.url || "";
  return (
    <section className="weather">
      <div className="weather__info">
        {''}
      </div>
      <img src={imageSrcUrl} className="weather__image" alt="Weather" />
    </section>
  );
};

export default WeatherCard;

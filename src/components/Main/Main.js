import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

//////////////////////////////////////////////////////////////////////////////
function Main({ weatherTemp, onSelectCard, currentCards }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );
  const getWeatherType = () => {
    const temp = weatherTemp && weatherTemp[currentTemperatureUnit];

    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18.8889 && temp <= 29.444) {
        return "warm";
      } else if (temp <= 18.3334) {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = currentCards.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  const todayTemp = weatherTemp && weatherTemp[currentTemperatureUnit];
  console.log(weatherTemp);

  return (
    <main className="main">
      <WeatherCard day={false} type="Cloudy" weatherTemp={weatherTemp} />
      <section className="card__section">
        Today is {todayTemp}/ you may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} key={item.id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/day/Sunny.svg").default,
    day: true,
    type: "Sunny",
  },
  {
    url: require("../../images/day/Cloudy.svg").default,
    day: true,
    type: "Cloudy",
  },
  {
    url: require("../../images/day/Rain.svg").default,
    day: true,
    type: "Rain",
  },
  {
    url: require("../../images/day/Storm.svg").default,
    day: true,
    type: "Storm",
  },
  {
    url: require("../../images/day/Snow.svg").default,
    day: true,
    type: "Snow",
  },
  { url: require("../../images/day/Fog.svg").default, day: true, type: "Fog" },
  {
    url: require("../../images/night/Sunny.svg").default,
    day: false,
    type: "Sunny",
  },
  {
    url: require("../../images/night/Cloudy.svg").default,
    day: false,
    type: "Cloudy",
  },
  {
    url: require("../../images/night/Rain.svg").default,
    day: false,
    type: "Rain",
  },
  {
    url: require("../../images/night/Storm.svg").default,
    day: false,
    type: "Storm",
  },
  {
    url: require("../../images/night/Snow.svg").default,
    day: false,
    type: "Snow",
  },
  {
    url: require("../../images/night/Fog.svg").default,
    day: false,
    type: "Fog",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;

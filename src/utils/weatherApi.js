import {
  latitude,
  longitude,
  APIkey,
  processResponseServer,
} from "./constants";

export const getForecastWeather = () => {
  const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
    `).then(processResponseServer);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperatureF = Math.round(main.temp);
  const temperatureC = Math.round(((main.temp - 32) * 5) / 9);
  return { F: temperatureF, C: temperatureC };
};

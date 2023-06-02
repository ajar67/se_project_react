import cloudyImage from "../images/night/Cloudy.svg";

export const weatherOptions = [
  {
    url: cloudyImage,
    day: true,
    type: "Sunny",
  },
  {
    url: require("../images/day/Cloudy.svg").default,
    day: true,
    type: "Cloudy",
  },
  {
    url: require("../images/day/Rain.svg").default,
    day: true,
    type: "Rain",
  },
  {
    url: require("../images/day/Storm.svg").default,
    day: true,
    type: "Storm",
  },
  {
    url: require("../images/day/Snow.svg").default,
    day: true,
    type: "Snow",
  },
  { url: require("../images/day/Fog.svg").default, day: true, type: "Fog" },
  {
    url: require("../images/night/Sunny.svg").default,
    day: false,
    type: "Sunny",
  },
  {
    url: cloudyImage,
    day: false,
    type: "Cloudy",
  },
  {
    url: require("../images/night/Rain.svg").default,
    day: false,
    type: "Rain",
  },
  {
    url: require("../images/night/Storm.svg").default,
    day: false,
    type: "Storm",
  },
  {
    url: require("../images/night/Snow.svg").default,
    day: false,
    type: "Snow",
  },
  {
    url: require("../images/night/Fog.svg").default,
    day: false,
    type: "Fog",
  },
];

export const latitude = 44.34;
export const longitude = 10.99;
export const APIkey = "3eab23e819c9bfd00f4754f0c1c83ee8";
export const baseURL = "http://localhost:3001";
export const processResponseServer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

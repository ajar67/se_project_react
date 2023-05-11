export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: require("../images/day/Sunny.svg").default,
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
    url: require("../images/night/Cloudy.svg").default,
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
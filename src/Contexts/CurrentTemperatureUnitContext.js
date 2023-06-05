import React from "react";
const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "F",
  handleChange: () => {},
});

export { CurrentTemperatureUnitContext };

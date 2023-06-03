import "./ToggleSwitch.css";
//import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";
import React from "react";

const ToggleSwitch = ({ value, onChange }) => {
  //const {currentTemperatureUnit} = React.useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <label className="header__label">
        <input
          className="switch"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span className="header__switch-button" />
      </label>
    </>
  );
};

export default ToggleSwitch;

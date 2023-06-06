import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

const ToggleSwitch = ({ value, onChange }) => {
  const {currentTemperatureUnit} = React.useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <label className="header__label">
        <a className="header__letter header__letter_f">F</a>
        <input
          className="switch"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <span className="header__switch-button" />
        <a className="header__letter header__letter_c">C</a>
      </label>
    </>
  );
};

export default ToggleSwitch;

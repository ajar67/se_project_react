import "./ToggleSwitch.css";
//import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";
import React from 'react';

const ToggleSwitch = ({ value, onChange }) => {
  //const currentTemperatureUnit = React.useContext(CurrentTemperatureUnitContext);
  return (
    <>
        <input
          className="header__input"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label className="header__label">
          <span className="header__switch-button" />
        </label>
    </>
  );
};

export default ToggleSwitch;

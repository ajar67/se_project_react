import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../Contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = ({ value, onChange }) => {
  return (
    <>
      <CurrentTemperatureUnitContext.Provider>
        <input
          className="header__input"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label className="header__label">
          <span className="header__switch-button" />
        </label>
      </CurrentTemperatureUnitContext.Provider>
    </>
  );
};

export default ToggleSwitch;

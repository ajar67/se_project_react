import "./Header.css";
import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ onCreateModal, value, onChange }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <div className="header__section-one">
          <div>
            <img src={logoImage} className="header__logo" alt="logo" />
          </div>
          <div className="header__date">{currentDate}</div>
        </div>
      </Link>
      <div className="header__section-two">
        <ToggleSwitch value={value} onChange={onChange} />
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <Link to="/profile">
          <div className="header__profile">
            <div className="header__name">Anthony Ranieri</div>
            <div>
              <img
                src={avatarImage}
                className="header__avatar-logo"
                alt="avatar"
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

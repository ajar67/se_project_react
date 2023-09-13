import "./Header.css";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  value,
  onChange,
  loggedIn,
  onCreateRegisterModal,
  onCreateLoginModal,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser } = React.useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__section-one">
          <div>
            <img src={logoImage} className="header__logo" alt="logo" />
          </div>
          <div className="header__date">{currentDate}, Connecticut</div>
        </div>
      </Link>
      <div className="header__section-two">
        <ToggleSwitch value={value} onChange={onChange} />
        {loggedIn ? (
          <div className='header__logged'>
            <button
              type="button"
              className="header__button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
            <Link to="/profile">
              <div className="header__profile">
                <div className="header__name">{currentUser.name}</div>
                <div>
                  <img
                    src={
                      currentUser.avatar
                    }
                    className="header__avatar-logo"
                    alt="avatar"
                  />
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="header__notin">
            <button
              className="header__button_nl"
              type="button"
              onClick={onCreateRegisterModal}
            >
              Sign up
            </button>
            <button
              className="header__button_nl"
              type="button"
              onClick={onCreateLoginModal}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import "./Header.css";
import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Route, Link, useRouteMatch, React } from "react";
import Main from "../Main/Main";
import Profile from "../profile/profile";

const Header = ({ onCreateModal, value, onChange, label }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { path, url } = useRouteMatch();

  return (
    <header className="header">
      <div className="header__logo">
        <Link to={`${url}/`}>
          <div>
            <img src={logoImage} alt="logo" />
          </div>
        </Link>
        <div className="header__date">{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch value={value} onChange={onChange} />
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <Link to={`${url}/profile`}>
          <div className="header__name">Anthony Ranieri</div>
          <div>
            <img src={avatarImage} alt="avatar" />
          </div>
        </Link>
        <Route path={`${path}/`}>
          <Main />
        </Route>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
      </div>
    </header>
  );
};

export default Header;

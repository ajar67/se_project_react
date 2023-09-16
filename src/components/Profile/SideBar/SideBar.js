import React from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./SideBar.css";

const SideBar = ({ onLogout, onCreateProfileModal }) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__image">
          <img
            src={currentUser.avatar}
            alt="avatar"
            className="sidebar__avatar"
          />
        </div>
        <div className="sidebar__info">
          <p className='sidebar__name'>{currentUser.name}</p>
          </div>
      </div>
      <div className="sidebar__buttons">
        <button
          type="button"
          className="sidebar__button"
          onClick={onCreateProfileModal}
        >
          Change profile data
        </button>
        <button type="button" className="sidebar__button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;

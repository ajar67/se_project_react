import avatarImage from "../../../images/avatar.svg";
import React from "react";
import "./SideBar.css";

const SideBar = ({onLogout, onCreateProfileModal}) => {
  return (
    <div className="sidebar">
      <div className="sidebar__image">
        <img src={avatarImage} alt="avatar" className="sidebar__avatar" />
      </div>
      <div className="sidebar__name">Anthony Ranieri</div>
      <div>
        <button type='button' className='sidebar__button' onClick={onCreateProfileModal}>Change profile data</button>
        <button type='button' className='sidebar__button' onClick={onLogout}>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;

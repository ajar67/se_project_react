import avatarImage from "../../../images/avatar.svg";
import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__image">
        <img src={avatarImage} alt="avatar" className="sidebar__avatar" />
      </div>
      <div className="sidebar__name">Anthony Ranieri</div>
    </div>
  );
};

export default SideBar;

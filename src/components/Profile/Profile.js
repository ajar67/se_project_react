import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";
import React from "react";

const Profile = ({onCreateModal, currentCards}) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection onCreateModal={onCreateModal} currentCards={currentCards}/>
    </div>
  );
};

export default Profile;

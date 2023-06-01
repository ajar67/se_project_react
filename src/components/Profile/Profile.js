import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";
import React from "react";

const Profile = ({onCreateModal}) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection onCreateModal={onCreateModal}/>
    </div>
  );
};

export default Profile;

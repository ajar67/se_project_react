import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";
import React from "react";

const Profile = ({ onCreateModal, currentCards, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCreateModal={onCreateModal}
        currentCards={currentCards}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;

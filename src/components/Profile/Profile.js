import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";
import React from "react";

const Profile = ({ onCreateProfileModal, onLogout, onCreateModal, currentCards, onSelectCard, onCardLike }) => {
  return (
    <div className="profile">
      <SideBar onCreateProfileModal={onCreateProfileModal} onLogout={onLogout} />
      <ClothesSection
        onCreateModal={onCreateModal}
        currentCards={currentCards}
        onSelectCard={onSelectCard}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;

import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import React from 'react';
//import 'Profile.css';     have to create profile.css    has sidebar.js ad clothessection.js as well

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection />
    </div>
  );
};

export default Profile;

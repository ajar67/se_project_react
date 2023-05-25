import avatarImage from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="header__name">Anthony Ranieri</div>
      <div>
        <img src={avatarImage} alt="avatar" />
      </div>
    </div>
  );
};

export default SideBar;
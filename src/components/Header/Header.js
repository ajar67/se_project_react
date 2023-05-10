import "./Header.css";
import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <button type="text" onClick={onCreateModal}>
          Add New Clothes
        </button>
        <div>Anthony Ranieri</div>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

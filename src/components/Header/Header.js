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
        <div className='header__date'>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div className='header__name'>Anthony Ranieri</div>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
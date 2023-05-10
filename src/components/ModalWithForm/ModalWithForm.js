import "./ModalWithForm.css";
import closeImage from "../../images/closeGrey.svg";

const ModalWithForm = ({ title, children, buttonText, onClose, name }) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">{children}</form>
        <button className="modal__button-submit" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;

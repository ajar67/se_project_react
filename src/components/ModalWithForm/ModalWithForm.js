import "./ModalWithForm.css";
import closeImage from "../../images/closeGrey.svg";
import React from "react";

const ModalWithForm = ({
  title,
  children,
  buttonText,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" className="modal__close" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__button-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

import "./ModalWithForm.css";
import closeImage from "../../images/closeGrey.svg";
import React, { useEffect, useState } from "react";

const ModalWithForm = ({
  title,
  children,
  buttonText,
  onClose,
  name,
  onSubmit,
  isSubmitDisabled
}) => {
  // const [formErrors, setFormErrors] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  //   avatar: "",
  // });

  // const validateEmail = (email) => {
  //   const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  //   return emailRegex.test(email);
  // };
  // const isValidEmail = validateEmail(email); //value of input
  // setFormErrors({
  //   ...formErrors,
  //   email: isValidEmail ? "" : "Invalid email address",
  // });

  // const validatePassword = (password) => {
  //   if (password.length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const isValidPassword = validatePassword(password); //value of input
  // setFormErrors({
  //   ...formErrors,
  //   email: isValidPassword ? "" : "Not a valid Url",
  // });

  // const validateURL = (url) => {
  //   const urlRegex = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]/;
  //   return urlRegex.test(url);
  // };
  // const isValidUrl = validateURL(url); //value of input
  // setFormErrors({
  //   ...formErrors,
  //   email: isValidUrl ? "" : "Must enter a password",
  // });



  //        {formErrors.email && <span className="error">{formErrors.email}</span>}

  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" className="modal__close" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__button-submit" type="submit" disabled={isSubmitDisabled}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

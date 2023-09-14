import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  onCloseModal,
  onSubmit,
  isOpen,
  buttonText,
  onCreateRegisterModal,
}) => {
  const [formErrors, setFormErrors] = useState({
    email: "Enter a valid email",
    password: "Enter a password",
  });

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const validateEmail = (email) => {
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(email);
    };
    if (e.target.name === "email") {
      const isValidEmail = validateEmail(e.target.value);
      setFormErrors({
        ...formErrors,
        email: isValidEmail ? "" : "Invalid email address",
      });
    }
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const validatePassword = (password) => {
      if (password.length > 0) {
        return true;
      } else {
        return false;
      }
    };
    if (e.target.name === "password") {
      const isValidPassword = validatePassword(e.target.value);
      setFormErrors({
        ...formErrors,
        password: isValidPassword ? "" : "Must enter a password",
      });
    }
  };

  const isSubmitDisabled = Object.values(formErrors).some(
    (error) => error !== ""
  );

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <ModalWithForm
      title="Login"
      buttonText={buttonText}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <label className="modal__info">
        Email
        <input
          value={email}
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__info">
        Password
        <input
          value={password}
          className="modal__input"
          type="password"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
      </label>
      <button
        className="modal__button_two modal__button_login"
        type="button"
        onClick={onCreateRegisterModal}
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;

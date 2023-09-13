import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  onCloseModal,
  onSubmit,
  isOpen,
  buttonText,
  onCreateRegisterModal,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
        />
      </label>
      <label className="modal__info">
        Password
        <input
          value={password}
          className="modal__input"
          type="text"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
          onChange={handlePasswordChange}
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

import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onCloseModal,
  onSubmit,
  buttonText,
  onCreateLoginModal,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ email, password, name, avatar });
  }

  return (
    <ModalWithForm
      title="Sign Up"
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
      <label className="modal__info">
        Name
        <input
          value={name}
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__info">
        Avatar URL
        <input
          value={avatar}
          className="modal__input"
          type="text"
          name="avatar"
          minLength="1"
          maxLength="300"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
      <button
        className="modal__button_two modal__button_register"
        type="button"
        onClick={onCreateLoginModal}
      >
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;

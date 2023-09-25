import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onCloseModal, onSubmit, isOpen, buttonText }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ name, avatar });
  }

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText={buttonText}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
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
        Avatar
        <input
          value={avatar}
          className="modal__input"
          type="text"
          name="avatar"
          minLength="1"
          maxLength="250"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

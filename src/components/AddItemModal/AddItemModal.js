import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onSubmit, onCloseModal, buttonText }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ name, imageUrl, weather });
  }

  return (
    <ModalWithForm
      title="New Garment"
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
        Image
        <input
          value={imageUrl}
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          maxLength="300"
          placeholder="ImageURL"
          onChange={handleImageChange}
        />
      </label>
      <p className="modal__info">Select the weather type:</p>
      <div>
        <div>
          <label className="modal__label">
            <input
              className="modal__radio"
              type="radio"
              id="hot"
              value="hot"
              name="radio"
              onChange={handleWeatherChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label className="modal__label">
            <input
              className="modal__radio"
              type="radio"
              id="warm"
              value="warm"
              name="radio"
              onChange={handleWeatherChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label className="modal__label">
            <input
              className="modal__radio"
              type="radio"
              id="cold"
              value="cold"
              name="radio"
              onChange={handleWeatherChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;

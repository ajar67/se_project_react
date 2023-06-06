import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemCard from "../ItemCard/ItemCard";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal, onSelectCard }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
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

  // useEffect(() => {
  //   setName("");
  //   setImageUrl("");
  //   setWeather("");
  // });

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({ name, imageUrl, weather });
  }

  const item = [{name: name, imageUrl: imageUrl, weather: weather}];

  return (
    <>
      <ModalWithForm
        title="New Garment"
        buttonText="Add garment"
        onClose={onCloseModal}
        onAddItem={handleSubmit}
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
            <input
              className="modal__radio"
              type="radio"
              id="hot"
              value="hot"
              name="radio"
              onChange={handleWeatherChange}
            />
            <label className="modal__label">Hot</label>
          </div>
          <div>
            <input
              className="modal__radio"
              type="radio"
              id="warm"
              value="warm"
              name="radio"
              onChange={handleWeatherChange}
            />
            <label className="modal__label">Warm</label>
          </div>
          <div>
            <input
              className="modal__radio"
              type="radio"
              id="cold"
              value="cold"
              name="radio"
              onChange={handleWeatherChange}
            />
            <label className="modal__label">Cold</label>
          </div>
        </div>
      </ModalWithForm>
      {isOpen && (<ItemCard item={item} onSelectCard={onSelectCard} />)}
    </>
  );
};

export default AddItemModal;

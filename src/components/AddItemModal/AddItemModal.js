import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({nameValue: setName(evt.target.value), imageValue: setImageUrl(evt.target.value), weatherValue: setWeather(evt.target.value)});
  }

  return (
    <>
      <ModalWithForm title="New Garment" buttonText="Add garment" onClose={onCloseModal} onAddItem={handleSubmit}>
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
            //onChange={(evt) => setName(evt.target.value)}
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
            maxLength="30"
            placeholder="ImageURL"
            //onChange={(evt) => setImageUrl(evt.target.value)}
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
              //onChange={(evt) => setWeather(evt.target.value)}
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
              //onChange={(evt) => setWeather(evt.target.value)}
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
              //onChange={(evt) => setWeather(evt.target.value)}
            />
            <label className="modal__label">Cold</label>
          </div>
        </div>
      </ModalWithForm>
    </>
  );
};

export default AddItemModal;

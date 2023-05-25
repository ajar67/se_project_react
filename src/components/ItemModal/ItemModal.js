import "./ItemModal.css";
import closeImage from "../../images/close.svg";
import React from "react";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__pic">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" className="modal__close" />
        </button>
        <img
          src={selectedCard.link}
          className="modal__image"
          alt="close button"
        />
        <div>
          <div className="modal__text">{selectedCard.name}</div>
          <div className="modal__text">Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

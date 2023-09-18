import "./ItemModal.css";
import closeImage from "../../images/closeGrey.svg";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__button-delete ${
    isOwn ? "modal__button-delete_visible" : "modal__button-delete_hidden"
  }`;
  console.log("ddds: ", selectedCard);
  console.log(selectedCard.imageUrl);
  console.log("onDelete: ", onDelete);
  return (
    <div className="modal">
      <div className="modal__pic">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" className="modal__close" />
        </button>
        <div className='modal__container_image'>
          <img
            src={selectedCard.imageUrl}
            className="modal__image"
            alt="card image"
          />
        </div>

        <div className="modal__information">
          <div className="modal__description">
            <div className="modal__text">{selectedCard.name}</div>
            <div className="modal__text">Weather: {selectedCard.weather}</div>
          </div>
          <div className="modal__button">
            <button
              type="button"
              className={itemDeleteButtonClassName}
              onClick={() => onDelete(selectedCard)}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

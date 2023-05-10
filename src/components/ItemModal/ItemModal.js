import "./ItemModal.css";
import closeImage from "../../images/close.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content modal__pic">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" />
        </button>
        <img
          src={selectedCard.link}
          className="modal__image"
          alt="close button"
        />
        <div className="modal__text">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

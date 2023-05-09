import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img
            src={require("../../images/close.svg").default}
            alt="close button"
          />
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

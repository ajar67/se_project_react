import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  buttonText = "Add garment",
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img
            src={require("../../images/close.svg").default}
            alt="close button"
          />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">{children}</form>
        <button className="modal__button-submit" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ onCloseModal, onSubmit }) => {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <ModalWithForm
      title="Login"
      buttonText="Log in"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__info">
        Email
        <input
          //value={name}
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
        />
      </label>
      <label className="modal__info">
        Password
        <input
          //value={name}
          className="modal__input"
          type="text"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
        />
      </label>
      <button className='modal__button_two' type="button">or Register</button>
    </ModalWithForm>
  );
};

export default LoginModal;

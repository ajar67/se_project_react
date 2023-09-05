import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({onCloseModal, onSubmit}) => {
    return (
        <ModalWithForm
      title="Sign Up"
      buttonText="Next"
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
      <label className="modal__info">
        Name
        <input
          //value={name}
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
        />
      </label>
      <label className="modal__info">
        Avatar URL
        <input
          //value={name}
          className="modal__input"
          type="text"
          name="avatar"
          minLength="1"
          maxLength="30"
          placeholder="Avatar URL"
        />
      </label>
      <button className='modal__button_two' type="button">or Log in</button>
    </ModalWithForm>
    )
}

export default RegisterModal;
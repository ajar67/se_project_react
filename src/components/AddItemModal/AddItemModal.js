import {React, useEffect} from 'react';
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({isOpen, onAddItem, onCloseModal}) => {
    function handleSubmit(evt) {
        evt.preventDefault();
        
    }

    return(
        <>
        <ModalWithForm>
            
        </ModalWithForm>
        </>
    )

};

export default AddItemModal;

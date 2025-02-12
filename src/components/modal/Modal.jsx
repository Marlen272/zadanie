import React from 'react';
import './Modal.css';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default Modal;

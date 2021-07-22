import React from "react";

const Modal = ({ onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default Modal;

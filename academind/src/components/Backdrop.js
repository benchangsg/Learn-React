import React from "react";

const Backdrop = ({ closeModal }) => {
  return <div className="backdrop" onClick={closeModal} />;
};

export default Backdrop;

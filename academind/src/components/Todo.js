import React from "react";
import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true)
  }

  const closeModalHandler = () => setModalIsOpen(false)

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {ModalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {ModalIsOpen && <Backdrop closeModalHandler={closeModalHandler}/>}
    </div>
  );
};

export default Todo;

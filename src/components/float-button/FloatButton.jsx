import React, { useContext } from 'react';
import ViewContext from '../../contexts/ViewContext/ViewContext';
import './float-button.css';
import plusIcon from '../../assets/plus-icon.svg';

export function FloatButton({ setShowModal, showModal }) {
  const value = useContext(ViewContext);

  function handleTodoModal() {
    setShowModal(!showModal);
  }

  function handleModal() {
    const data = value.viewState.view;
    switch (data) {
      case 'home':
        console.log('home');
        break;
      case 'todos':
        handleTodoModal();
        break;
      default:
        console.log('wenas');
        break;
    }
  }

  return (
    <section>
      <button
        className="floatButton"
        aria-label="add something"
        onClick={handleModal}
      >
        <i aria-hidden="false">
          <img src={plusIcon} alt="icon plus" />
        </i>
      </button>
    </section>
  );
}

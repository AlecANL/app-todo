import React from 'react';
import './float-button.css';
import plusIcon from '../../assets/plus-icon.svg';

export function FloatButton({ handleModalTask }) {
  return (
    <>
      <button
        className="floatButton"
        aria-label="add something"
        title="open modal"
        onClick={handleModalTask}
      >
        <i aria-hidden="false">
          <img src={plusIcon} alt="icon plus" />
        </i>
      </button>
    </>
  );
}

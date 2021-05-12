import React, { useContext, useState } from 'react';
import { addTask } from '../../actions/TodoActions/TodoActions';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import ViewContext from '../../contexts/ViewContext/ViewContext';
import { ButtonCalendar } from '../button-calendar/ButtonCalendar';
import './modal-input.css';

export function ModalInput({ setShowModal }) {
  const { currentDate, setDate, dispatch } = useContext(TodoContext);
  const {
    viewState: { taskBelongArea },
  } = useContext(ViewContext);

  const [inputValue, setInputValue] = useState('');

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleModal(e) {
    e.stopPropagation();
  }

  function handleInputValue(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: new Date().getTime(),
      taskName: inputValue,
      date: currentDate,
      taskArea: 'escuela',
      taskBelongArea,
      subTasks: [],
    };
    addTask(dispatch, task);
    setDate({
      day: null,
      month: null,
      year: null,
    });
    setInputValue('');
    console.log(task);
    // console.log(currentDate);
  }

  return (
    <section className="modal" onClick={handleCloseModal}>
      <div className="modal-content" onClick={handleModal}>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            className="modal-input"
            placeholder="por ej., Leer el blog de Leonidas Esteban"
            type="text"
            aria-label="add task"
            value={inputValue}
            onChange={handleInputValue}
          />
        </form>
        <div className="modal-description">
          <div className="modal-descriptionAction">
            <ButtonCalendar {...currentDate} />
            <div className="modal-type-task">
              <span className="ellipsis">{taskBelongArea}</span>
            </div>
          </div>
          <button
            className="button-form"
            type="submit"
            disabled={inputValue.length < 5 && true}
            onClick={handleSubmit}
          >
            <i className="icon-arrowUp" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

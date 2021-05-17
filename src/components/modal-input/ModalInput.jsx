import React, { useContext } from 'react';
import { addTask } from '../../actions/TodoActions/TodoActions';
import ViewContext from '../../contexts/ViewContext/ViewContext';
import ButtonCalendar from '../button-calendar/ButtonCalendar';
import { useForm } from '../../hooks/useForm';
import { TagTask } from '../tag-task/TagTask';
import './modal-input.css';

function ModalInput({ show, handleModalTask }) {
  const { inputValue, handleInputValue, createTask, sendForm, currentDate } =
    useForm();

  const {
    viewState: { taskBelongArea },
  } = useContext(ViewContext);

  function handleCloseModal() {
    handleModalTask();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const task = createTask();
    sendForm(task, addTask);
    handleModalTask();
  }

  return (
    <section className={`modal ${show && 'is-active'}`}>
      <div className="modal-layer" onClick={handleCloseModal}></div>
      <div className="modal-content">
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
            <TagTask taskArea={taskBelongArea} isBorder={true} />
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

export default ModalInput;

import { useContext } from 'react';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import { useForm } from '../../hooks/useForm';
import ButtonCalendar from '../button-calendar/ButtonCalendar';
import { addSubTask } from '../../actions/TodoActions/TodoActions';

function ModalAddSubTask({ show }) {
  const { inputValue, handleInputValue, createSubTask, sendForm } = useForm();
  const { currentDate, setOpenSubTaskModal, currentTask } =
    useContext(TodoContext);

  function handleCloseModal() {
    setOpenSubTaskModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subTask = createSubTask(currentTask);
    sendForm(subTask, addSubTask);
    handleCloseModal();
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

export default ModalAddSubTask;

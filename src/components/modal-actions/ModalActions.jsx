// import { TaskItem } from '../task-wrapper/task-item/TaskItem';
import { useContext, useState, useEffect } from 'react';
import { deleteTask, editTask } from '../../actions/TodoActions/TodoActions';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import { useForm } from '../../hooks/useForm';
import ButtonCalendar from '../button-calendar/ButtonCalendar';
import './modal-actioins.css';

function ModalActions() {
  const {
    currentTask,
    setShowModalActions,
    showModalActions,
    currentDate,
    setCurrentTask,
    dispatch,
  } = useContext(TodoContext);
  const { createTaskByEdited, sendForm } = useForm();

  useEffect(() => {
    const task = createTaskByEdited(currentTask);
    sendForm(task, editTask);
    // eslint-disable-next-line
  }, [currentTask]);

  const [inputValue, setInputValue] = useState(currentTask.taskName || '');
  const [show, setShow] = useState(false);

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentTask({
      id: currentTask.id,
      taskName: inputValue,
      subTasks: currentTask.subTasks,
      taskBelongArea: currentTask.taskBelongArea,
      taskArea: currentTask.taskArea,
      date: currentDate,
    });
    setShow(false);
    setShowModalActions(false);
    setInputValue('');
  }

  function handleShowEdit() {
    setShow(!show);
  }

  function handleDelete() {
    console.log(currentTask.id);
    deleteTask(dispatch, currentTask.id);
    setShowModalActions(false);
  }

  function handleShowModal() {
    setShowModalActions(false);
    setShow(false);
    setCurrentTask({});
  }
  //   console.log(currentTask);
  return (
    <div className={`modalActions ${showModalActions && 'is-active'}`}>
      <div className="modalActions-layer"></div>
      <div className="modalActions-content">
        <div className="modalActions-heding">
          <span>Editar, Eliminar</span>
          <button className="buttonIcon">
            <i className="icon-closeSquare" onClick={handleShowModal}></i>
          </button>
        </div>
        <div className="heading">
          <button className="btn is-yellow" onClick={handleShowEdit}>
            Editar
          </button>
          <button className="btn is-red" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
        <div className={`modalActions-view ${show && 'is-active'}`}>
          <form onSubmit={handleSubmit}>
            <input
              className="modalActions-input"
              placeholder="... texto editado"
              type="text"
              value={inputValue}
              onChange={handleOnChange}
            />
          </form>
          <div className="modalActions-buttons">
            <ButtonCalendar {...currentTask.date} />
            <button type="submit" className="buttonIcon btn-add is-blue">
              <i className="icon-arrowUp"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalActions;

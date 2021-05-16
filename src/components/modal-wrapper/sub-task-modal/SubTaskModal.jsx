import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import { TagTask } from '../../tag-task/TagTask';
import { TaskItem } from '../../task-wrapper/task-item/TaskItem';
import { ButtonCalendar } from '../../button-calendar/ButtonCalendar';
import './sub-task-modal.css';

export function SubTaskModal() {
  const { show, setShowModal, setDate, setOpenSubTaskModal, currentTask } =
    useContext(TodoContext);

  function handleCloseModal() {
    setShowModal(false);
    setDate({
      day: null,
      month: null,
      year: null,
    });
  }

  function handleOpenModalSubTask() {
    setOpenSubTaskModal(true);
  }

  return (
    <section className={`subTaskModal ${show && 'is-active'}`}>
      <div className="subTask-layer"></div>
      <div className="subTaskModal-content">
        <div className="heading">
          <TagTask taskArea={currentTask.taskBelongArea} />
          <button className="buttonIcon" onClick={handleCloseModal}>
            <i className="icon-closeSquare" aria-hidden="true"></i>
          </button>
        </div>
        <div className="task-description">
          <TaskItem taskName={currentTask.taskName} id={currentTask.id} />
          <ButtonCalendar {...currentTask.date} />
        </div>
        <div className="subTasks-section">
          <p>Subtareas</p>
          <button onClick={handleOpenModalSubTask}>+ Añadir subtarea</button>
        </div>
      </div>
    </section>
  );
}

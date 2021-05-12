import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import ViewContext from '../../../contexts/ViewContext/ViewContext';
import { TagTask } from '../../tag-task/TagTask';
import { TaskItem } from '../../task-wrapper/task-item/TaskItem';
import { ButtonCalendar } from '../../button-calendar/ButtonCalendar';
import './sub-task-modal.css';

export function SubTaskModal() {
  const { show, setShowModal, taskModal, currentDate, setDate } = useContext(
    TodoContext
  );
  const {
    viewState: { taskBelongArea },
  } = useContext(ViewContext);

  function handleCloseModal() {
    setShowModal(false);
    setDate({
      day: null,
      month: null,
      year: null,
    });
  }
  return (
    <section className={`subTaskModal ${show && 'is-active'}`}>
      <div className="subTask-layer"></div>
      <div className="subTaskModal-content">
        <div className="heading">
          <TagTask taskArea={taskBelongArea} />
          <button className="buttonIcon" onClick={handleCloseModal}>
            <i className="icon-closeSquare" aria-hidden="true"></i>
          </button>
        </div>
        <div className="task-description">
          <TaskItem taskName={taskModal?.name} id={taskModal?.id} />
          <ButtonCalendar {...currentDate} />
        </div>
        <div className="subTasks-section">
          <p>Subtareas</p>
          <button>+ Añadir subtarea</button>
        </div>
      </div>
    </section>
  );
}

import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import IconSetting from '../../icon-setting/IconSetting';
import './task-item.css';

export function TaskItem({
  subTasks,
  taskName,
  id,
  date,
  taskArea,
  taskBelongArea,
  children,
}) {
  const { setShowModal, setCurrentTask } = useContext(TodoContext);

  function handleShowModal() {
    setShowModal(true);
    setCurrentTask({
      taskName,
      id,
      date,
      taskArea,
      taskBelongArea,
      subTasks,
    });
  }
  function handleModalActions() {
    setCurrentTask({
      taskName,
      id,
      date,
      taskArea,
      taskBelongArea,
      subTasks,
    });
  }
  return (
    <div className="taskItem">
      <div className="task">
        <div className="form-control">
          <input
            className="taskItem-checked"
            type="checkbox"
            id={`completed-${id}`}
          />
          <label className="taskItem-label" htmlFor={`completed-${id}`}></label>
        </div>
        <div className="taskItem-description" onClick={handleShowModal}>
          <span className="taskItem-title">{taskName}</span>
        </div>
        <IconSetting handleCurrentTask={handleModalActions} />
      </div>
      {children}
    </div>
  );
}

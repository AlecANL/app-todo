import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import './task-item.css';

export function TaskItem({
  subTasks,
  taskName,
  id,
  date,
  taskArea,
  taskBelongArea,
}) {
  const { setShowModal, setTaskModal, setCurrentTask } =
    useContext(TodoContext);

  function handleShowModal() {
    setShowModal(true);
    setTaskModal({
      name: taskName,
      id: id,
    });
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
      </div>
      <div className="taskItem-sub">
        <div className="sub-task">
          <div className="form-control">
            <input
              className="taskItem-checked"
              type="checkbox"
              id={`completed-${id}`}
            />
            <label
              className="taskItem-label"
              htmlFor={`completed-${id}`}
            ></label>
          </div>
          <div className="taskItem-description">
            <span className="taskItem-title">'wenas'</span>
            <div className="subTask-details">
              <i className="icon-calendar icon-sub"></i>
              <span className="date">2 Mayo</span>
            </div>
          </div>
        </div>
        <div className="sub-task">
          <div className="form-control">
            <input
              className="taskItem-checked"
              type="checkbox"
              id={`completed-${id}`}
            />
            <label
              className="taskItem-label"
              htmlFor={`completed-${id}`}
            ></label>
          </div>
          <div className="taskItem-description">
            <span className="taskItem-title">'hell'</span>
            <div className="subTask-details">
              <i className="icon-calendar icon-sub"></i>
              <span className="date">2 Mayo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

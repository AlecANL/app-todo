import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import './task-item.css';

export function TaskItem({ taskName, id }) {
  const { setShowModal, setTaskModal } = useContext(TodoContext);

  function handleShowModal() {
    setShowModal(true);
    setTaskModal({
      name: taskName,
      id: id,
    });
  }
  return (
    <div className="taskItem">
      <div className="form-control">
        <input
          className="taskItem-checked"
          type="checkbox"
          id={`completed-${id}`}
        />
        <label className="taskItem-label" htmlFor={`completed-${id}`}></label>
      </div>
      <span className="taskItem-title" onClick={handleShowModal}>
        {taskName}
      </span>
    </div>
  );
}

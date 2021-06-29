import './task-item.css';

function TaskItem({ name, id, handleShowDetail }) {
  return (
    <li className="taskItem">
      <input className="inputCheck" type="checkbox" id={id} />
      <label className="customCheck" htmlFor={id}></label>
      <span className="title" onClick={handleShowDetail}>
        {name}
      </span>
    </li>
  );
}

export default TaskItem;

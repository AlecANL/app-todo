import './sub-task-item.css';

function SubTaskItem({ name, date, id }) {
  return (
    <li className="subTaskItem">
      <input className="inputCheck" type="checkbox" id={id} />
      <label className="customCheck" htmlFor={id}></label>
      <div className="subTask-content">
        <span>{name}</span>
        <span>{date || 'Soon'}</span>
      </div>
    </li>
  );
}

export default SubTaskItem;

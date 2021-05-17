import './sub-task-item.css';

function SubTaskItem({ subTasks }) {
  const { date, subTaskName, idSubTask } = subTasks;
  return (
    <div className="subTask-content">
      <div className="form-control">
        <input
          className="subTask-checked"
          type="checkbox"
          id={`subTask-${idSubTask}`}
        />
        <label
          className="subTask-label"
          htmlFor={`subTask-${idSubTask}`}
        ></label>
      </div>

      <div className="subTask-description">
        <span className="subTask-title">{subTaskName}</span>
        <div className="subTask-details">
          <i className="icon-calendar"></i>
          <span className="subTask-date">
            {date?.day && date?.month
              ? `${date.day} ${date.month}`
              : 'Sin fecha'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubTaskItem;

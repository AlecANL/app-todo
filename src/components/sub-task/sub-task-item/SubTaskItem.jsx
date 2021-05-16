function SubTaskItem({ id, subTaskName, date }) {
  return (
    <div className="subTask">
      <div className="form-control">
        <input type="checkbox" id={`subTask-${id}`} />
        <label htmlFor={`subTask-${id}`}></label>
      </div>
      <div className="subTask-description">
        <span className="subTask-title">${subTaskName}</span>
        <div className="subTask-details">
          <i className="icon-calendar"></i>
          <span className="subTask-date">
            {date.day && date.month ? `${date.day} ${date.month}` : 'Sin fecha'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubTaskItem;

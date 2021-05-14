import React, { useState } from 'react';
// import ViewContext from '../../../contexts/ViewContext/ViewContext';
import { TaskType } from '../task-type/TaskType';
import './List-task.css';

export function ListTask({ id, title, typeTasks }) {
  // const data = useContext(ViewContext);
  const [currentIndex, setCurrentIndex] = useState(null);

  function handleExpandContent(i) {
    if (currentIndex === i) {
      return setCurrentIndex(null);
    }
    setCurrentIndex(i);
  }

  return (
    <div className={`listClassType ${currentIndex === id && 'is-active'}`}>
      <div
        className="listClassType-title"
        onClick={() => handleExpandContent(id)}
      >
        <div className="description">
          <span>{title}</span>
        </div>
        <div className="logo">
          <i className="icon-arrowLeft1"></i>
        </div>
      </div>
      <div className="listClassType-details">
        {typeTasks.map((task, id) => (
          <TaskType key={id} title={task} area={title} />
        ))}
      </div>
    </div>
  );
}

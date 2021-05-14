import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ViewContext from '../../../contexts/ViewContext/ViewContext';
import { changeView } from '../../../actions/ViewsActions/ViewActions';
import './TaskType.css';

export function TaskType({ title, area }) {
  const { dispatch } = useContext(ViewContext);
  function handleTaskType() {
    changeView(dispatch, {
      taskArea: area.toLowerCase(),
      taskBelongArea: title.toLowerCase(),
    });
  }
  return (
    <div className="taskType" onClick={handleTaskType}>
      <div className="taskType-title">
        <Link to="/todos">
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
}

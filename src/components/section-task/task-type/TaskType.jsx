import React, { useContext } from 'react';
import ViewContext from '../../../contexts/ViewContext/ViewContext';
import { changeView } from '../../../actions/ViewsActions/ViewActions';
import './TaskType.css';

export function TaskType({ title, history }) {
  const { dispatch } = useContext(ViewContext);
  function handleTaskType() {
    changeView(dispatch, { view: 'todos', currentSection: title });
    history.push('/todos');
  }
  return (
    <div className="taskType" onClick={handleTaskType}>
      <div className="taskType-title">
        <span>{title}</span>
      </div>
    </div>
  );
}

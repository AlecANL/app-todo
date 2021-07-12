import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalDetail } from 'redux/ui/ui.actions';
import './task-item.css';

function TaskItem(taskObj) {
  const dispatch = useDispatch();
  const { name, id } = taskObj;

  function handleShowDetail() {
    console.log(taskObj);
    dispatch(showModalDetail(true));
  }
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

export default React.memo(TaskItem);

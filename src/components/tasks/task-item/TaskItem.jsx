import { useDispatch } from 'react-redux';
import { showModalDetail } from 'redux/ui/ui.actions';
import './task-item.css';

function TaskItem(taskObj) {
  console.log(taskObj);
  const dispatch = useDispatch();
  const { name, id } = taskObj;

  function handleShowDetail() {
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

export default TaskItem;

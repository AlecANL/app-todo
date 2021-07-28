import TaskItem from '../task-item/TaskItem';
import Loading from '../../loading/Loading';
import './task-list.css';
import { useSelector } from 'react-redux';

function TaskList({ collections }) {
  const uiState = useSelector(state => state.ui);
  function handleShowDetail() {}

  return (
    <article className="collections">
      {uiState.showLoading && <Loading />}
      <ul className="collections-list">
        {collections.map(task => (
          <TaskItem
            key={task?.id}
            name={task.task}
            id={task.id}
            date={task.date}
            isCompleted={task.isCompleted}
            subTasks={task.subTasks}
            handleShowDetail={handleShowDetail}
          />
        ))}
      </ul>
    </article>
  );
}

export default TaskList;

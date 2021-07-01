import TaskItem from '../task-item/TaskItem';
import './task-list.css';

function TaskList({ collections }) {
  function handleShowDetail() {}

  return (
    <article className="collections">
      <ul className="collections-list">
        {collections.map(task => (
          <TaskItem
            key={task?.id}
            name={task.task}
            id={task.id}
            handleShowDetail={handleShowDetail}
          />
        ))}
      </ul>
    </article>
  );
}

export default TaskList;

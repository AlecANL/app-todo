import SubTaskItem from '../subTasks-item/SubTaskItem';
import './sub-task-list.css';

function SubTaskList({ collection }) {
  return (
    <article className="subTasks">
      <ul className="subTasks-list">
        {collection.map(subTask => (
          <SubTaskItem
            key={subTask.id}
            name={subTask.name}
            date={subTask.date}
            id={subTask.id}
          />
        ))}
      </ul>
    </article>
  );
}

export default SubTaskList;

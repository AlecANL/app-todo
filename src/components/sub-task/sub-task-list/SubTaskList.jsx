import SubTaskItem from '../sub-task-item/SubTaskItem';
import './sub-task-list.css';

function SubTaskList({ subTasks = [] }) {
  return (
    <div className="subTask">
      {subTasks.map(task => (
        <SubTaskItem key={task.idSubTask} subTasks={task} />
      ))}
    </div>
  );
}

export default SubTaskList;

import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import ViewContext from '../../../contexts/ViewContext/ViewContext';
import SubTaskList from '../../sub-task/sub-task-list/SubTaskList';
// import { ViewUserContext } from '../../../contexts/ViewContext/ViewUserContext';
import { TaskItem } from '../task-item/TaskItem';

export function TaskList() {
  const {
    store: { tasks },
  } = useContext(TodoContext);

  const {
    viewState: { taskBelongArea },
  } = useContext(ViewContext);
  function renderList() {
    const list = tasks.filter(task => task.taskBelongArea === taskBelongArea);
    return list.map(item => (
      <TaskItem key={item.id} {...item}>
        <SubTaskList subTasks={item.subTasks} />
      </TaskItem>
    ));
  }

  return <section>{renderList()}</section>;
}

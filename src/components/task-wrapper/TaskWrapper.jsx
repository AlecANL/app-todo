import { TaskList } from './task-list/TaskList';
import './task-wrapper.css';

export function TaskWrapper() {
  return (
    <section className="taskWrapper">
      <div className="wrapper">
        <div className="taskWrapper-content">
          <TaskList />
        </div>
      </div>
    </section>
  );
}

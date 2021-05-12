import React, { useContext } from 'react';
import ViewContext from '../../contexts/ViewContext/ViewContext';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import { Header } from '../header/Header';
import { TaskWrapper } from '../task-wrapper/TaskWrapper';
import { TodoBanner } from '../todo-banner/TodoBanner';
import { SubTaskModal } from '../modal-wrapper/sub-task-modal/SubTaskModal';
import { CalendarWrapper } from '../calendar/calendar-wrapper/CalendarWrapper';
import './handle-todo-screen.css';

function TaskScreen() {
  const {
    viewState: { currentSection },
  } = useContext(ViewContext);

  const {
    store: { tasks },
  } = useContext(TodoContext);

  const currentTasks = tasks.filter(
    task => task.taskBelongArea === currentSection
  );

  return (
    <section className="todoScreen">
      <Header title={currentSection} />
      <section className="todos-section">
        {currentTasks.length <= 0 && <TodoBanner />}
        {currentTasks.length >= 0 && <TaskWrapper />}
        <SubTaskModal />
        <CalendarWrapper />
      </section>
    </section>
  );
}

export default TaskScreen;

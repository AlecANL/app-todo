import React, { useContext, useState } from 'react';
import ViewContext from '../../contexts/ViewContext/ViewContext';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import { Header } from '../header/Header';
import { TaskWrapper } from '../task-wrapper/TaskWrapper';
import { TodoBanner } from '../todo-banner/TodoBanner';
import { SubTaskModal } from '../modal-wrapper/sub-task-modal/SubTaskModal';
import { CalendarWrapper } from '../calendar/calendar-wrapper/CalendarWrapper';
import ModalWrapper from '../modal-wrapper/ModalWrapper';
import ModalInput from '../modal-input/ModalInput';
import './task-screen.css';

function TaskScreen() {
  const [show, setShowModal] = useState(false);

  const {
    viewState: { taskBelongArea },
  } = useContext(ViewContext);

  const {
    store: { tasks },
  } = useContext(TodoContext);

  const currentTasks = tasks.filter(
    task => task.taskBelongArea === taskBelongArea
  );

  function handleModalTask() {
    console.log(show);
    setShowModal(!show);
  }

  return (
    <>
      <Header title={taskBelongArea} />
      <section className="todoScreen">
        <section className="task-section">
          {currentTasks.length <= 0 && <TodoBanner />}
          {currentTasks.length >= 0 && <TaskWrapper />}
          <SubTaskModal />
          <CalendarWrapper />
          <ModalInput show={show} />
          <ModalWrapper handleModalTask={handleModalTask} />
        </section>
      </section>
    </>
  );
}

export default TaskScreen;

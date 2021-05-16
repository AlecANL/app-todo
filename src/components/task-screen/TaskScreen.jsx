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
import ModalAddSubTask from '../modal-add-sub-task/ModalAddSubTask';
import './task-screen.css';

function TaskScreen({ history }) {
  const [show, setShowModal] = useState(false);

  const {
    viewState: { taskBelongArea },
  } = useContext(ViewContext);

  const {
    store: { tasks },
    openSubTaskModal,
  } = useContext(TodoContext);

  const currentTasks = tasks.filter(
    task => task.taskBelongArea === taskBelongArea
  );

  function handleModalTask() {
    setShowModal(!show);
  }
  if (!taskBelongArea) {
    history.push('/');
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
          <ModalInput show={show} handleModalTask={handleModalTask} />

          <ModalWrapper handleModalTask={handleModalTask} />
          <ModalAddSubTask show={openSubTaskModal} />
        </section>
      </section>
    </>
  );
}

export default TaskScreen;

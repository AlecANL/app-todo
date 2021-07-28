import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CalendarButton from 'components/buttons/calendar-button/CalendarButton';
import SubmitButton from 'components/buttons/submit-button/submitButton';
import TagTaskButton from 'components/buttons/tag-task-button/TagTaskButton';
import Modal from 'components/modal-wrapper/ModalWrapper';
import { useForm } from 'hooks/useForm';
import { createNewTask, unSetDate } from 'redux/tasks/task.actions';
import { showModalAddTask } from 'redux/ui/ui.actions';
import './modal-form.css';

function ModalForm({ isShowModal }) {
  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);
  const { current_task_date: date } = useSelector(state => state.tasks);

  const [inputValues, setInputValues, reset] = useForm({
    task: '',
  });

  function createTask() {
    return {
      date,
      task: inputValues.task,
      taskArea: uiState.currentSection,
      subTasks: [],
      isCompleted: false,
    };
  }

  function defaultForm() {
    reset();
    dispatch(unSetDate());
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    const task = createTask();
    dispatch(showModalAddTask(false));
    dispatch(createNewTask(task));
    defaultForm();
  }
  return (
    <Modal isShowModal={isShowModal}>
      <form className="modalForm" onSubmit={handleSubmitForm}>
        <input
          autoComplete="off"
          placeholder="example., Read blog to Leonidas Esteban"
          type="text"
          name="task"
          value={inputValues.task}
          onChange={setInputValues}
        />
      </form>
      <div className="modalForm-content">
        <CalendarButton {...date} />
        <TagTaskButton name={uiState.currentSection} />
        <SubmitButton submitForm={handleSubmitForm} />
      </div>
    </Modal>
  );
}

export default ModalForm;

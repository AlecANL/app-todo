import { useContext, useState } from 'react';
import TodoContext from '../contexts/TodoContext/TodoContext';
import ViewContext from '../contexts/ViewContext/ViewContext';

export function useForm() {
  const [inputValue, setInputValue] = useState('');
  const { currentDate, setDate, dispatch } = useContext(TodoContext);
  const {
    viewState: { taskArea, taskBelongArea },
  } = useContext(ViewContext);

  function handleInputValue(e) {
    const value = e.target.value;
    setInputValue(value);
  }
  function resetForm() {
    setInputValue('');
    setDate({
      day: null,
      month: null,
      year: null,
    });
  }

  function createTask() {
    return {
      id: new Date().getTime(),
      taskName: inputValue,
      date: currentDate,
      taskArea,
      taskBelongArea,
      subTasks: [],
    };
  }

  function createTaskByEdited(task) {
    return {
      id: task.id,
      date: task.date,
      subTasks: task.subTasks,
      taskArea: task.taskArea,
      taskBelongArea: task.taskBelongArea,
      taskName: task.taskName,
    };
  }

  function createSubTask({ id, taskArea, taskBelongArea }) {
    return {
      idTask: id,
      idSubTask: new Date().getTime(),
      subTaskName: inputValue,
      taskArea,
      taskBelongArea,
      date: currentDate,
    };
  }

  function sendForm(task, addTask) {
    addTask(dispatch, task);
    resetForm();
  }

  return {
    sendForm,
    handleInputValue,
    createTask,
    createSubTask,
    inputValue,
    currentDate,
    createTaskByEdited,
  };
}

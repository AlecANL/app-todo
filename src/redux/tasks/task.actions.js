import { firestore, loadAllTasks } from 'firebase/firebase.utils';
import { taskTypes } from './task.types';
import { hasCollectionAction, loading } from 'redux/ui/ui.actions';

function addNewTasks(id, task) {
  return {
    type: taskTypes.ADD_TASK,
    payload: {
      id,
      ...task,
    },
  };
}

function setTasks(collection) {
  return {
    type: taskTypes.LOAD_TASKS,
    payload: collection,
  };
}

export function createNewTask(task) {
  return async (dispatch, getState) => {
    const id = getState().auth.id;
    try {
      dispatch(loading(true));
      const docRef = await firestore.collection(`${id}/app/tasks`).add(task);
      const addToCollection = addNewTasks(docRef.id, task);
      dispatch(addToCollection);
      dispatch(loading(false));
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadTasks(id) {
  return async (dispatch, getState) => {
    dispatch(hasCollectionAction(false));
    try {
      const tasks = await loadAllTasks(id);
      const tasksLoaded = setTasks(tasks);
      dispatch(tasksLoaded);
      dispatch(hasCollectionAction(true));
    } catch (error) {
      console.warn(error);
    }
  };
}

export function setDate(date) {
  return {
    type: taskTypes.SET_DATE,
    payload: date,
  };
}
export function unSetDate() {
  const defaultDate = new Date();
  const formatMonth = defaultDate.toLocaleDateString('en-us', {
    month: 'long',
  });
  const formatDay = defaultDate.toLocaleDateString('en-us', { day: 'numeric' });
  return {
    type: taskTypes.UNSET_DATE,
    payload: {
      day: formatDay,
      month: formatMonth,
    },
  };
}
export function setActiveTask(task) {
  return {
    type: taskTypes.ACTIVE_TASK,
    payload: task,
  };
}

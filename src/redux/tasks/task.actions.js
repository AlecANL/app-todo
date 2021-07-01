import { firestore, loadAllTasks } from 'firebase/firebase.utils';
import { taskTypes } from './task.types';

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
      const docRef = await firestore.collection(`${id}/app/tasks`).add(task);
      const addToCollection = addNewTasks(docRef.id, task);
      dispatch(addToCollection);
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadTasks(id) {
  return async dispatch => {
    try {
      const tasks = await loadAllTasks(id);
      const tasksLoaded = setTasks(tasks);
      dispatch(tasksLoaded);
    } catch (error) {
      console.warn(error);
    }
  };
}

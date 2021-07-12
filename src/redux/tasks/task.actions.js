import { firestore, loadAllTasks } from 'firebase/firebase.utils';
import { taskTypes } from './task.types';
import { hasCollectionAction } from 'redux/ui/ui.actions';

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
  return async (dispatch, getState) => {
    dispatch(hasCollectionAction(false));
    try {
      const tasks = await loadAllTasks(id);
      const tasksLoaded = setTasks(tasks);
      dispatch(tasksLoaded);
      console.log(tasks);
      dispatch(hasCollectionAction(true));
      console.log(!tasks.length);
      // if() {}
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
  return {
    type: taskTypes.UNSET_DATE,
  };
}

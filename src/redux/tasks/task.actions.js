import { firestore, loadAllTasks } from 'firebase/firebase.utils';
import { taskTypes } from './task.types';
import {
  hasCollectionAction,
  loading,
  showModalDetail,
} from 'redux/ui/ui.actions';

function addNewTasks(id, task) {
  return {
    type: taskTypes.ADD_TASK,
    payload: {
      id,
      ...task,
    },
  };
}

function addNewSubTask(idTask, idSubtask, subTask) {
  return {
    type: taskTypes.ADD_SUB_TASK,
    payload: {
      idTask,
      idSubtask,
      ...subTask,
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

export function deleteTaskFromDB(idTask) {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await firestore.doc(`${uid}/app/tasks/${idTask}`).delete();
    dispatch(deleteTask(idTask));
    dispatch(showModalDetail(false));
  };
}

export function addSubTaskToDB(idTask, subTask) {
  return async (_, getState) => {
    const { id } = getState().auth;
    const docRef = await firestore
      .collection(`${id}/app/tasks/${idTask}/subTasks`)
      .add(subTask);
    const addToSubTaskCollection = addNewSubTask(idTask, docRef.id, subTask);
    console.log(addToSubTaskCollection);
  };
}

function deleteTask(id) {
  return {
    type: taskTypes.DELETE_TASK,
    payload: id,
  };
}

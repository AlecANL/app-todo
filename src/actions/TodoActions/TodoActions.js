import { ADD, ADD_SUBTASK, DELETE, EDIT_TASK } from '../../types/types';

export function addTask(dispatch, task) {
  dispatch({
    type: ADD,
    payload: task,
  });
}

export function addSubTask(dispatch, task) {
  dispatch({
    type: ADD_SUBTASK,
    payload: task,
  });
}

export function deleteTask(dispatch, id) {
  dispatch({
    type: DELETE,
    payload: id,
  });
}

export function editTask(dispatch, task) {
  dispatch({
    type: EDIT_TASK,
    payload: task,
  });
}

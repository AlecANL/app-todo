import { ADD, ADD_SUBTASK } from '../../types/types';

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

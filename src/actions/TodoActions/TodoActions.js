import { ADD } from '../../types/types';

export function addTask(dispatch, task) {
  dispatch({
    type: ADD,
    payload: task,
  });
}

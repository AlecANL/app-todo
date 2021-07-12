import { taskTypes } from './task.types';

const initialState = {
  collections: [],
  current_task_date: null,
  activeTask: null,
};

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case taskTypes.ADD_TASK:
      return {
        ...state,
        collections: [...state.collections, action.payload],
      };
    case taskTypes.LOAD_TASKS:
      return {
        ...state,
        collections: [...action.payload],
      };
    case taskTypes.SET_DATE:
      return {
        ...state,
        current_task_date: action.payload,
      };
    case taskTypes.UNSET_DATE:
      return {
        ...state,
        current_task_date: null,
      };
    default:
      return state;
  }
}

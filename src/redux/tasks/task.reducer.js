import { taskTypes } from './task.types';

const initialState = {
  collections: [],
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
    default:
      return state;
  }
}

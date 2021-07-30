import { taskTypes } from './task.types';

const defaultDate = new Date();
const formatMonth = defaultDate.toLocaleDateString('en-us', { month: 'long' });
const formatDay = defaultDate.toLocaleDateString('en-us', { day: 'numeric' });

const initialState = {
  collections: [],
  current_task_date: { day: formatDay, month: formatMonth },
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
        current_task_date: action.payload,
      };
    case taskTypes.ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload,
      };
    case taskTypes.DELETE_TASK:
      return {
        ...state,
        activeTask: null,
        collection: state.collections.filter(
          task => task.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

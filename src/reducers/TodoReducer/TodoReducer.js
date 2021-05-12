import { ADD } from '../../types/types';

function TodoReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    default:
      return state;
  }
}

export default TodoReducer;

import { ADD, ADD_SUBTASK } from '../../types/types';

function TodoReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case ADD_SUBTASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === payload.idTask
            ? { ...task, subTasks: [...task.subTasks, payload] }
            : task
        ),
      };
    default:
      return state;
  }
}

export default TodoReducer;

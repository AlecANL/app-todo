import { CHANGE_VIEW } from '../../types/types';

function ViewReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_VIEW:
      return {
        ...state,
        taskBelongArea: payload.taskBelongArea,
        taskArea: payload.taskArea,
      };
    default:
      return state;
  }
}

export default ViewReducer;

import { CHANGE_VIEW } from '../../types/types';

function ViewReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_VIEW:
      return {
        ...state,
        view: payload.view,
        currentSection: payload.currentSection.toLowerCase(),
        taskBelongArea: payload.currentSection.toLowerCase(),
      };
    default:
      return state;
  }
}

export default ViewReducer;

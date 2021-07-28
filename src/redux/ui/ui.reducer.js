import { types } from './ui.type';

const initialState = {
  showModalCalendar: false,
  showModalDetail: false,
  showModalAddTask: false,
  showModalSubTask: false,
  hasCollection: false,
  showLoading: false,
  currentSection: localStorage.getItem('current_section') || 'programing',
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL_ADD_TASK:
      return {
        ...state,
        showModalAddTask: action.payload,
      };
    case types.SHOW_MODAL_CALENDAR:
      return {
        ...state,
        showModalCalendar: action.payload,
      };
    case types.SHOW_MODAL_DETAIL:
      return {
        ...state,
        showModalDetail: action.payload,
      };
    case types.SHOW_MODAL_SUB_TASK:
      return {
        ...state,
        showModalSubTask: action.payload,
      };
    case types.CHANGE_VIEW:
      return {
        ...state,
        currentSection: action.payload,
      };
    case types.HAS_COLLECTION:
      return {
        ...state,
        hasCollection: action.payload,
      };
    case types.SHOW_LOADING:
      return {
        ...state,
        showLoading: action.payload,
      };
    default:
      return state;
  }
}

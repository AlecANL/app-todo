const { types } = require('./ui.type');

export function showModalCalendar(isShow) {
  return {
    type: types.SHOW_MODAL_CALENDAR,
    payload: isShow,
  };
}

export function showModalAddTask(isShow) {
  return {
    type: types.SHOW_MODAL_ADD_TASK,
    payload: isShow,
  };
}

export function showModalDetail(isShow) {
  return {
    type: types.SHOW_MODAL_DETAIL,
    payload: isShow,
  };
}

export function showModalSubTak(isShow) {
  return {
    type: types.SHOW_MODAL_SUB_TASK,
    payload: isShow,
  };
}

export function changeView(viewName) {
  return {
    type: types.CHANGE_VIEW,
    payload: viewName,
  };
}

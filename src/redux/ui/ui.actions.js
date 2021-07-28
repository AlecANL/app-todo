const { types } = require('./ui.type');

export function showModalCalendar(isShow) {
  return {
    type: types.SHOW_MODAL_CALENDAR,
    payload: isShow,
  };
}

export function hasCollectionAction(isCollection) {
  return {
    type: types.HAS_COLLECTION,
    payload: isCollection,
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

export function loading(isLoading) {
  return {
    type: types.SHOW_LOADING,
    payload: isLoading,
  };
}

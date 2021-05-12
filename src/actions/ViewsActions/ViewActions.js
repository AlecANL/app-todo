import { CHANGE_VIEW } from '../../types/types';

export function changeView(dispatch, viewObj) {
  dispatch({
    type: CHANGE_VIEW,
    payload: viewObj,
  });
}

import React, { useReducer } from 'react';
import ViewContext from './ViewContext';
import ViewReducer from '../../reducers/ViewReducer/viewReducer';

export function ViewUserContext({ children }) {
  const initialValue = {
    view: 'home',
    currentSection: undefined,
    taskArea: null,
    taskBelongArea: null,
  };

  const [viewState, dispatch] = useReducer(ViewReducer, initialValue);

  const data = {
    viewState,
    dispatch,
  };

  return <ViewContext.Provider value={data}>{children}</ViewContext.Provider>;
}

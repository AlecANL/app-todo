import React, { useReducer, useEffect } from 'react';
import ViewContext from './ViewContext';
import ViewReducer from '../../reducers/ViewReducer/viewReducer';

export function ViewUserContext({ children }) {
  const initialValue = {
    taskArea: JSON.parse(localStorage.getItem('view-store')).taskArea || '',
    taskBelongArea:
      JSON.parse(localStorage.getItem('view-store')).taskBelongArea || '',
  };

  const [viewState, dispatch] = useReducer(ViewReducer, initialValue);

  useEffect(() => {
    localStorage.setItem('view-store', JSON.stringify(viewState));
  }, [viewState]);

  const data = {
    viewState,
    dispatch,
  };

  return <ViewContext.Provider value={data}>{children}</ViewContext.Provider>;
}

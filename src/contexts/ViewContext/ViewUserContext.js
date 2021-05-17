import React, { useReducer, useEffect } from 'react';
import ViewContext from './ViewContext';
import ViewReducer from '../../reducers/ViewReducer/viewReducer';
// const exampleStore = {
//   viewStore: {},
// };

const initialValue = {
  taskArea: JSON.parse(localStorage.getItem('view-store'))?.taskArea || '',
  taskBelongArea:
    JSON.parse(localStorage.getItem('view-store'))?.taskBelongArea || '',
};
export function ViewUserContext({ children }) {
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

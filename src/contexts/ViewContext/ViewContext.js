import { createContext } from 'react';

const ViewContext = createContext({
  viewState: {
    view: 'home',
  },
});
export default ViewContext;

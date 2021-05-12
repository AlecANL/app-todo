import React from 'react';
import TaskRoute from './routes/TaskRoute';
import { ViewUserContext } from './contexts/ViewContext/ViewUserContext';
import { ModalWrapper } from './components/modal-wrapper/ModalWrapper';
import TodoStore from './contexts/TodoContext/TodoStore';

import './App.css';

function App() {
  return (
    <ViewUserContext>
      <TodoStore>
        <div className="App">
          <TaskRoute />
          <ModalWrapper />
          {/* <div className="wrapper">
            <div className="App-content"></div>
          </div> */}
        </div>
      </TodoStore>
    </ViewUserContext>
  );
}

export default App;

import React from 'react';
import TaskRoute from './routes/TaskRoute';
import { ViewUserContext } from './contexts/ViewContext/ViewUserContext';
import TodoStore from './contexts/TodoContext/TodoStore';

import './App.css';

function App() {
  return (
    <ViewUserContext>
      <TodoStore>
        <div className="App">
          <TaskRoute />
        </div>
      </TodoStore>
    </ViewUserContext>
  );
}

export default App;

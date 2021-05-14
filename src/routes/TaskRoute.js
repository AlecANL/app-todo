import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import TaskScreen from '../components/task-screen/TaskScreen';
import HomeScreen from '../components/home-screen/HomeScreen';

function TaskRoute() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/todos" component={TaskScreen} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
}

export default TaskRoute;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import TaskScreen from '../components/task-screen/TaskScreen';
import HomeScreen from '../components/home-screen/HomeScreen';
import SearchScreen from '../components/search-screen/SearchScreen';

function TaskRoute() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/todos" component={TaskScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
}

export default TaskRoute;

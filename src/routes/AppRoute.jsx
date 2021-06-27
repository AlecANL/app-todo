import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Task from '../pages/Task/Task';
import AuthRoute from './AuthRoute';

function AppRoute() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRoute} />
          <Route path="/task" component={Task} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRoute;

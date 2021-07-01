import { auth } from 'firebase/firebase.utils';
import { useSessionUser } from 'hooks/useSessionUser';
import LoadingPage from 'pages/Loading/LoadingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Task from '../pages/Task/Task';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRoute() {
  const { isLoadingPage, isUserLogged } = useSessionUser(auth);

  if (isLoadingPage) return <LoadingPage />;

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isUserLogged}
          />
          <PublicRoute
            path="/auth"
            component={AuthRoute}
            isAuthenticated={isUserLogged}
          />
          <PrivateRoute
            path="/tasks"
            component={Task}
            isAuthenticated={isUserLogged}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRoute;

import { Route, Switch, Redirect } from 'react-router-dom';
import LoginScreen from '../pages/auth/Login/Login';
import RegisterScreen from '../pages/auth/Register/Register';
import NotFound from '../pages/NotFound/NotFound';

function AuthRoute() {
  return (
    <>
      <Switch>
        <Route path="/auth/login/" component={LoginScreen} />
        <Route path="/auth/register/" component={RegisterScreen} />
        <Route path="*" component={NotFound} />
        <Redirect to="/auth/login/" />
      </Switch>
    </>
  );
}

export default AuthRoute;

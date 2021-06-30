import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
  const { component: Component, isAuthenticated, ...rest } = props;

  function renderRoute(props) {
    if (!isAuthenticated) {
      return <Redirect to="/auth/login" />;
    }
    return <Component {...props} />;
  }
  return <Route {...rest} render={renderRoute} />;
}

export default PrivateRoute;

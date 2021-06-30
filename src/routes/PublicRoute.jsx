import { Redirect, Route } from 'react-router-dom';

function PublicRoute(props) {
  const { component: Component, isAuthenticated, ...rest } = props;
  function renderRoute(props) {
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  }
  return <Route {...rest} render={renderRoute} />;
}

export default PublicRoute;

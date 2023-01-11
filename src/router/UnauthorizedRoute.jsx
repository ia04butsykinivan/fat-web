import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useAuth } from '../hooks';

function UnauthorizedRoute() {
  const isAuthorized = useAuth();

  return !isAuthorized ? <Outlet /> : <Navigate to={ROUTES.MY_AUTOMATIONS} />;
}

export default UnauthorizedRoute;

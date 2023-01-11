import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useAuth } from '../hooks';
import { AuthorizedContainer } from '../components';

function AuthorizedRoute() {
  const isAuthorized = useAuth();

  return isAuthorized ? (
    <AuthorizedContainer>
      <Outlet />
    </AuthorizedContainer>
  ) : (
    <Navigate to={ROUTES.SIGN_IN} />
  );
}

export default AuthorizedRoute;

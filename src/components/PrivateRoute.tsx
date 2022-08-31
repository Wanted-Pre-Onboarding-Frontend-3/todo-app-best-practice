import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getToken } from '@/utils/storage';

const PrivateRoute = () => {
  const token = getToken();
  const { pathname } = useLocation();

  if (pathname === '/todos') {
    return token ? <Outlet /> : <Navigate to="/" />;
  }
  return token ? <Navigate to="/todos" /> : <Outlet />;
};

export default PrivateRoute;

import { useAuth } from '../provider/AuthProvider';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Routes() {
  const { token } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token && pathname !== '/auth/login' && pathname !== '/auth/signup') {
      navigate('/auth/login');
    }
    if ((token && pathname === '/auth/login') || pathname === '/auth/signup') {
      navigate('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <>{token ? <MainRoutes /> : <AuthRoutes />}</>;
}

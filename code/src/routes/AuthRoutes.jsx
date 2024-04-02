import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;

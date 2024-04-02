import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const localStorageToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;
  const [token, setToken] = useState(localStorageToken);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

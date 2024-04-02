import { AuthProvider } from './AuthProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
const Provider = ({ children }) => {
  const Client_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={Client_ID}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools
            initialIsOpen={false}
            position="bottom"
            buttonPosition="bottom-right"
          />
        </QueryClientProvider>
      </GoogleOAuthProvider>
      <Toaster />
    </AuthProvider>
  );
};

export default Provider;

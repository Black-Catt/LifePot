import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FC, PropsWithChildren } from 'react';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../../context/AuthProvider';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ children, ...rest }) => {
    // const { user } = useAuth()
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)
    


    return (
        <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
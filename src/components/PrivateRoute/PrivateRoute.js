import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)


    if (loading) {
        // You might want to handle loading state here (optional)
        return <div>Loading...</div>;
    }

    if (user) {
        return children
    }

    if (!user) {
        // If user is not authenticated, navigate to login
        navigate('/login', { state: { from: location }, replace: true })
        // return <Navigate to="/login" state={{ from: rest.location }} />;
    }

    
};

export default PrivateRoute;

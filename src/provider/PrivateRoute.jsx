import React, { use } from 'react'
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    // console.log(user);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    // jodi user thake taholy reture korbo children y 
    // jodi user na thaky taholy user k navigate kore dibo login y
}

export default PrivateRoute

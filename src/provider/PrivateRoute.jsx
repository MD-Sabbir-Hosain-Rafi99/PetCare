import React, { use } from 'react'
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    // console.log(user);

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>
    // jodi user thake taholy reture korbo children y 
    // jodi user na thaky taholy user k navigate kore dibo login y
}

export default PrivateRoute

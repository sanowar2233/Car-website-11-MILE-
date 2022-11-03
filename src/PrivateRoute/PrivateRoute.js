import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserInfo/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location=useLocation()
    
    if(loading){
        return <h2>loading..............</h2>
    }
    
    if(user){

        return children

    }
    return <Navigate state={{form:location}}replace></Navigate>
   
};

export default PrivateRoute;
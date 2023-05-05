import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user}=useContext(AuthContext);
    const location = useLocation();
    console.log(location);
   
    // If there is a user
    if(user){// Go to the private route
        return children;
    }

    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivateRoutes;
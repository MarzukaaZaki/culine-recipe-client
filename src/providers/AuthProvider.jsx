import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

// Initialize the authentication service from firebase
const auth = getAuth(app);

// Create a context
export const AuthContext = createContext(null);

// Define a Provider Component
const AuthProvider = ({children}) => {
    const authInfo = {displayName: 'Dagger Dawn'}; 
    return (
        <div>
            {/* Create a context provider */}
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;
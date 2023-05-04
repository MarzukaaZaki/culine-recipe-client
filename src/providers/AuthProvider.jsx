import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

// Initialize the authentication service from firebase
const auth = getAuth(app);

// Create a context
export const AuthContext = createContext(null);

// Define a Provider Component
const AuthProvider = ({children}) => {
    // Set a state to track if there is a user
    const [user, setUser] = useState(null);

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {createUser,}; 
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
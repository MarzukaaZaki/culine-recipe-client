import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config';

// Initialize the authentication service from firebase
const auth = getAuth(app);

// Create a context
export const AuthContext = createContext(null);

// Define a Provider Component
const AuthProvider = ({children}) => {
    // Set a state to track if there is a user
    const [user, setUser] = useState(null);

    // Creation of user
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Signing in a user
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Signing out a user
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        logOut}; 
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
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
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

    // Google Sign-In
    // Create a google auth provider
    const googleAuthProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Github Sign-In
    // Create a github provider
    const githubAuthProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }
    useEffect( ()=>{
        // Setting an observer on the auth object
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser); // Set the signed-in user to state
            
        });
        return ()=>{
            unsubscribe(); // Unsubscribing from the observer when it's no longer needed.
        }
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn}; 
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
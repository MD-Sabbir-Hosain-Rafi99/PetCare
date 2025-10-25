import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';

// Contex create korar step 3ta
// Step-1 : Create Context and export korbo bcz ayi context ta amr multiple jaigaty use korte hobe
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // state er user jodi share kori taholy object create korbo

    const [loading, setLoading] = useState(true)

    // User k signUp er jonno akta function create korsi
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // User SignOutUser er jonno function create kori
    const signOutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    const authData = {
        user,
        setUser,
        createUser,
        signOutUser,
        signIn,
        loading,
        setLoading,
    }

    // Step-2 authContext k AuthProvider theke return kore dawa
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider

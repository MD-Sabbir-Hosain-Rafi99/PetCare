import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';

// Contex create korar step 3ta
// Step-1 : Create Context and export korbo bcz ayi context ta amr multiple jaigaty use korte hobe
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // state er user jodi share kori taholy object create korbo

    // User k signUp er jonno akta function create korsi
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    const authData = {
        user,
        setUser,
        createUser,
    }

    // Step-2 authContext k AuthProvider theke return kore dawa
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider

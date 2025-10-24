import React, { createContext, useState } from 'react'

// Contex create korar step 3ta
// Step-1 : Create Context and export korbo bcz ayi context ta amr multiple jaigaty use korte hobe
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // state er user jodi share kori taholy object create korbo
    const authData = {
        user,
        setUser,
    }

    // Step-2 authContext k AuthProvider theke return kore dawa
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider

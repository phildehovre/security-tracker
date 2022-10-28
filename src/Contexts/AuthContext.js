import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState, useContext } from 'react'
import { auth } from '../Util/firebase'

export const AuthContext = React.createContext({})

export function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({ children }) {

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            setCurrentUser(user)
        }).catch((err) => {
            console.log(err)
        })
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //     })
    //     return unsubscribe
    // }, [])

    const [currentUser, setCurrentUser] = useState(null)


    const value = { currentUser, signup }

    return (
        <AuthContext.Provider value={{ ...value }} >
            {children}
        </ AuthContext.Provider>
    )
}


export default AuthProvider
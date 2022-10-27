import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { client_id } from '../Secrets/auth'

export const AuthContext = React.createContext()


function AuthProvider({ children }) {

    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState(null)

    const handleCallbackResponse = (res) => {
        const userObject = jwt_decode(res.credential)
        setAuth(userObject.email_verified)
        setUser(userObject)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: client_id,
            callback: handleCallbackResponse
        });
    })

    return (
        <AuthContext.Provider value={{ auth, user }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
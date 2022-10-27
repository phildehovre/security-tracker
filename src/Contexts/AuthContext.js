import React, { useEffect, useState, useContext } from 'react'

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({ children }) {

    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState('PLACEHOLDER')

    return (
        <AuthContext.Provider value={{ auth, user }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
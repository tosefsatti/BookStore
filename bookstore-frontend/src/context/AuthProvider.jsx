import React, { createContext, useContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({children})
{
    const initialAuthUser = localStorage.getItem("Users");

    const [authUser, setAuthUser] = useState(() => {
        try {
            return initialAuthUser ? JSON.parse(initialAuthUser) : undefined
        } catch (error) {
            console.error("Error parsing JSON from localStorage", error);
            return undefined;
        }
    });

   

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
{children}
        </AuthContext.Provider>
    )
}

export const useAuth =() => useContext(AuthContext);

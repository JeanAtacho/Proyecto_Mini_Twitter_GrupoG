import { useMemo, useState } from "react"
import AuthContext from "../contexts/AuthContext.js"
import isEmpty from "../helpers/isEmpty.js"
import React, { useCallback } from 'react';

const AuthProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem('user')) || {}
  const [currentUser, setCurrentUser] = useState(localUser)

  const setUserHandler = useCallback((user = {}) => {
    
    if ('user' in user && 'text' in user.user)  return

    if (isEmpty(user)) return

    const newUser = {
      ...currentUser,
      ...user
    }

    localStorage.setItem('user', JSON.stringify(newUser))
    setCurrentUser(newUser)
  }, [currentUser]);

  const logoutHandler = () => {
    localStorage.removeItem('user')
    return setCurrentUser(null)
  }

  const authValues = useMemo(() => {
    return {
      user: currentUser?.user || null,
      token: currentUser?.token,
      isAuthenticated: !!currentUser?.token,
      setUser: setUserHandler,
      logout: logoutHandler
    }
  })

  return <AuthContext.Provider value={authValues}>
    { children }
  </AuthContext.Provider>
}

export default AuthProvider

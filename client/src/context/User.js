import React, { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export const Context = ({ children }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState(null)
  const [userData, setUserData] = useState({})

  const initialUser = {
    aadhaarNumber,
    setAadhaarNumber,
    userData,
    setUserData
  }

  return (
    <UserContext.Provider value={initialUser}>{children}</UserContext.Provider>
  )
}

export const userContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error(`userContext context can only  
        be used in a component wrapped with UserContext`)
  }
  return context
}

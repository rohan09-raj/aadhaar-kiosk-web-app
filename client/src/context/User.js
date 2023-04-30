import React, { createContext, useState, useContext } from 'react'
import { initialUserData } from '../constants/userData'

export const UserContext = createContext()

export const Context = ({ children }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState(null)
  const [eidNumber, setEidNumber] = useState(null)
  const [userData, setUserData] = useState(initialUserData)
  const [oriUserData, setOriUserData] = useState(initialUserData)

  const initialUser = {
    aadhaarNumber,
    setAadhaarNumber,
    eidNumber,
    setEidNumber,
    userData,
    setUserData,
    oriUserData,
    setOriUserData
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

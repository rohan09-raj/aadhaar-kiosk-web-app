import React, { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export const Context = ({ children }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState(null)
  const [userData, setUserData] = useState({
    indianResident: '',
    name: '',
    gender: '',
    dob: new Date().toISOString().slice(0, 10),
    mobile: '',
    email: '',
    address: {
      houseNo: '',
      street: '',
      locality: '',
      landmark: '',
      village: '',
      district: {},
      state: {},
      postOffice: '',
      pincode: ''
    },
    photo: '',
    documents: {
      POI: '',
      POA: '',
      DOB: ''
    }
  })
  const [oriUserData, setOriUserData] = useState({
    indianResident: '',
    name: '',
    gender: '',
    dob: new Date().toISOString().slice(0, 10),
    mobile: '',
    email: '',
    address: {
      houseNo: '',
      street: '',
      locality: '',
      landmark: '',
      village: '',
      district: {},
      state: {},
      postOffice: '',
      pincode: ''
    },
    photo: '',
    documents: {
      POI: '',
      POA: '',
      DOB: ''
    }
  })

  const initialUser = {
    aadhaarNumber,
    setAadhaarNumber,
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

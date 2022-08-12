import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const FormTwo = () => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/enrollment/address')
  }

  useEffect(() => {
    const eMail = document.getElementById('email')
    function emailValidator () {
      if (eMail.validity.patternMismatch) {
        eMail.setCustomValidity('Email must contain @')
      } else {
        eMail.setCustomValidity('')
      }
    }
    console.log(eMail)
    eMail.addEventListener('input', emailValidator)
    return () => {
      eMail.removeEventListener('input', emailValidator)
    }
  }, [])

  return (
    <form onSubmit={() => handleSubmit()} className="formtwo">
      <Header subheading="Enrollment" />
      <Input
        id="mobile"
        value={mobileNumber}
        label="Mobile"
        type="text"
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Enter your Mobile Number"
        pattern="[0-9]+"
        maxLength="10"
        minLength="10"
      />
      <Input
        id="email"
        value={email}
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email ID"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <SubmitButton />
    </form>
  )
}

export default FormTwo

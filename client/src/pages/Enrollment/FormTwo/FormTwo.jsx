import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const FormTwo = () => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  return (
    <div className="formtwo">
      <Header subheading="Enrollment" />
      <Input
        id="mobile"
        value={mobileNumber}
        label="Mobile"
        type="text"
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Enter your Mobile Number"
      />
      <Input
        id="email"
        value={email}
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email ID"
      />
      <SubmitButton onClick={() => navigate('/enrollment/address')} />
    </div>
  )
}

export default FormTwo

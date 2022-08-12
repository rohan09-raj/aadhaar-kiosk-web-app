import React from 'react'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const FormTwo = ({ formData, setFormData }) => {
  return (
    <div className="formtwo">
      <Header subheading="Enrollment" />
      <Input
        id="mobile"
        value={formData.mobile}
        label="Mobile"
        type="text"
        onChange={(e) => {
          setFormData({
            ...formData,
            mobile: e.target.value
          })
        }}
        placeholder="Enter your Mobile Number"
        pattern="[0-9]+"
        maxLength="10"
        minLength="10"
      />
      <Input
        id="email"
        value={formData.email}
        label="Email"
        type="email"
        onChange={(e) => {
          setFormData({
            ...formData,
            email: e.target.value
          })
        }}
        placeholder="Enter your Email ID"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <SubmitButton />
    </div>
  )
}

export default FormTwo

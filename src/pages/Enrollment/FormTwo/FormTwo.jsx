import React from 'react'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const FormTwo = () => {
  return (
    <div className="formtwo">
      <Header subheading="Enrollment" />
      <Input id="mobile" value="Mobile" label="Mobile" type="text" />
      <Input id="email" value="Email" label="Email" type="email" />
      <SubmitButton />
    </div>
  )
}

export default FormTwo

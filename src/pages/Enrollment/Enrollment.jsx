import React from 'react'
import Header from '../../components/Header/Header'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import FormOne from './FormOne/FormOne'

const Enrollment = () => {
  return (
    <>
      <Header subheading="Enrollment" />
      <FormOne />
      <SubmitButton />
    </>
  )
}

export default Enrollment

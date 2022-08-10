import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import FormOne from './FormOne/FormOne'

const Enrollment = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/enrollment/form2')
  }

  return (
    <>
      <Header subheading="Enrollment" />
      <form onSubmit={() => handleSubmit()}>
        <FormOne />
        <SubmitButton />
      </form>
    </>
  )
}

export default Enrollment

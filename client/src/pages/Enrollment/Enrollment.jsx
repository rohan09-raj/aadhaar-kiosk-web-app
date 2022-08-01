import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import FormOne from './FormOne/FormOne'

const Enrollment = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header subheading="Enrollment" />
      <FormOne />
      <SubmitButton onClick={() => navigate('/enrollment/form2')} />
    </>
  )
}

export default Enrollment

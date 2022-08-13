import React from 'react'
import Header from '../../../components/Header/Header'
import BiometricCard from '../../../components/BiometricCard/BiometricCard'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { Link } from 'react-router-dom'

const BiometricSelect = ({ page, setPage }) => {
  return (
    <>
      <Header subheading="Update" />
      <BiometricCard label="Photograph" onclick={() => setPage(0)} />
      <BiometricCard label="Fingerprint Scan" onclick={() => setPage(1)} />
      <BiometricCard label="Iris Scan" onclick={() => setPage(2)} />
      <Link to="/update/select-update">
      <SubmitButton />
      </Link>
    </>
  )
}

export default BiometricSelect

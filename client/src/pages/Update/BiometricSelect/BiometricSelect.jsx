import React from 'react'
import Header from '../../../components/Header/Header'
import BiometricCard from '../../../components/BiometricCard/BiometricCard'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BiometricSelect = ({ page, setPage }) => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <BiometricCard label={t('PHOTOGRAPH')} onclick={() => setPage(0)} />
      <BiometricCard label={t('FINGERPRINT_SCAN')} onclick={() => setPage(1)} />
      <BiometricCard label={t('IRIS_SCAN')} onclick={() => setPage(2)} />
      <Link to="/update/select-update">
        <SubmitButton />
      </Link>
    </>
  )
}

export default BiometricSelect

import React from 'react'
import Header from '../../../components/Header/Header'
import BiometricCard from '../../../components/BiometricCard/BiometricCard'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { Link } from 'react-router-dom'
import PopUpModal from '../../../components/Modal/Modal'
import { useTranslation } from 'react-i18next'

const BiometricSelect = ({ page, setPage }) => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <PopUpModal
        title="Select the option to be edited"
        image={`${process.env.PUBLIC_URL}/assets/images/biometrics.svg`}
        description={
          <>
            <ul>
              <li className="list__item">
                Click on the edit button to update the required biometrics
              </li>
              <li className="list__item">
                You can edit your Photograph/Fingerprints/Iris Scans
              </li>
            </ul>
          </>
        }
      />
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

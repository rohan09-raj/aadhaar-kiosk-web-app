import React from 'react'
import Header from '../../../components/Header/Header'
import BiometricCard from '../../../components/BiometricCard/BiometricCard'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { Link } from 'react-router-dom'
import PopUpModal from '../../../components/Modal/Modal'
import { useTranslation } from 'react-i18next'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

const BiometricSelect = ({ page, setPage }) => {
  const { t } = useTranslation()
  const description = [
    'CLICK_ON_THE_EDIT_BUTTON_TO_UPDATE_THE_REQUIRED_BIOMETRICS',
    'YOU_CAN_EDIT_YOUR_PHOTOGRAPH_/_FINGERPRINTS_/_IRIS_SCANS'
  ]
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/biometric-update`}
      />
      <PopUpModal
        title="SELECT_THE_OPTION_TO_BE_EDITED"
        image={`${process.env.PUBLIC_URL}/assets/images/biometrics.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (
                <li className="list__item" key="id">
                  {t(item)}
                </li>
              ))}
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

import { t } from 'i18next'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../../components/Card/Card'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { userContext } from '../../../context/User'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

import styles from './UpdateSelect.module.css'

const UpdateSelect = () => {
  const { userData, oriUserData } = userContext()
  const navigate = useNavigate()
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/choose-demographic-or-biometric`}
      />
      <div className={styles.card__container}>
        <Link to="/update/demographic">
          <Card
            title={t('DEMOGRAPHIC')}
            image={`${process.env.PUBLIC_URL}/assets/images/demographic.svg`}
          />
        </Link>
        <Link to="/update/biometric">
          <Card
            title={t('BIOMETRIC')}
            image={`${process.env.PUBLIC_URL}/assets/images/biometrics.svg`}
          />
        </Link>
        <SubmitButton
          onClick={() => {
            if (userData === oriUserData) {
              navigate('/no-update')
            } else {
              navigate('/update/agreement')
            }
          }}
        />
      </div>
    </>
  )
}

export default UpdateSelect

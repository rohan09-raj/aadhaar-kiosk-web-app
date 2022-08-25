/* eslint-disable multiline-ternary */
import React from 'react'
import Header from '../../components/Header/Header'
import { useTranslation } from 'react-i18next'
import styles from './EnrollmentStatus.module.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../context/User'
import AudioAutoplay from '../../components/AudioAutoplay/AudioAutoplay'

const UpdateStatus = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const { setAadhaarNumber, setEidNumber, userData } = userContext()

  return (
    <>
      <Header subheading={t('UPDATE_STATUS')} />
      <div className={styles.status__container}>
        <h3 className={styles.status__title}>{t('STATUS')}</h3>
        {userData?.isUpdating ? (
          <>
            <AudioAutoplay
              audio={`${process.env.PUBLIC_URL}/assets/audios/aadhaar-update-status-is-pending`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/pending.svg`}
              alt=""
              height="200px"
              width="200px"
            />
            <h1 className={styles.status}>{t('PENDING')}</h1>
            <p className={styles.status__content}>
              {t('YOUR_AADHAAR_UPDATE_STATUS_IS_IN_PENDING_STATE')}
            </p>
            <p className={styles.status__content}>
              {t('PLEASE_HAVE_PATIENCE')}
            </p>
          </>
        ) : (
          <>
            <AudioAutoplay
              audio={`${process.env.PUBLIC_URL}/assets/audios/aadhaar-update-status-is-approved`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/approved.svg`}
              alt=""
              height="200px"
              width="200px"
            />
            <h1 className={styles.status}>{t('APPROVED')}</h1>
            <p className={styles.status__content}>
              {t('YOUR_AADHAAR_UPDATE_STATUS_IS_APPROVED')}
            </p>
          </>
        )}
        <Button
          variant="contained"
          onClick={() => {
            setAadhaarNumber(null)
            setEidNumber(null)
            navigate('/')
          }}
          sx={{ margin: '30px' }}
        >
          {t('BACK_TO_HOME')}
        </Button>
      </div>
    </>
  )
}

export default UpdateStatus

/* eslint-disable multiline-ternary */
import React from 'react'
import Header from '../../components/Header/Header'
import { Grid, Button } from '@mui/material'
import Input from '../../components/Input/Input'
import { useTranslation } from 'react-i18next'
import { validAadhaar } from '../../constants/RegEx'
import { ToastContainer, toast } from 'react-toastify'
import { userContext } from '../../context/User'

import styles from './CheckStatus.module.css'
import { useNavigate } from 'react-router-dom'
import AudioAutoplay from '../../components/AudioAutoplay/AudioAutoplay'

const CheckStatus = () => {
  const { t } = useTranslation()
  const [status, setStatus] = React.useState('enrollment')
  const { aadhaarNumber, setAadhaarNumber, eidNumber, setEidNumber } =
    userContext()
  const navigate = useNavigate()

  console.log(eidNumber, aadhaarNumber)

  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      <Header subheading={t('STATUS')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/check-status-main-screen`}
      />
      <div className={styles.status}>
        <div className={styles.formone__radio}>
          <span className={styles.formone__status}>
            <input
              type="radio"
              id="enrollment"
              name="status"
              value={status}
              onChange={() => {
                setStatus('enrollment')
              }}
              required
            />
            <label htmlFor="enrollment">{t('ENROLLMENT_STATUS')}</label>
          </span>
          <span className={styles.formone__status}>
            <input
              type="radio"
              id="update"
              name="status"
              value={status}
              onChange={() => {
                setStatus('update')
              }}
              required
            />
            <label htmlFor="update">{t('UPDATE_STATUS')}</label>
          </span>
        </div>
      </div>
      <div>
        {status === 'enrollment' ? (
          <div className={styles.subheading__container}>
            <h3 className={styles.subheading}>
              {t('PROVIDE_YOUR_EID_NUMBER')}
            </h3>
            <Input
              type="text"
              id="eidNumber"
              value={eidNumber}
              onChange={(e) => setEidNumber(e.target.value)}
              placeholder={`${t('ENTER_YOUR_EID_NUMBER')}`}
              required
            />
            <Grid container columnSpacing={10} justifyContent="center">
              <Grid item>
                <Button
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    navigate('/status/otp')
                  }}
                >
                  {t('SUBMIT')}
                </Button>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div className={styles.subheading__container}>
            <h3 className={styles.subheading}>
              {t('PROVIDE_YOUR_AADHAAR_NUMBER')}
            </h3>
            <Input
              type="number"
              id="aadhaarNumber"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value)}
              placeholder={`${t('ENTER_YOUR_AADHAAR_NUMBER')}`}
              required
            />
            <Grid container columnSpacing={10} justifyContent="center">
              <Grid item>
                <Button
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    if (!validAadhaar.test(aadhaarNumber)) {
                      toast.error(t('PLEASE_ENTER_VALID_AADHAAR'))
                    } else {
                      navigate('/status/otp')
                    }
                  }}
                >
                  {t('SUBMIT')}
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </>
  )
}

export default CheckStatus

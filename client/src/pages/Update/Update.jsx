import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Update.module.css'
import Input from '../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { userContext } from '../../context/User'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import { validAadhaar } from '../../constants/RegEx'
import AudioAutoplay from '../../components/AudioAutoplay/AudioAutoplay'

const Update = () => {
  const { aadhaarNumber, setAadhaarNumber } = userContext()

  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      <Header subheading={`${t('UPDATE')}`} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/enter-aadhaar-no`}
      />
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
              sx={{ margin: '20px 0px', fontSize: '1.5rem', padding: '10px 30px' }}
              onClick={() => {
                if (!validAadhaar.test(aadhaarNumber)) {
                  toast.error(t('Please enter a valid aadhaar number'))
                } else {
                  navigate('/update/otp')
                }
              }}
            >
              {t('SUBMIT')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Update

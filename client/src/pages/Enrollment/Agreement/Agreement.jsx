import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import CardAgreement from '../../../components/Card/CardAgreement'
import styles from './Agreement.module.css'
import Input from '../../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { sendOTP } from '../../../services/apiservice'
import { userContext } from '../../../context/User'
import { useMutation } from 'react-query'

const Agreement = () => {
  const { t } = useTranslation()
  const [otp, setOtp] = useState(0)
  const { userData } = userContext()
  console.log(userData)
  const { data, mutate } = useMutation(() =>
    sendOTP({ mobile: `+91${userData?.mobile}` })
  )

  const verifyOTP = () => {
    if (data?.data?.otpCode === Number(otp)) {
      console.log('Verified', data?.data?.otpCode, otp)
    } else {
      console.log(typeof otp)
      console.log(typeof data?.data?.otpCode)
      console.log('Incorrect OTP', data?.data?.otpCode, otp)
    }
  }

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <div className={styles.card__container}>
        <CardAgreement
          image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        />
      </div>
      <Input
        type="number"
        id="otp"
        value={otp}
        label={t('PLEASE_VERIFY_YOUR_IDENTITY')}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="XXXXXX"
      />
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => mutate()}
          >
            {t('SEND_OTP')}
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => verifyOTP()}
          >
            {t('VERIFY_OTP')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Agreement

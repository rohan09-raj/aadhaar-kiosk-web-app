import React from 'react'
import Header from '../../../components/Header/Header'
import CardAgreement from '../../../components/Card/CardAgreement'
import styles from './Agreement.module.css'
import Input from '../../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Agreement = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <div className={styles.card__container}>
        <CardAgreement
          image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        />
      </div>
      <Input
        type="text"
        id="otp"
        label={t('PLEASE_VERIFY_YOUR_IDENTITY')}
        placeholder="XXXXXX"
      />
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
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
          >
            {t('RESEND')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Agreement

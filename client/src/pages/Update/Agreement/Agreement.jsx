import React from 'react'
import Header from '../../../components/Header/Header'
import CardAgreement from '../../../components/Card/CardAgreement'
import styles from './Agreement.module.css'
import Input from '../../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import { useMutation } from 'react-query'
import { updateUser } from '../../../services/apiservice'

const Agreement = () => {
  const { userData } = userContext()
  const updateUse = useMutation(() => updateUser(userData._id, { ...userData }))

  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <div className={styles.card__container}>
        <CardAgreement
          image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        />
      </div>
      <Input
        type="text"
        id="otp"
        label={t('PLEASE_VERIFY_YOUR_IDENTITY')}
        placeholder="XXXX"
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
      <Link to="/update/final-slip">
        <SubmitButton onClick={() => updateUse.mutate()} />
      </Link>
    </>
  )
}

export default Agreement

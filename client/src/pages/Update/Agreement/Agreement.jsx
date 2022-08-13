import React from 'react'
import Header from '../../../components/Header/Header'
import CardAgreement from '../../../components/Card/CardAgreement'
import styles from './Agreement.module.css'
import Input from '../../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const Agreement = () => {
  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.card__container}>
        <CardAgreement
          image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        />
      </div>
        <Input
        type="text"
        id="otp"
        label="Please verify your identity by receiving the OTP on your registered mobile number xxxxxxxx15"
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
            Send OTP
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            Resend
          </Button>
        </Grid>
      </Grid>
      <Link to ="/update/final-slip">
      <SubmitButton />
      </Link>
    </>
  )
}

export default Agreement

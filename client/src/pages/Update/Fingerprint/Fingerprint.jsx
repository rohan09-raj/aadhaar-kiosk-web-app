import React from 'react'
import Header from '../../../components/Header/Header'
import CardBiometrics from '../../../components/Card/CardBiometrics'
import styles from './Fingerprint.module.css'
import { Button, Grid, Typography } from '@mui/material'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const Fingerprint = () => {
  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.card__container}>
        <CardBiometrics
          image={`${process.env.PUBLIC_URL}/assets/images/fingerprint.svg`}
        />
        <CardBiometrics
          image={`${process.env.PUBLIC_URL}/assets/images/fingerprint.svg`}
        />
      </div>
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            Scan
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <div>
        <Grid container justifyContent="center">
          <Typography align="center">
            Please put your eyes inside the iris scanner.
            <br />
            Wait for prompt and beep sound to remove your eyes
          </Typography>
        </Grid>
      </div>
      <SubmitButton />
    </>
  )
}

export default Fingerprint

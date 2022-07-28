import React from 'react'
import Header from '../../../components/Header/Header'
import CardScanner from '../../../components/Card/CardScanner'
import styles from './PhotoCapture.module.css'
import { Button, Grid, Typography } from '@mui/material'

const PhotoCapture = () => {
  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.card__container}>
        <CardScanner
          image={`${process.env.PUBLIC_URL}/assets/images/capture.svg`}
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
            Capture
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
            Please look into the camera<br></br>
            Click Capture to Capture the photo<br></br>
            Click Reset the remove the captured photo
          </Typography>
        </Grid>
      </div>
    </>
  )
}

export default PhotoCapture

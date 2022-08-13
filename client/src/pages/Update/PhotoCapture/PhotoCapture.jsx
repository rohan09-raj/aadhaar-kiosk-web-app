/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import styles from './PhotoCapture.module.css'
import { Button, Grid, Typography } from '@mui/material'

const PhotoCapture = () => {
  const [photo, setPhoto] = useState()

  const navigate = useNavigate()

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setPhoto(imageSrc)
  })

  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.card__container}>
        {photo === '' ? (
          <Webcam
            audio={false}
            height={300}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={{
              height: 300,
              width: 500,
              facingMode: 'user'
            }}
          />
        ) : (
          <img src={photo} />
        )}
      </div>
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
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
            onClick={(e) => {
              e.preventDefault()
              setPhoto('')
            }}
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
      <SubmitButton onClick={() => navigate('/enrollment/documents')} />
    </>
  )
}

export default PhotoCapture

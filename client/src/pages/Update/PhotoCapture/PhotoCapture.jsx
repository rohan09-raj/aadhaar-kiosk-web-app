/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import styles from './PhotoCapture.module.css'
import { Button, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const PhotoCapture = () => {
  const { t } = useTranslation()
  const [photo, setPhoto] = useState()

  const navigate = useNavigate()

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setPhoto(imageSrc)
  })

  return (
    <>
      <Header subheading={t('UPDATE')} />
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
            {t('CAPTURE')}
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
            {t('RESET')}
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <div>
        <Grid container justifyContent="center">
          <Typography align="center">
            {t('PLEASE_LOOK_INTO_THE_CAMERA')}
            <br></br>
            {t('CLICK_CAPTURE_TO_CAPTURE_THE_PHOTO')}
            <br></br>
            {t('CLICK_RESET_TO_REMOVE_THE_CAPTURED_PHOTO')}
          </Typography>
        </Grid>
      </div>
      <SubmitButton onClick={() => navigate('/enrollment/documents')} />
    </>
  )
}

export default PhotoCapture

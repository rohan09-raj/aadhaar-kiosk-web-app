/* eslint-disable multiline-ternary */
import React from 'react'
import Webcam from 'react-webcam'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import styles from './PhotoCapture.module.css'
import { Button, Grid, Typography } from '@mui/material'
import { t } from 'i18next'

const PhotoCapture = ({ formData, setFormData }) => {
  const navigate = useNavigate()

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setFormData({ ...formData, photo: imageSrc })
  })

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <div className={styles.card__container}>
        {formData.photo === '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={600}
            videoConstraints={{
              height: 400,
              width: 600,
              facingMode: 'user'
            }}
          />
        ) : (
          <img src={formData.photo} />
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
              setFormData({ ...formData, photo: '' })
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

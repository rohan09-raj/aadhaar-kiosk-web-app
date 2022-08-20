/* eslint-disable multiline-ternary */
import React from 'react'
import Webcam from 'react-webcam'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import styles from './PhotoCapture.module.css'
import { Button, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'

const PhotoCapture = () => {
  const { t } = useTranslation()
  const { userData, setUserData, oriUserData } = userContext()

  const navigate = useNavigate()

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setUserData({ ...userData, photo: imageSrc })
  })

  console.log(oriUserData.photo)

  const handleSubmit = () => {
    console.log(userData.photo)
    if (userData.photo) {
      navigate('/enrollment/documents')
    }
  }

  console.log(userData?.photo)

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <div className={styles.card__container}>
        {userData?.photo === '' ? (
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
          <img src={userData?.photo} />
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
              setUserData({ ...userData, photo: '' })
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
      <SubmitButton onClick={() => handleSubmit} />
    </>
  )
}

export default PhotoCapture
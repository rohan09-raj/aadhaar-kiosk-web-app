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
import PopUpModal from '../../../components/Modal/Modal'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

const PhotoCapture = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()

  const navigate = useNavigate()

  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setUserData({ ...userData, photo: imageSrc })
  })

  const handleSubmit = () => {
    console.log(userData.photo)
    if (userData.photo) {
      navigate('/enrollment/documents')
    }
  }

  const description = [
    'ENSURE_THAT_YOUR_PHOTO_IS_CLEAR_AND_IN_FOCUS',
    'ALSO_ENSURE_THAT_YOU_ARE_IN_THE_CENTER_OF_YOUR_PHOTO',
    'YOU_WONT_BE_ABLE_TO_PROCEED_UNTIL_YOU_HAVE_CAPTURED_A_CLEAR_AND_CENTERED_PHOTO'
  ]

  const svgIcon = () => (
    <svg
      width="100%"
      height="100%"
      className="svg"
      viewBox="0 0 300 200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <mask id="overlay-mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
          <circle cx="50%" cy="50%" r="70" />
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" mask="url(#overlay-mask)" fillOpacity="0.7" />
    </svg>
  )

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/photograph-update`}
      />
      <PopUpModal
        title="CAPTURE_YOUR_PHOTO"
        image={`${process.env.PUBLIC_URL}/assets/images/photo.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (
                <li className="list__item" key="id">
                  {t(item)}
                </li>
              ))}
            </ul>
          </>
        }
      />
      <div className={styles.webcam__container}>
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
            <img id="img" src={userData?.photo} />
          )}
        </div>
        <div className={styles.overlay__container}>
          {svgIcon()}
        </div>
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

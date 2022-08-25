/* eslint-disable multiline-ternary */
import React from 'react'
import Webcam from 'react-webcam'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import styles from './PhotoCapture.module.css'
import { Button, Grid, Typography } from '@mui/material'
import { t } from 'i18next'
import { userContext } from '../../../context/User'
import PopUpModal from '../../../components/Modal/Modal'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

const PhotoCapture = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = userContext()
  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setUserData({ ...userData, photo: imageSrc })
  })

  const description = [
    'ENSURE_THAT_YOUR_PHOTO_IS_CLEAR_AND_IN_FOCUS',
    'ALSO_ENSURE_THAT_YOU_ARE_IN_THE_CENTER_OF_YOUR_PHOTO',
    'YOU_WONT_BE_ABLE_TO_PROCEED_UNTIL_YOU_HAVE_CAPTURED_A_CLEAR_AND_CENTERED_PHOTO'
  ]

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/photograph`}
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
      <div className={styles.card__container}>
        {!userData.photo ? (
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
          <img id="img" src={userData.photo} />
        )}
      </div>
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            sx={{ fontSize: '1.5rem', padding: '10px 30px' }}
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
            sx={{ fontSize: '1.5rem', padding: '10px 48px' }}
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
          <Typography align="center" sx={{ fontSize: '1.25rem' }}>
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

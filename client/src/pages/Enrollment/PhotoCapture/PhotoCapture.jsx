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

const PhotoCapture = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = userContext()
  const webcamRef = React.useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setUserData({ ...userData, photo: imageSrc })
  })

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <PopUpModal
        title="Capture your photo"
        image={`${process.env.PUBLIC_URL}/assets/images/photo.svg`}
        description={
          <>
            <ul>
              <li className="list__item">
                Ensure that your photo is clear and in focus
              </li>
              <li className="list__item">
                Also, ensure that you are in the center of your photo
              </li>
              <li className="list__item">
                You won&apos;t be able to proceed until you have captured a
                clear and centered photo
              </li>
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
      <SubmitButton onClick={() => navigate('/enrollment/documents')} />
    </>
  )
}

export default PhotoCapture

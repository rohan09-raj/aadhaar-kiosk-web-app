import React from 'react'
import Header from '../../../components/Header/Header'
import CardBiometrics from '../../../components/Card/CardBiometrics'
import styles from './IrisScan.module.css'
import { Button, Grid, Typography } from '@mui/material'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import PopUpModal from '../../../components/Modal/Modal'
import { useTranslation } from 'react-i18next'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'
// import { userContext } from '../../../context/User'

const IrisScan = () => {
  // const { userData, setUserData } = userContext()
  // const
  // const webcamRef = React.useRef(null)

  // const capture = React.useCallback((doc) => {
  //   const imageSrc = webcamRef.current.getScreenshot()
  //   doccu[doc] = imageSrc
  //   setDocuments({
  //     ...documents,
  //     POI: doccu.POI,
  //     POA: doccu.POA,
  //     DOB: doccu.DOB
  //   })
  // })

  // const WebcamComponent = ({ doc }) => {
  //   return (
  //     <>
  //       <div className={styles.container}>
  //         <button
  //           className={styles.button}
  //           disabled={activeStep === 0}
  //           onClick={handleBack}
  //         >
  //           <img
  //             src={`${process.env.PUBLIC_URL}/assets/images/back_inverse.svg`}
  //             alt=""
  //             className={styles.image}
  //           />
  //         </button>
  //         <div className={styles.card__container}>
  //           {documents[doc] === '' ? (
  //             <Webcam
  //               audio={false}
  //               height={500}
  //               ref={webcamRef}
  //               screenshotFormat="image/jpeg"
  //               width={600}
  //               videoConstraints={{
  //                 height: 400,
  //                 width: 600,
  //                 facingMode: 'user'
  //               }}
  //             />
  //           ) : (
  //             <img src={documents[doc]} />
  //           )}
  //         </div>
  //         <button onClick={handleNext} className={styles.button}>
  //           <img
  //             src={`${process.env.PUBLIC_URL}/assets/images/next_inverse.svg`}
  //             alt=""
  //             className={styles.image}
  //           />
  //         </button>
  //       </div>
  //       <div className={styles.button__container}>
  //         <Button
  //           color="primary"
  //           size="large"
  //           type="submit"
  //           variant="contained"
  //           sx={{
  //             margin: '0px 20px',
  //             fontSize: '1.5rem',
  //             padding: '10px 30px'
  //           }}
  //           onClick={(e) => {
  //             e.preventDefault()
  //             capture(doc)
  //           }}
  //         >
  //           {t('SCAN')}
  //         </Button>
  //         <Button
  //           color="primary"
  //           size="large"
  //           type="submit"
  //           variant="contained"
  //           sx={{
  //             margin: '0px 20px',
  //             fontSize: '1.5rem',
  //             padding: '10px 30px'
  //           }}
  //           onClick={(e) => {
  //             e.preventDefault()
  //             doccu[doc] = ''
  //             setDocuments({
  //               ...documents,
  //               POI: doccu.POI,
  //               POA: doccu.POA,
  //               DOB: doccu.DOB
  //             })
  //           }}
  //         >
  //           {t('RESET')}
  //         </Button>
  //       </div>
  //       <br></br>
  //       <div>
  //         <div>
  //           <Typography align="center" sx={{ fontSize: '1.5rem' }}>
  //             {t('KINDLY_CLICK_THE_PICTURE_OF_YOUR_DOCUMENTS')}
  //           </Typography>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <AudioAutoplay audio={`${process.env.PUBLIC_URL}/assets/audios/iris`} />
      <PopUpModal
        title="Scan your Iris"
        image={`${process.env.PUBLIC_URL}/assets/images/iris_scan.svg`}
        description={
          <>
            <ul>
              <li className="list__item">INSTRUCTIONS TO BE ADDED</li>
            </ul>
          </>
        }
      />
      <div className={styles.card__container}>
        <CardBiometrics
          image={`${process.env.PUBLIC_URL}/assets/images/iris.svg`}
        />
        <CardBiometrics
          image={`${process.env.PUBLIC_URL}/assets/images/iris.svg`}
        />
      </div>
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            sx={{ fontSize: '1.5rem', padding: '10px 30px' }}
          >
            {t('SCAN')}
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            sx={{ fontSize: '1.5rem', padding: '10px 30px' }}
          >
            {t('RESET')}
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <div>
        <Grid container justifyContent="center">
          <Typography align="center" sx={{ fontSize: '1.5rem' }}>
            {t('PLEASE_PUT_YOUR_EYES_INSIDE_THE_IRIS_SCANNER')}
            <br />
            {t('WAIT_FOR_PROMPT_AND_BEEP_SOUND_TO_REMOVE_YOUR_EYES')}
          </Typography>
        </Grid>
      </div>
      <SubmitButton />
    </>
  )
}

export default IrisScan

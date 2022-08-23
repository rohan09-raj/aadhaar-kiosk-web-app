/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import Header from '../../../components/Header/Header'
import styles from './DocumentScanner.module.css'
import { Button, Typography, StepLabel, Step, Stepper } from '@mui/material'
import PopUpModal from '../../../components/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import { toast } from 'react-toastify'
import { useStyles } from './styles'

const DocumentScanner = () => {
  const { userData, oriUserData, setUserData } = userContext()
  const { t } = useTranslation()
  let steps

  if (
    (userData.address !== oriUserData.address &&
      userData.dob !== oriUserData.dob &&
      userData.name !== oriUserData.name) ||
    userData.gender !== oriUserData.gender
  ) {
    steps = ['POA', 'POI', 'DOB']
  } else {
    if (userData.address !== oriUserData.address) {
      if (
        userData.name !== oriUserData.name ||
        userData.gender !== oriUserData.gender
      ) {
        steps = ['POA', 'POI']
      } else if (userData.dob !== oriUserData.dob) {
        steps = ['POA', 'DOB']
      } else {
        steps = ['POA']
      }
    } else if (
      userData.name !== oriUserData.name ||
      userData.gender !== oriUserData.gender
    ) {
      if (userData.dob !== oriUserData.dob) {
        steps = ['POI', 'DOB']
      } else {
        steps = ['POI']
      }
    } else if (userData.dob !== oriUserData.dob) {
      steps = ['DOB']
    } else {
      steps = []
    }
  }

  const [documents, setDocuments] = useState({ POI: '', POA: '', DOB: '' })
  const [activeStep, setActiveStep] = React.useState(0)

  const [doccu] = useState({ POI: '', POA: '', DOB: '' })

  const classes = useStyles()

  const webcamRef = React.useRef(null)

  const capture = React.useCallback((doc) => {
    const imageSrc = webcamRef.current.getScreenshot()
    doccu[doc] = imageSrc
    setDocuments({
      ...documents,
      POI: doccu.POI,
      POA: doccu.POA,
      DOB: doccu.DOB
    })
  })

  const handleNext = () => {
    if (
      activeStep === steps.length - 1 &&
      documents.POI !== '' &&
      documents.POA !== '' &&
      documents.DOB !== ''
    ) {
      setUserData({ ...userData, documents: documents })
    } else if (documents.POI !== '' && documents.POA !== '') {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else if (documents.POI !== '' && documents.DOB !== '') {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else if (documents.POA !== '' && documents.DOB !== '') {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else if (documents.POI !== '') {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else if (documents.POA !== '') {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else if (documents.DOB !== '') {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    }

    if (
      (!documents.POI && activeStep === 0) ||
      (!documents.POA && activeStep === 1) ||
      (!documents.DOB && activeStep === 2)
    ) {
      toast.error(t('SCAN_YOUR_DOCUMENT'))
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const WebcamComponent = ({ doc }) => {
    return (
      <>
        <div className={styles.container}>
          <button
            className={styles.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/back_inverse.svg`}
              alt=""
              className={styles.image}
            />
          </button>
          <div className={styles.card__container}>
            {documents[doc] === '' ? (
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
              <img src={documents[doc]} />
            )}
          </div>
          <button onClick={handleNext} className={styles.button}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/next_inverse.svg`}
              alt=""
              className={styles.image}
            />
          </button>
        </div>
        <div className={styles.button__container}>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            sx={{ margin: '0px 20px' }}
            onClick={(e) => {
              e.preventDefault()
              capture(doc)
            }}
          >
            {t('SCAN')}
          </Button>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            sx={{ margin: '0px 20px' }}
            onClick={(e) => {
              e.preventDefault()
              doccu[doc] = ''
              setDocuments({
                ...documents,
                POI: doccu.POI,
                POA: doccu.POA,
                DOB: doccu.DOB
              })
            }}
          >
            {t('RESET')}
          </Button>
        </div>
        <br></br>
        <div>
          <div>
            <Typography align="center">
              {t('KINDLY_CLICK_THE_PICTURE_OF_YOUR_DOCUMENTS')}
            </Typography>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <PopUpModal
        title="Scan your documents"
        image={`${process.env.PUBLIC_URL}/assets/images/document.svg`}
        description={
          <>
            <ul>
              <li className="list__item">
                Consists of 3 steps :
                <ul>
                  <li>Proof of Identity: </li>
                  <li>Proof of Address: </li>
                  <li>Proof of Date of Birth: </li>
                </ul>
              </li>
              <li className="list__item">
                Ensure that your documents are in the center of the frame
              </li>
              <li className="list__item">
                You won&apos;t be able to proceed until you have scanned all the
                required documents
              </li>
            </ul>
          </>
        }
      />
      <div className={styles.stepper__container}>
        <div className={styles.box}>
          <Stepper activeStep={activeStep} sx={{ width: '60%' }}>
            {steps.map((label, index) => {
              const stepProps = {}
              const labelProps = {}
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel
                    {...labelProps}
                    classes={{ label: classes.stepLabel }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {activeStep === steps.length ? (
            steps.length === 0 ? (
              <>
                <Typography variant="h4" sx={{ mt: 8, mb: 1 }}>
                  {t("YOU_HAVEN'T_UPDATED_ANYTHING")}
                </Typography>
                <Typography variant="h4" sx={{ mt: 8, mb: 1 }}>
                  {t('YOU_MAY_EITHER_UPDATE_OR_MOVE_TO_NEXT_STEP')}
                </Typography>
              </>
            ) : (
              <Typography variant="h3" sx={{ mt: 8, mb: 1 }}>
                {t('ALL_STEPS_COMPLETED')}
              </Typography>
            )
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <WebcamComponent doc="POI" />
              ) : activeStep === 1 ? (
                <WebcamComponent doc="POA" />
              ) : (
                activeStep === 2 && <WebcamComponent doc="DOB" />
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  )
}

export default DocumentScanner

/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import Header from '../../../components/Header/Header'
import styles from './DocumentScanner.module.css'
import {
  Button,
  Grid,
  Typography,
  StepLabel,
  Step,
  Stepper,
  Box
} from '@mui/material'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useTranslation } from 'react-i18next'

const DocumentScanner = ({ formData, setFormData }) => {
  const { t } = useTranslation()
  const steps = [
    t('PROOF_OF_IDENTITY'),
    t('PROOF_OF_ADDRESS'),
    t('PROOF_OF_DOB')
  ]
  const [documents, setDocuments] = useState({ POI: '', POA: '', DOB: '' })
  const [activeStep, setActiveStep] = React.useState(0)

  // eslint-disable-next-line no-unused-vars
  const [doccu, setDoccu] = useState({ POI: '', POA: '', DOB: '' })

  console.log(documents)

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
    if (activeStep === steps.length - 1) {
      setFormData({ ...formData, documents: documents })
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const WebcamComponent = ({ doc }) => {
    return (
      <>
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
        <Grid container columnSpacing={10} justifyContent="center">
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              onClick={(e) => {
                e.preventDefault()
                capture(doc)
              }}
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
          </Grid>
        </Grid>
        <br></br>
        <div>
          <Grid container justifyContent="center">
            <Typography align="center">
              {t('KINDLY_CLICK_THE_PICTURE_OF_YOUR_DOCUMENTS')}
            </Typography>
          </Grid>
        </div>
      </>
    )
  }

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <SubmitButton />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {}
            const labelProps = {}
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {t('ALL_STEPS_COMPLETED')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 ? (
              <WebcamComponent doc="POI" />
            ) : activeStep === 1 ? (
              <WebcamComponent doc="POA" />
            ) : (
              activeStep === 2 && <WebcamComponent doc="DOB" />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                {t('BACK')}
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? t('FINISH') : t('NEXT')}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default DocumentScanner

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

const steps = [
  'Proof of Identity',
  'Proof of Address',
  'Proof of Date of Birth'
]

const DocumentScanner = ({ formData, setFormData }) => {
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

  // setDocuments({ ...documents, POI: '' })

  const WebcamComponent = ({ doc }) => {
    console.log(doc)
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
              Scan
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
              Reset
            </Button>
          </Grid>
        </Grid>
        <br></br>
        <div>
          <Grid container justifyContent="center">
            <Typography align="center">
              Kindly click the picture of your documents
            </Typography>
          </Grid>
        </div>
      </>
    )
  }

  return (
    <>
      <Header subheading="Enrollment" />
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
              All steps completed - you&apos;re finished
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
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default DocumentScanner

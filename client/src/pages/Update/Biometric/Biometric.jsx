/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import PhotoCapture from '../PhotoCapture/PhotoCapture'
import Fingerprint from '../Fingerprint/Fingerprint'
import IrisScan from '../IrisScan/IrisScan'
import BiometricSelect from '../BiometricSelect/BiometricSelect'
import BackButton from '../../../components/BackButton/BackButton'
import { userContext } from '../../../context/User'
import * as cocoSsd from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from 'react-i18next'

const Biometric = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(4)
  const { userData, oriUserData, setUserData } = userContext()

  const [model, setModel] = useState()

  async function loadModel() {
    try {
      const model = await cocoSsd.load()
      setModel(model)
      console.log('setloadedModel')
    } catch (err) {
      console.log(err)
      console.log('failed load model')
    }
  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel()
    })
  }, [])

  let predictions = []
  async function predictionFunction() {
    predictions = await model.detect(document.getElementById('img'))
    console.log(predictions)
    if (predictions.length > 0) {
      console.log(predictions)
      console.log(predictions[0])
    }
    return predictions
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <PhotoCapture />
      case 1:
        return <Fingerprint />
      case 2:
        return <IrisScan />
      default:
        return <BiometricSelect page={page} setPage={setPage} />
    }
  }

  const handleBack = () => {
    if (!userData.photo) {
      setUserData({ ...userData, photo: oriUserData.photo })
    }
    setPage(4) // DUMMY VALUE 4
  }

  const handleSubmit = () => {
    predictionFunction()
    if (predictions.length === 0) {
      toast.warning(t('PLEASE_WAIT'), {
        timeout: 1000
      })
    }
    console.log('befoer start')
    setTimeout(() => {
      if (predictions.length > 0) {
        if (!userData.photo) {
          setUserData({ ...userData, photo: oriUserData.photo })
        } else if (
          predictions[0].class === 'person' &&
          predictions[0].score > 0.7
        ) {
          setPage(4)
        } else {
          toast.error(t('PLEASE_CAPTURE_CLEAR_PHOTOGRAPH'))
        }
      } else {
        toast.error(t('PLEASE_CAPTURE_CLEAR_PHOTOGRAPH'))
      }
    }, 1000)
  }

  const conditionalButton = () => {
    switch (page) {
      case 0:
        return (
          <>
            <SubmitButton onClick={() => handleSubmit()} />
            <BackButton onClick={() => handleBack()} />
          </>
        )
      case 1:
        return (
          <>
            <SubmitButton onClick={() => setPage(4)} />
            <BackButton onClick={() => setPage(4)} />
          </>
        )
      case 2:
        return (
          <>
            <SubmitButton onClick={() => setPage(4)} />
            <BackButton onClick={() => setPage(4)} />
          </>
        )
    }
  }
  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      {conditionalComponent()}
      {conditionalButton()}
    </>
  )
}

export default Biometric

import React, { useState } from 'react'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import PhotoCapture from '../PhotoCapture/PhotoCapture'
import Fingerprint from '../Fingerprint/Fingerprint'
import IrisScan from '../IrisScan/IrisScan'
import BiometricSelect from '../BiometricSelect/BiometricSelect'
import BackButton from '../../../components/BackButton/BackButton'
import { userContext } from '../../../context/User'

const Biometric = () => {
  const [page, setPage] = useState(4)
  const { userData, oriUserData, setUserData } = userContext()

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
    setPage(page - 1)
  }

  const handleSubmit = () => {
    if (!userData.photo) {
      setUserData({ ...userData, photo: oriUserData.photo })
    }
    setPage(page + 1)
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
            <BackButton onClick={() => setPage(page - 1)} />
          </>
        )
      case 2:
        return (
          <>
            <SubmitButton onClick={() => setPage(4)} />
            <BackButton onClick={() => setPage(page - 1)} />
          </>
        )
    }
  }
  return (
    <>
      {conditionalComponent()}
      {conditionalButton()}
    </>
  )
}

export default Biometric

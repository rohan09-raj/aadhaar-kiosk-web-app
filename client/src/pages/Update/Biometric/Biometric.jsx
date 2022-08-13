import React, { useState } from 'react'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import PhotoCapture from '../PhotoCapture/PhotoCapture'
import Fingerprint from '../Fingerprint/Fingerprint'
import IrisScan from '../IrisScan/IrisScan'
import BiometricSelect from '../BiometricSelect/BiometricSelect'

const Biometric = () => {
  const [page, setPage] = useState(4)

  const [formData, setFormData] = useState({
    photo: '',
    irisScan: '',
    fingerPrint: ''
  })

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <PhotoCapture formData={formData} setFormData={setFormData} />
      case 1:
        return <Fingerprint formData={formData} setFormData={setFormData} />
      case 2:
        return <IrisScan formData={formData} setFormData={setFormData} />
      default:
        return <BiometricSelect page={page} setPage={setPage} />
    }
  }

  const conditionalButton = () => {
    switch (page) {
      case 0:
        return <SubmitButton onClick={() => setPage(4)}>Next</SubmitButton>
      case 1:
        return <SubmitButton onClick={() => setPage(4)}>Next</SubmitButton>
      case 2:
        return <SubmitButton onClick={() => setPage(4)}>Next</SubmitButton>
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

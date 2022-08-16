import React, { useState } from 'react'
import Address from './Address/Address'
import Agreement from './Agreement/Agreement'
import DocumentScanner from './DocumentScanner/DocumentScanner'
import FinalSlip from './FinalSlip/FinalSlip'
import Fingerprint from './Fingerprint/Fingerprint'
import FormTwo from './FormTwo/FormTwo'
import IrisScan from './IrisScan/IrisScan'
import { useMutation } from 'react-query'
import PhotoCapture from './PhotoCapture/PhotoCapture'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import FormOne from './FormOne/FormOne'
import Home from '../Home/Home'
import {
  validEmail,
  validMobileNumber,
  validPincode,
  validString
} from '../../components/RegEx/RegEx'
import { createUser } from '../../services/apiservice'
import { useTranslation } from 'react-i18next'

const Enrollment = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({
    indianResident: '',
    name: '',
    gender: '',
    dob: new Date().toISOString().slice(0, 10),
    mobile: '',
    email: '',
    country: '',
    state: '',
    district: '',
    village: '',
    houseNo: '',
    street: '',
    locality: '',
    postOffice: '',
    landmark: '',
    pincode: '',
    address: '',
    photo: '',
    documents: {
      POI: '',
      POA: '',
      DOB: ''
    }
  })

  const { mutate } = useMutation((payload) => createUser(payload))

  const handleSubmit = () => {
    if (page === 0) {
      if (formData.indianResident === '') {
        return alert(t('PLEASE_SELECT_YOUR_RESIDENCY'))
      } else if (formData.name === '' || formData.name.length < 1) {
        return alert(t('PLEASE_ENTER_YOUR_NAME'))
      } else if (!validString.test(formData.name)) {
        return alert(t('PLEASE_ENTER_VALID_NAME'))
      } else if (formData.gender === '') {
        return alert(t('PLEASE_SELECT_YOUR_GENDER'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 1) {
      if (formData.mobile === '') {
        return alert(t('PLEASE_ENTER_YOUR_MOBILE_NUMBER'))
      } else if (!validMobileNumber.test(formData.mobile)) {
        return alert(t('PLEASE_ENTER_VALID_MOBILE_NUMBER'))
      } else if (formData.email === '') {
        return alert(t('PLEASE_ENTER_YOUR_EMAIL'))
      } else if (!validEmail.test(formData.email)) {
        return alert(t('PLEASE_ENTER_VALID_EMAIL'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 2) {
      if (formData.country === '') {
        return alert(t('PLEASE_SELECT_YOUR_COUNTRY'))
      } else if (formData.state === '') {
        return alert(t('PLEASE_SELECT_YOUR_STATE'))
      } else if (formData.district === '') {
        return alert(t('PLEASE_SELECT_YOUR_DISTRICT'))
      } else if (formData.village === '') {
        return alert(t('PLEASE_ENTER_YOUR_VILLAGE'))
      } else if (formData.houseNo === '') {
        return alert(t('PLEASE_ENTER_YOUR_HOUSE_NUMBER'))
      } else if (formData.street === '') {
        return alert(t('PLEASE_ENTER_YOUR_STREET'))
      } else if (formData.locality === '') {
        return alert(t('PLEASE_ENTER_YOUR_LOCALITY'))
      } else if (formData.postOffice === '') {
        return alert(t('PLEASE_ENTER_YOUR_AREA_POST_OFFICE'))
      } else if (formData.landmark === '') {
        return alert(t('PLEASE_ENTER_NEAREST_LANDMARK'))
      } else if (formData.pincode === '') {
        return alert(t('PLEASE_ENTER_YOUR_AREA_PINCODE'))
      } else if (!validPincode.test(formData.pincode)) {
        return alert(t('PLEASE_ENTER_VALID_PINCODE'))
      } else {
        setFormData({
          ...formData,
          address: `${formData.houseNo} ${formData.street}, ${formData.locality}, ${formData.landmark}, ${formData.village}, ${formData.district.label}, ${formData.country.label} ${formData.pincode}`
        })
        setPage(page + 1)
      }
    } else if (page === 3) {
      setPage(page + 1)
    } else if (page === 4) {
      setPage(page + 1)
    } else if (page === 5) {
      setPage(page + 1)
    } else if (page === 6) {
      setPage(page + 1)
    } else if (page === 7) {
      setPage(page + 1)
    } else if (page === 8) {
      mutate({
        indianResident: formData.indianResident,
        name: formData.name,
        gender: formData.gender,
        dob: formData.dob,
        mobile: formData.mobile,
        email: formData.email,
        address: formData.address,
        photo: formData.photo,
        documents: {
          POI: formData.documents.POI,
          POA: formData.documents.POA,
          DOB: formData.documents.DOB
        }
      })
      setPage(page + 1)
    }
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FormOne formData={formData} setFormData={setFormData} />
      case 1:
        return <FormTwo formData={formData} setFormData={setFormData} />
      case 2:
        return <Address formData={formData} setFormData={setFormData} />
      case 3:
        return <PhotoCapture formData={formData} setFormData={setFormData} />
      case 4:
        return <DocumentScanner formData={formData} setFormData={setFormData} />
      case 5:
        return <IrisScan formData={formData} setFormData={setFormData} />
      case 6:
        return <Fingerprint formData={formData} setFormData={setFormData} />
      case 7:
        return <Agreement formData={formData} setFormData={setFormData} />
      case 8:
        return <FinalSlip formData={formData} setFormData={setFormData} />
      default:
        return <Home />
    }
  }

  const conditionalButton = () => {
    switch (page) {
      case 0:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 1:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 2:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 3:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 4:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 5:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 6:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
      case 7:
        return <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      case 8:
        return <SubmitButton onClick={handleSubmit}>Exit</SubmitButton>
      default:
        return <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
    }
  }
  return (
    <>
      {conditionalComponent()}
      {conditionalButton()}
    </>
  )
}

export default Enrollment

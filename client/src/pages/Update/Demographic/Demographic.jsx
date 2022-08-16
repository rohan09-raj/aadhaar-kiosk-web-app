import React, { useState } from 'react'
import Address from '../Address/Address'
import DocumentScanner from '../DocumentScanner/DocumentScanner'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import FormOne from '../FormOne/FormOne'
import {
  validEmail,
  validMobileNumber,
  validPincode,
  validString
} from '../../../constants/RegEx'
import UpdateSelect from '../UpdateSelect/UpdateSelect'
import { useTranslation } from 'react-i18next'

const Demographic = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({
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
    address: ''
  })

  const handleSubmit = () => {
    if (page === 0) {
      if (formData.name === '' || formData.name.length < 1) {
        return alert(t('PLEASE_ENTER_YOUR_NAME'))
      } else if (!validString.test(formData.name)) {
        return alert(t('PLEASE_ENTER_VALID_NAME'))
      } else if (formData.gender === '') {
        return alert(t('PLEASE_SELECT_YOUR_GENDER'))
      } else if (formData.mobile === '') {
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
    } else if (page === 1) {
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
    } else setPage(page + 1)
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FormOne formData={formData} setFormData={setFormData} />
      case 1:
        return <Address formData={formData} setFormData={setFormData} />
      case 2:
        return <DocumentScanner formData={formData} setFormData={setFormData} />
      default:
        return <UpdateSelect />
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

export default Demographic

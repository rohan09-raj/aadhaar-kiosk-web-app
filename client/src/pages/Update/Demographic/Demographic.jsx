import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getUserByAadhaar } from '../../../services/apiservice'
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
import { userContext } from '../../../context/User'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Demographic = () => {
  const { t } = useTranslation()
  const { aadhaarNumber, userData, setUserData } = userContext()

  const [page, setPage] = useState(0)

  const isLongEnough = aadhaarNumber?.toString().length > 11

  const { data } = useQuery(
    ['user', aadhaarNumber],
    () => getUserByAadhaar(aadhaarNumber),
    {
      enabled: isLongEnough,
      retry: 1,
      onSuccess: () => {
        while (!data?.data?.name) {
          console.log(formData.name)
          console.log('success')
          setUserData(data?.data)
          console.log(data?.data)
          console.log(userData?.name)
          console.log(data?.data?.name)
          setFormData({
            ...formData,
            name: userData?.name
          })
        }
      }
    }
  )

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
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
    pincode: ''
    // address: userData?.address
  })

  const address = userData?.address
  console.log(address)

  console.log(
    'Aadhaar: ',
    aadhaarNumber,
    'Islong: ',
    isLongEnough,
    'User: ',
    userData
  )

  const handleSubmit = () => {
    if (page === 0) {
      if (formData.name === '' || formData.name.length < 1) {
        toast.error(t('PLEASE_ENTER_YOUR_NAME'))
      } else if (!validString.test(formData.name)) {
        toast.error(t('PLEASE_ENTER_VALID_NAME'))
      } else if (formData.gender === '') {
        toast.error(t('PLEASE_SELECT_YOUR_GENDER'))
      } else if (formData.mobile === '') {
        toast.error(t('PLEASE_ENTER_YOUR_MOBILE_NUMBER'))
      } else if (!validMobileNumber.test(formData.mobile)) {
        toast.error(t('PLEASE_ENTER_VALID_MOBILE_NUMBER'))
      } else if (formData.email === '') {
        toast.error(t('PLEASE_ENTER_YOUR_EMAIL'))
      } else if (!validEmail.test(formData.email)) {
        toast.error(t('PLEASE_ENTER_VALID_EMAIL'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 1) {
      if (formData.country === '') {
        toast.error(t('PLEASE_SELECT_YOUR_COUNTRY'))
      } else if (formData.state === '') {
        toast.error(t('PLEASE_SELECT_YOUR_STATE'))
      } else if (formData.district === '') {
        toast.error(t('PLEASE_SELECT_YOUR_DISTRICT'))
      } else if (formData.village === '') {
        toast.error(t('PLEASE_ENTER_YOUR_VILLAGE'))
      } else if (formData.houseNo === '') {
        toast.error(t('PLEASE_ENTER_YOUR_HOUSE_NUMBER'))
      } else if (formData.street === '') {
        toast.error(t('PLEASE_ENTER_YOUR_STREET'))
      } else if (formData.locality === '') {
        toast.error(t('PLEASE_ENTER_YOUR_LOCALITY'))
      } else if (formData.postOffice === '') {
        toast.error(t('PLEASE_ENTER_YOUR_AREA_POST_OFFICE'))
      } else if (formData.landmark === '') {
        toast.error(t('PLEASE_ENTER_NEAREST_LANDMARK'))
      } else if (formData.pincode === '') {
        toast.error(t('PLEASE_ENTER_YOUR_AREA_PINCODE'))
      } else if (!validPincode.test(formData.pincode)) {
        toast.error(t('PLEASE_ENTER_VALID_PINCODE'))
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
      <ToastContainer autoClose={1000} hideProgressBar={true} theme={'colored'} />
      {conditionalComponent()}
      {conditionalButton()}
    </>
  )
}

export default Demographic

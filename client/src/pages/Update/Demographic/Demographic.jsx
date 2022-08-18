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

  // Make api call using the provided aadhaar number and set the user data in the context if the api call is successful. Set form data to the user data if the api call is successful and prevent too many re-renders.
  const { isLoading, isError, data } = useQuery('user', async () => {
    if (isLongEnough) {
      const response = await getUserByAadhaar(aadhaarNumber)
      return response
    }
  })

  if (isLoading) {
    return <div>{t('loading')}</div>
  }

  if (isError) {
    return <div>{t('error')}</div>
  }

  if (data) {
    setUserData(data?.data)
  }

  const handleSubmit = () => {
    if (page === 0) {
      if (userData.name === '' || userData.name.length < 1) {
        toast.error(t('PLEASE_ENTER_YOUR_NAME'))
      } else if (!validString.test(userData.name)) {
        toast.error(t('PLEASE_ENTER_VALID_NAME'))
      } else if (userData.gender === '') {
        toast.error(t('PLEASE_SELECT_YOUR_GENDER'))
      } else if (userData.mobile === '') {
        toast.error(t('PLEASE_ENTER_YOUR_MOBILE_NUMBER'))
      } else if (!validMobileNumber.test(userData.mobile)) {
        toast.error(t('PLEASE_ENTER_VALID_MOBILE_NUMBER'))
      } else if (userData.email === '') {
        toast.error(t('PLEASE_ENTER_YOUR_EMAIL'))
      } else if (!validEmail.test(userData.email)) {
        toast.error(t('PLEASE_ENTER_VALID_EMAIL'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 1) {
      if (userData.country === '') {
        toast.error(t('PLEASE_SELECT_YOUR_COUNTRY'))
      } else if (userData.address.state.name === '') {
        toast.error(t('PLEASE_SELECT_YOUR_STATE'))
      } else if (userData.address.district.name === '') {
        toast.error(t('PLEASE_SELECT_YOUR_DISTRICT'))
      } else if (userData.address.village === '') {
        toast.error(t('PLEASE_ENTER_YOUR_VILLAGE'))
      } else if (userData.address.houseNo === '') {
        toast.error(t('PLEASE_ENTER_YOUR_HOUSE_NUMBER'))
      } else if (userData.address.street === '') {
        toast.error(t('PLEASE_ENTER_YOUR_STREET'))
      } else if (userData.address.locality === '') {
        toast.error(t('PLEASE_ENTER_YOUR_LOCALITY'))
      } else if (userData.address.postOffice === '') {
        toast.error(t('PLEASE_ENTER_YOUR_AREA_POST_OFFICE'))
      } else if (userData.address.landmark === '') {
        toast.error(t('PLEASE_ENTER_NEAREST_LANDMARK'))
      } else if (userData.address.pincode === '') {
        toast.error(t('PLEASE_ENTER_YOUR_AREA_PINCODE'))
      } else if (!validPincode.test(userData.address.pincode)) {
        toast.error(t('PLEASE_ENTER_VALID_PINCODE'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 3) {
      setPage(page + 1)
    } else setPage(page + 1)
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FormOne />
      case 1:
        return <Address />
      case 2:
        return <DocumentScanner />
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

export default Demographic

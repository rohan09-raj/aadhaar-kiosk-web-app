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
} from '../../constants/RegEx'
import { createUser } from '../../services/apiservice'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { userContext } from '../../context/User'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'
import { initialUserData } from '../../constants/userData'

const Enrollment = () => {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const { userData, setUserData } = userContext()
  const navigate = useNavigate()
  const [unverified, setUnverified] = useState(true)

  const pushUser = useMutation((payload) => createUser(payload))

  // const setConfirm = useMutation((payload) => sendMessage(payload))

  const handleSubmit = () => {
    if (page === 0) {
      if (userData.indianResident === '') {
        toast.error(t('PLEASE_SELECT_YOUR_RESIDENCY'))
      } else if (userData.name === '' || userData.name.length < 1) {
        toast.error(t('PLEASE_ENTER_YOUR_NAME'))
      } else if (!validString.test(userData.name)) {
        toast.error(t('PLEASE_ENTER_VALID_NAME'))
      } else if (userData.gender === '') {
        toast.error(t('PLEASE_SELECT_YOUR_GENDER'))
      } else if (userData.dob === '') {
        toast.error(t('PLEASE_SELECT_YOUR_DOB'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 1) {
      if (userData.mobile === '') {
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
    } else if (page === 2) {
      if (!userData.address.state.name) {
        toast.error(t('PLEASE_SELECT_YOUR_STATE'))
      } else if (!userData.address.district.name) {
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
      if (!userData.photo) {
        toast.error(t('PLEASE_CAPTURE_PHOTOGRAPH'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 4) {
      if (!userData.documents.POI) {
        toast.error(t('PLEASE_TAKE_THE_PICTURE_OF_THE_PROOF_OF_IDENTITY'))
      } else if (!userData.documents.POA) {
        toast.error(t('PLEASE_TAKE_THE_PICTURE_OF_THE_PROOF_OF_ADDRESS'))
      } else if (!userData.documents.DOB) {
        toast.error(t('PLEASE_TAKE_THE_PICTURE_OF_THE_PROOF_OF_DATE_OF_BIRTH'))
      } else {
        setPage(page + 1)
      }
    } else if (page === 5) {
      setPage(page + 1)
    } else if (page === 6) {
      setPage(page + 1)
    } else if (page === 7) {
      pushUser.mutate(
        {
          indianResident: userData.indianResident,
          name: userData.name,
          gender: userData.gender,
          dob: userData.dob,
          mobile: userData.mobile,
          email: userData.email,
          address: userData.address,
          photo: userData.photo,
          documents: {
            POI: userData.documents.POI,
            POA: userData.documents.POA,
            DOB: userData.documents.DOB
          }
        },
        {
          onSuccess: () => {
            // setConfirm.mutate({
            //   mobile: `+91${userData.mobile}`,
            //   id: pushUser.data._id
            // })
            setPage(page + 1)
          }
        }
      )
    } else if (page === 8) {
      setUserData(initialUserData)
      navigate('/')
    }
  }

  console.log(userData)

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FormOne />
      case 1:
        return <FormTwo />
      case 2:
        return <Address />
      case 3:
        return <PhotoCapture />
      case 4:
        return <DocumentScanner />
      case 5:
        return <IrisScan />
      case 6:
        return <Fingerprint />
      case 7:
        return (
          <Agreement unverified={unverified} setUnverified={setUnverified} />
        )
      case 8:
        return <FinalSlip />
      default:
        return <Home />
    }
  }

  const conditionalButton = () => {
    switch (page) {
      case 0:
        return (
          <>
            <SubmitButton onClick={handleSubmit} />
            <BackButton
              onClick={() => {
                setUserData(initialUserData)
                navigate('/')
              }}
            />
          </>
        )
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return (
          <>
            <SubmitButton onClick={handleSubmit} />
            <BackButton onClick={() => setPage(page - 1)} />
          </>
        )
      case 7:
        return (
          <>
            <SubmitButton onClick={handleSubmit} disabled={unverified} />
            <BackButton onClick={() => setPage(page - 1)} />
          </>
        )
      case 8:
      default:
        return <SubmitButton onClick={handleSubmit} />
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

export default Enrollment

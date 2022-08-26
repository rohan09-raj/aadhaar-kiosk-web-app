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
import { userContext } from '../../../context/User'
import { ToastContainer, toast } from 'react-toastify'
import BackButton from '../../../components/BackButton/BackButton'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { initialUserData } from '../../../constants/userData'

const Demographic = () => {
  const { t } = useTranslation()
  const { userData, setUserData, setOriUserData, setAadhaarNumber } =
    userContext()

  const navigate = useNavigate()
  const language = localStorage.getItem('i18nextLng')

  const [page, setPage] = useState(0)

  let audio

  const handleSubmit = () => {
    if (page === 0) {
      if (userData.name === '' || userData.name.length < 1) {
        toast.error(t('PLEASE_ENTER_YOUR_NAME'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-name-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-name-hindi.mp3`)
        }
        audio.play()
      } else if (!validString.test(userData.name)) {
        toast.error(t('PLEASE_ENTER_VALID_NAME'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-valid-name-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-valid-name-hindi.mp3`)
        }
        audio.play()
      } else if (userData.gender === '') {
        toast.error(t('PLEASE_SELECT_YOUR_GENDER'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-your-gender-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-your-gender-hindi.mp3`)
        }
        audio.play()
      } else if (userData.mobile === '') {
        toast.error(t('PLEASE_ENTER_YOUR_MOBILE_NUMBER'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-mobile-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-mobile-hindi.mp3`)
        }
        audio.play()
      } else if (!validMobileNumber.test(userData.mobile)) {
        toast.error(t('PLEASE_ENTER_VALID_MOBILE_NUMBER'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-valid-mobile-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-valid-mobile-hindi.mp3`)
        }
        audio.play()
      } else if (userData.email === '') {
        toast.error(t('PLEASE_ENTER_YOUR_EMAIL'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-email-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-email-hindi.mp3`)
        }
        audio.play()
      } else if (!validEmail.test(userData.email)) {
        toast.error(t('PLEASE_ENTER_VALID_EMAIL'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-valid-email-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-valid-email-hindi.mp3`)
        }
        audio.play()
      } else {
        setPage(page + 1)
      }
    } else if (page === 1) {
      if (userData.country === '') {
        toast.error(t('PLEASE_SELECT_YOUR_COUNTRY'))
      } else if (userData.address.state.name === '') {
        toast.error(t('PLEASE_SELECT_YOUR_STATE'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-state-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-state-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.district.name === '') {
        toast.error(t('PLEASE_SELECT_YOUR_DISTRICT'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-district-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-district-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.village === '') {
        toast.error(t('PLEASE_ENTER_YOUR_VILLAGE'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-village-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-village-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.houseNo === '') {
        toast.error(t('PLEASE_ENTER_YOUR_HOUSE_NUMBER'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-house-no-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-house-no-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.street === '') {
        toast.error(t('PLEASE_ENTER_YOUR_STREET'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-street-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-street-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.locality === '') {
        toast.error(t('PLEASE_ENTER_YOUR_LOCALITY'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-locality-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-locality-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.postOffice === '') {
        toast.error(t('PLEASE_ENTER_YOUR_AREA_POST_OFFICE'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-post-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-post-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.landmark === '') {
        toast.error(t('PLEASE_ENTER_NEAREST_LANDMARK'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-landmark-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-select-landmark-hindi.mp3`)
        }
        audio.play()
      } else if (userData.address.pincode === '') {
        toast.error(t('PLEASE_ENTER_YOUR_AREA_PINCODE'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-pin-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-pin-hindi.mp3`)
        }
        audio.play()
      } else if (!validPincode.test(userData.address.pincode)) {
        toast.error(t('PLEASE_ENTER_VALID_PINCODE'))
        if (language === 'en') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-valid-pin-english.mp3`)
        } else if (language === 'hi') {
          audio = new Audio(`${process.env.PUBLIC_URL}/assets/audios/please-enter-valid-pin-hindi.mp3`)
        }
        audio.play()
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
        return (
          <>
            <SubmitButton onClick={handleSubmit} />
            <BackButton
              onClick={() => {
                setUserData(initialUserData)
                setOriUserData(initialUserData)
                setAadhaarNumber('')
                navigate('/')
              }}
            />
          </>
        )
      case 1:
        return (
          <>
            <SubmitButton onClick={handleSubmit} />
            <BackButton onClick={() => setPage(page - 1)} />
          </>
        )
      case 2:
        return (
          <>
            <SubmitButton onClick={handleSubmit} />
            <BackButton onClick={() => setPage(page - 1)} />
          </>
        )
    }
  }
  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        theme={'colored'}
        position="top-center"
        style={{ fontSize: '1.5rem' }}
      />
      {conditionalComponent()}
      {conditionalButton()}
    </>
  )
}

export default Demographic

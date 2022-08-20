import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import { useQuery, useMutation } from 'react-query'
import { getUserByAadhaar, sendOTP } from '../../../services/apiservice'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { toast, ToastContainer } from 'react-toastify'

import styles from './Otp.module.css'

const Otp = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [otp, setOtp] = useState()
  const [disabled, setDisabled] = useState(false)
  const [finalDisable, setFinalDisable] = useState(false)
  const [unverified, setUnverified] = useState(true)
  const [show, setShow] = useState(false)
  const { aadhaarNumber, userData, setUserData, oriUserData, setOriUserData } =
    userContext()

  useEffect(() => {
    setUserData(oriUserData)
  }, [oriUserData])

  const isLongEnough = aadhaarNumber?.toString().length > 11

  const { isLoading, isError, data } = useQuery('user', async () => {
    if (isLongEnough) {
      const response = await getUserByAadhaar(aadhaarNumber)
      return response
    }
  })

  const mutateOTP = useMutation(() =>
    sendOTP({ mobile: `+91${userData?.mobile}` })
  )

  const verifyOTP = () => {
    if (mutateOTP?.data?.data?.otpCode === Number(otp)) {
      setFinalDisable(true)
      setDisabled(true)
      setShow(false)
      setUnverified(false)
      toast.success(t('OTP_VERIFIED!'))
    } else {
      toast.error(t('INCORRECT_OTP'))
    }
  }

  const sendResendOTP = () => {
    setTimeout(() => {
      if (finalDisable === false) {
        console.log('Disabled: ', disabled, 'Final Disable: ', finalDisable)
        setDisabled(false)
      }
    }, 30000)
  }

  if (isLoading) {
    return <div>{t('loading')}</div>
  }

  if (isError) {
    return <div>{t('error')}</div>
  }

  if (data) {
    setOriUserData(data?.data)
  }
  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      <Header subheading={`${t('UPDATE')}`} />
      <div className={styles.subheading__container}>
        <h3 className={styles.subheading}>{t('ENTER_OTP')}</h3>
        <p className={styles.subsubheading}>
          {t('SENT_TO_YOUR_REGISTERED_MOBILE_NUMBER')}
        </p>
        <Button
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          disabled={disabled}
          sx={{ marginTop: '1rem' }}
          onClick={() => {
            mutateOTP.mutate()
            setDisabled(true)
            setShow(true)
            sendResendOTP()
          }}
        >
          {show ? t('RESEND') : t('SEND_OTP')}
        </Button>
        {show && (
          <>
            <Input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              placeholder={t('ENTER_OTP')}
            />
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              onClick={() => {
                verifyOTP()
              }}
            >
              {t('VERIFY_OTP')}
            </Button>
          </>
        )}
      </div>
      <SubmitButton
        onClick={() => {
          if (unverified) {
            toast.error(t('PLEASE_VERIFY_OTP'))
          } else {
            navigate('/update/select-update')
          }
        }}
      />
    </>
  )
}

export default Otp

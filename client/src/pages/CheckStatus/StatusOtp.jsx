import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../context/User'
import { useQuery, useMutation } from 'react-query'
import { getUserByAadhaar, sendOTP, getUser } from '../../services/apiservice'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { toast, ToastContainer } from 'react-toastify'
import PopUpModal from '../../components/Modal/Modal'

import styles from './StatusOtp.module.css'
import Spinner from '../../components/Spinner/Spinner'

const StatusOtp = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [otp, setOtp] = useState()
  const [disabled, setDisabled] = useState(false)
  const [finalDisable, setFinalDisable] = useState(false)
  const [unverified, setUnverified] = useState(true)
  const [show, setShow] = useState(false)
  const {
    aadhaarNumber,
    eidNumber,
    userData,
    setUserData,
    oriUserData,
    setOriUserData
  } = userContext()

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

  useEffect(() => {
    setUserData(oriUserData)
  }, [oriUserData])

  if (aadhaarNumber) {
    const isLongEnough = aadhaarNumber?.toString().length > 11
    const { isLoading, isError, data } = useQuery('user', async () => {
      if (isLongEnough) {
        const response = await getUserByAadhaar(aadhaarNumber)
        return response
      }
    })
    if (isLoading) {
      return <Spinner heading='STATUS' />
    }

    if (isError) {
      return <div>{t('error')}</div>
    }

    if (data) {
      setOriUserData(data?.data)
    }
  } else if (eidNumber) {
    const { isLoading, isError, data } = useQuery('user', async () => {
      const response = await getUser(eidNumber)
      return response
    })

    if (isLoading) {
      return <Spinner heading='STATUS' />
    }

    if (isError) {
      return <div>{t('error')}</div>
    }

    if (data) {
      setOriUserData(data?.data)
    }
  }

  const description = ['CLICK_ON_SEND_OTP', 'YOU_WILL_RECIEVE_AN_OTP_ON_YOUR_MOBILE_NUMBER', 'YOU_CAN_RESEND_THE_OTP_AFTER_30_SECONDS_IF_YOU_HAVENT_RECEIVED_IT_YET', 'CLICK_ON_VERIFY_OTP_TO_VERIFY_YOUR_MOBILE_NUMBER']

  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      <Header subheading={`${t('STATUS')}`} />
      <PopUpModal
        title="VERIFY_YOUR_MOBILE_NUMBER"
        image={`${process.env.PUBLIC_URL}/assets/images/otp.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (<li className="list__item" key='id'>{t(item)}</li>))}
            </ul>
          </>
        }
      />
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
          Otp
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
            if (aadhaarNumber) {
              navigate('/status/update')
            } else if (eidNumber) {
              navigate('/status/enrollment')
            }
          }
        }}
      />
    </>
  )
}

export default StatusOtp

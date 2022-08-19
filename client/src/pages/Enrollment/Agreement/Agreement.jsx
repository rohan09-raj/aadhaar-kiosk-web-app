import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import CardAgreement from '../../../components/Card/CardAgreement'
import styles from './Agreement.module.css'
import Input from '../../../components/Input/Input'
import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { sendOTP } from '../../../services/apiservice'
import { userContext } from '../../../context/User'
import { useMutation } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Agreement = ({ unverified, setUnverified }) => {
  const { t } = useTranslation()
  const [otp, setOtp] = useState()
  const [disabled, setDisabled] = useState(false)
  const [finalDisable, setFinalDisable] = useState(false)
  const [show, setShow] = useState(false)
  const { userData } = userContext()
  console.log(userData)
  const { data, mutate } = useMutation(() =>
    sendOTP({ mobile: `+91${userData?.mobile}` })
  )

  console.log('Disabled: ', disabled, 'Final Disable: ', finalDisable)

  const verifyOTP = () => {
    if (data?.data?.otpCode === Number(otp)) {
      console.log('Disabled: ', disabled, 'Final Disable: ', finalDisable)
      setFinalDisable(true)
      setDisabled(true)
      setShow(false)
      setUnverified(false)
      toast.success(t('OTP_VERIFIED!'))
    } else {
      toast.error(t('INCORRECT_OTP!'))
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

  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      <Header subheading={t('ENROLLMENT')} />
      <div className={styles.card__container}>
        <CardAgreement
          image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        />
      </div>
      <div className={styles.card__elements}>
        <Typography>{t('PLEASE_VERIFY_YOUR_IDENTITY')}</Typography>
        <Button
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          disabled={disabled}
          onClick={() => {
            mutate()
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
              type="number"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="XXXXXX"
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
    </>
  )
}

export default Agreement

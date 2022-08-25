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
import PopUpModal from '../../../components/Modal/Modal'
import 'react-toastify/dist/ReactToastify.css'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

const Agreement = ({ unverified, setUnverified }) => {
  const { t } = useTranslation()
  const [otp, setOtp] = useState()
  const [disabled, setDisabled] = useState(false)
  const [finalDisable, setFinalDisable] = useState(false)
  const [show, setShow] = useState(false)
  const { userData } = userContext()

  const { data, mutate } = useMutation(() =>
    sendOTP({ mobile: `+91${userData?.mobile}` })
  )

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

  const description = [
    'CLICK_ON_SEND_OTP',
    'YOU_WILL_RECIEVE_AN_OTP_ON_YOUR_MOBILE_NUMBER',
    'YOU_CAN_RESEND_THE_OTP_AFTER_30_SECONDS_IF_YOU_HAVENT_RECEIVED_IT_YET',
    'CLICK_ON_VERIFY_OTP_TO_VERIFY_YOUR_MOBILE_NUMBER'
  ]

  return (
    <>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme={'colored'}
      />
      <Header subheading={t('ENROLLMENT')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/otp-verification`}
      />
      <PopUpModal
        title="VERIFY_YOUR_MOBILE_NUMBER"
        image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (
                <li className="list__item" key="id">
                  {t(item)}
                </li>
              ))}
            </ul>
          </>
        }
      />
      <div className={styles.card__container}>
        <CardAgreement
          image={`${process.env.PUBLIC_URL}/assets/images/agreement.svg`}
        />
      </div>
      <div className={styles.card__elements}>
        <Typography sx={{ fontSize: '1.5rem' }}>{t('PLEASE_VERIFY_YOUR_IDENTITY')} xxxxxxxx{userData?.mobile?.slice(-2)}
        </Typography>
        <Button
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          disabled={disabled}
          sx={{ marginTop: '1rem', fontSize: '1.5rem', padding: '10px 30px' }}
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
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
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

import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import { useQuery } from 'react-query'
import { getUserByAadhaar } from '../../../services/apiservice'
import styles from './Otp.module.css'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

const Otp = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { aadhaarNumber, setUserData, oriUserData, setOriUserData } =
    userContext()

  useEffect(() => {
    setUserData(oriUserData)
  }, [oriUserData])

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
    setOriUserData(data?.data)
  }
  return (
    <>
      <Header subheading="Update" />
      <div className={styles.subheading__container}>
        <h3 className={styles.subheading}> Enter OTP </h3>
        <Input
          type="text"
          id="aadhaarNumber"
          placeholder="Enter One Time Password"
        />
        <Grid container columnSpacing={10} justifyContent="center">
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              onClick={() => {}}
            >
              Verify OTP
            </Button>
          </Grid>
        </Grid>
      </div>
      <SubmitButton onClick={() => navigate('/update/select-update')} />
    </>
  )
}

export default Otp

import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Update.module.css'
import Input from '../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { userContext } from '../../context/User'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Update = () => {
  const { aadhaarNumber, setAadhaarNumber } = userContext()

  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <>
      <Header subheading={`${t('UPDATE')}`} />
      <div className={styles.subheading__container}>
        <h3 className={styles.subheading}> {t('PROVIDE_AADHAAR_NUMBER')} </h3>
        <Input
          type="text"
          id="aadhaarNumber"
          value={aadhaarNumber}
          onChange={(e) => setAadhaarNumber(e.target.value)}
          placeholder={`${t('ENTER_YOUR_AADHAAR_NUMBER')}`}
          required
        />
        <Grid container columnSpacing={10} justifyContent="center">
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              onClick={() => {
                navigate('/update/otp')
              }}
            >
              {t('SUBMIT')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Update

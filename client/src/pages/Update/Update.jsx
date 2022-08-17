import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import styles from './Update.module.css'
import Input from '../../components/Input/Input'
import { Grid, Button } from '@mui/material'
import { userContext } from '../../context/User'

const Update = () => {
  const { aadhaarNumber, setAadhaarNumber } = userContext()
  const navigate = useNavigate()

  return (
    <>
      <Header subheading="Update" />
      <div className={styles.subheading__container}>
        <h3 className={styles.subheading}> Provide Aadhaar Number (UID): </h3>
        <Input
          type="text"
          id="aadhaarNumber"
          value={aadhaarNumber}
          onChange={(e) => setAadhaarNumber(e.target.value)}
          placeholder="Enter your Aadhaar Number"
          required
        />
        <Grid container columnSpacing={10} justifyContent="center">
          <Grid item>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              Send OTP
            </Button>
          </Grid>
        </Grid>
      </div>
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
              onClick={() => navigate('/update/select-update')}
            >
              Verify OTP
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Update

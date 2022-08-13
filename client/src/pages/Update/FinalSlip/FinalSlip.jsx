import React from 'react'
import Header from '../../../components/Header/Header'
import CardScanner from '../../../components/Card/CardScanner'
import styles from './FinalSlip.module.css'
import { Grid, Typography } from '@mui/material'

const FinalSlip = () => {
  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.card__container}>
        <CardScanner
          image={`${process.env.PUBLIC_URL}/assets/images/slip.svg`}
        />
      </div>
      <div>
        <Grid container justifyContent="center">
          <Typography align="center" fontWeight={'Bold'}>
          Thank you for your time.<br />
          Please collect your slip before leaving
          </Typography>
        </Grid>
      </div>
    </>
  )
}

export default FinalSlip

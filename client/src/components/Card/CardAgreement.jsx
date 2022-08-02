import React from 'react'
import styles from './CardAgreement.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'
import { Typography } from '@mui/material'

const CardAgreement = ({ title, image }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
        <Typography>
        I hereby confirm the identity and address of ___________ as being true, correct and accurate.
        </Typography>
      </div>
      <SubmitButton />
    </>
  )
}

export default CardAgreement

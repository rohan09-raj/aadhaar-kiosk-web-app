import React from 'react'
import styles from './CardAgreement.module.css'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const CardAgreement = ({ title, image }) => {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
        <Typography align="center">
          {t('I_HEREBY_CONFIRM_THE_IDENTITY_AND_ADDRESS')}
        </Typography>
      </div>
    </>
  )
}

export default CardAgreement

import { Typography } from '@mui/material'
import React from 'react'
import styles from './BackButton.module.css'
import { useTranslation } from 'react-i18next'

const BackButton = ({ onClick, onChange }) => {
  const { t } = useTranslation()
  return (
    <>
      <button
        onClick={onClick}
        className={styles.submit}
        type="submit"
        onChange={onChange}
      >
        <div className={styles.submit__content}>
          <img
            className={styles.submit__image}
            src={`${process.env.PUBLIC_URL}/assets/images/back.svg`}
            alt=""
          />
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bolder', margin: '10px', color: '#323c7a' }}>{t('BACK')}</Typography>
        </div>
      </button>
    </>
  )
}

export default BackButton

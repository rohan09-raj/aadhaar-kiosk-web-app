import React from 'react'
import styles from './SubmitButton.module.css'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const SubmitButton = ({ onClick, onChange, disabled }) => {
  const { t } = useTranslation()
  return (
    <>
      <button
        onClick={onClick}
        className={styles.submit}
        type="submit"
        onChange={onChange}
        disabled={disabled}
      >
        <div className={styles.submit__content}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bolder', margin: '10px', color: '#323c7a' }}>{t('SAVE_&_NEXT')}</Typography>
          <img
            className={styles.submit__image}
            src={`${process.env.PUBLIC_URL}/assets/images/next_icon.svg`}
            alt=""
          />
        </div>
      </button>
    </>
  )
}

export default SubmitButton

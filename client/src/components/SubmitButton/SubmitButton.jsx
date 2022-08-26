import React from 'react'
import styles from './SubmitButton.module.css'
import { Typography } from '@mui/material'

const SubmitButton = ({ onClick, onChange, disabled }) => {
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
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bolder', margin: '10px', color: '#323c7a' }}>Save & Next</Typography>
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

import { Typography } from '@mui/material'
import React from 'react'
import styles from './BackButton.module.css'

const BackButton = ({ onClick, onChange }) => {
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
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bolder', margin: '10px', color: '#323c7a' }}>Back</Typography>
        </div>
      </button>
    </>
  )
}

export default BackButton

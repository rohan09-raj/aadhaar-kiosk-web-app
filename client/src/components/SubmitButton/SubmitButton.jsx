import React from 'react'
import styles from './SubmitButton.module.css'

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
        <img
          className={styles.submit__image}
          src={`${process.env.PUBLIC_URL}/assets/images/next_icon.svg`}
          alt=""
        />
      </button>
    </>
  )
}

export default SubmitButton

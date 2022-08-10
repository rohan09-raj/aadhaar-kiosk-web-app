import React from 'react'
import styles from './SubmitButton.module.css'

const SubmitButton = () => {
  return (
    <>
      <button className={styles.submit} type="submit">
        <img
          className={styles.submit__image}
          src={`${process.env.PUBLIC_URL}/assets/images/white-check.svg`}
          alt=""
        />
      </button>
    </>
  )
}

export default SubmitButton

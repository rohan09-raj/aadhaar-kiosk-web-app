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
        <img
          className={styles.submit__image}
          src={`${process.env.PUBLIC_URL}/assets/images/next_icon.svg`}
          alt=""
        />
      </button>
    </>
  )
}

export default BackButton

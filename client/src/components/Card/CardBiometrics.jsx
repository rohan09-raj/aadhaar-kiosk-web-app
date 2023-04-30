import React from 'react'
import styles from './CardBiometrics.module.css'

const CardBiometrics = ({ title, image }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
      </div>
    </>
  )
}

export default CardBiometrics

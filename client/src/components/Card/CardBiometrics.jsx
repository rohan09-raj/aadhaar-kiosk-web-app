import React from 'react'
import styles from './CardBiometrics.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'

const CardBiometrics = ({ title, image }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
      </div>
      <SubmitButton />
    </>
  )
}

export default CardBiometrics

import React from 'react'
import styles from './CardScanner.module.css'

const CardScanner = ({ title, image }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
      </div>
    </>
  )
}

export default CardScanner

import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, image, onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <img className={styles.card__image} src={image} alt="" height="250px" />
      <h2 className={styles.card__title}>{title}</h2>
    </div>
  )
}

export default Card

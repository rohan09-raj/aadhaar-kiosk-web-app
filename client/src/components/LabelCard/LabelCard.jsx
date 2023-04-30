import React from 'react'
import styles from './LabelCard.module.css'

const LabelCard = ({ id, name, value, title, image, onChange, readOnly }) => {
  return (
    <div className={styles.labelcard}>
      <label htmlFor={id} className={styles.card}>
        <img className={styles.card__image} src={image} alt="" />
        <h4 className={styles.card__title}>{title}</h4>
      </label>
      <input
        className={styles.labelcard__radio}
        type="radio"
        id={id}
        name={name}
        value={value}
        required
        onChange={onChange}
        disabled={readOnly}
      />
    </div>
  )
}

export default LabelCard

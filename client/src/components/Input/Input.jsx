import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, id, value, type, name }) => {
  return (
    <div className={styles.input}>
      <div className={styles.input__container}>
        <label htmlFor={id}>{label}</label>
        <input
          className={styles.input__field}
          type={type}
          id={id}
          name={name}
          value={value}
          required
        />
      </div>
    </div>
  )
}

export default Input

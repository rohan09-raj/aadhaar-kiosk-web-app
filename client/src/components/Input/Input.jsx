import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, id, value, type, name, onChange, placeholder }) => {
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
          onChange={onChange}
          required
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Input

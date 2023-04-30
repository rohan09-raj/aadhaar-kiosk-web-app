import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, id, value, type, name, onChange, placeholder, maxLength, pattern, minLength, onInvalid, onValid }) => {
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
          pattern={pattern}
          maxLength={maxLength}
          minLength={minLength}
          onInvalid={onInvalid}
          onValid={onValid}
        />
      </div>
    </div>
  )
}

export default Input

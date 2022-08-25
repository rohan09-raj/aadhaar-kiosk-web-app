import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialUserData } from '../../constants/userData'
import { userContext } from '../../context/User'

import styles from './Error.module.css'

const Error = ({ message }) => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [])

  return (
    <>
      <div className={styles.error}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/error.svg`}
          className={styles.error__image}
        />
        <h1 className={styles.error__title}>{message}</h1>
      </div>
    </>
  )
}

export default Error

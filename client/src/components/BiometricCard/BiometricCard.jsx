import React from 'react'
import EditButton from '../EditButton/EditButton'
import styles from './BiometricCard.module.css'

const BiometricCard = ({ label, onclick }) => {
  return (
    <div className={styles.formone}>
      <div className={styles.input}>
        <div className={styles.input__container}>
          <div className={styles.input__edit}>
            <div className={styles.input__field}>{label}</div>
            <EditButton onClick={onclick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiometricCard

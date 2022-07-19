import React from 'react'
import styles from './FormOne.module.css'

const FormOne = () => {
  return (
    <div className={styles.formone}>
      <div className={styles.formone__radio}>
        <span className={styles.formone__resident}>
          <input
            type="radio"
            id="indian"
            name="resident"
            value="Indian Resident"
            required
          />
          <label htmlFor="indian">Indian Resident</label>
        </span>
        <span className={styles.formone__resident}>
          <input
            type="radio"
            id="indian"
            name="resident"
            value="Indian Resident"
            required
          />
          <label htmlFor="indian">Non-Residential Indian</label>
        </span>
      </div>

      <div className={styles.formone__fullname}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value="Full Name"
          required
        />
      </div>

      <div className={styles.formone__dob}>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" value="Date of Birth" required />
      </div>
    </div>
  )
}

export default FormOne

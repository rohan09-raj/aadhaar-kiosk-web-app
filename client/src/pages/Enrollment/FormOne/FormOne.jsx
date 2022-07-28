import React from 'react'
import Input from '../../../components/Input/Input'
import LabelCard from '../../../components/LabelCard/LabelCard'
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

      <Input type="text" id="fullName" label="Full Name" value="Full Name" />

      <div className={styles.formone__gender}>
        <LabelCard
          id="male"
          name="gender"
          title="Male"
          image={`${process.env.PUBLIC_URL}/assets/images/male.svg`}
        />
        <LabelCard
          id="female"
          name="gender"
          value="female"
          title="Female"
          image={`${process.env.PUBLIC_URL}/assets/images/female.svg`}
        />
        <LabelCard
          id="trans"
          name="gender"
          value="trans"
          title="Transgender"
          image={`${process.env.PUBLIC_URL}/assets/images/trans.svg`}
        />
      </div>

      <div className={styles.formone__dob}>
        <label htmlFor="dob">Date of Birth</label>
        <input
          className={styles.formone__dob_input}
          type="date"
          id="dob"
          name="dob"
          value="Date of Birth"
          required
        />
      </div>
    </div>
  )
}

export default FormOne

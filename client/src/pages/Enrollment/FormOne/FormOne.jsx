import React, { useState } from 'react'
import Input from '../../../components/Input/Input'
import LabelCard from '../../../components/LabelCard/LabelCard'
import styles from './FormOne.module.css'

const FormOne = () => {
  const [indianResident, setIndianResident] = useState(true)
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date().toISOString().slice(0, 10)
  )

  console.log(fullName, indianResident, gender, dateOfBirth)

  return (
    <div className={styles.formone}>
      <div className={styles.formone__radio}>
        <span className={styles.formone__resident}>
          <input
            type="radio"
            id="indian"
            name="resident"
            value={indianResident}
            onChange={() => setIndianResident(true)}
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
            onChange={() => setIndianResident(false)}
            required
          />
          <label htmlFor="indian">Non-Residential Indian</label>
        </span>
      </div>

      <Input
        type="text"
        id="fullName"
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your full name"
        pattern="[a-zA-z]+"
      />

      <div className={styles.formone__gender}>
        <LabelCard
          id="male"
          name="gender"
          title="Male"
          value={gender}
          onChange={() => setGender('male')}
          image={`${process.env.PUBLIC_URL}/assets/images/male.svg`}
        />
        <LabelCard
          id="female"
          name="gender"
          value={gender}
          title="Female"
          onChange={() => setGender('female')}
          image={`${process.env.PUBLIC_URL}/assets/images/female.svg`}
        />
        <LabelCard
          id="trans"
          name="gender"
          value={gender}
          title="Transgender"
          onChange={() => setGender('transgender')}
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
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </div>
    </div>
  )
}

export default FormOne

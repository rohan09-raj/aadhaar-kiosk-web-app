import React from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import LabelCard from '../../../components/LabelCard/LabelCard'
import styles from './FormOne.module.css'

const FormOne = ({ formData, setFormData }) => {
  console.log(formData.indianResident, formData.name, formData.dob, formData.gender)

  const handleSubmit = () => {
  }

  return (
    <><Header subheading="Enrollment" /><form onSubmit={() => handleSubmit()}>
      <div className={styles.formone}>
        <div className={styles.formone__radio}>
          <span className={styles.formone__resident}>
            <input
              type="radio"
              id="indian"
              name="resident"
              value={formData.indianResident}
              onChange={() => {
                setFormData({
                  ...formData,
                  indianResident: true
                })
              }}
              required />
            <label htmlFor="indian">Indian Resident</label>
          </span>
          <span className={styles.formone__resident}>
            <input
              type="radio"
              id="indian"
              name="resident"
              value={formData.indianResident}
              onChange={() => {
                setFormData({
                  ...formData,
                  indianResident: false
                })
              }}
              required />
            <label htmlFor="indian">Non-Residential Indian</label>
          </span>
        </div>

        <Input
          type="text"
          id="fullName"
          label="Full Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value
            })
          }}
          placeholder="Enter your full name"
          pattern="[a-zA-z]+" />

        <div className={styles.formone__gender}>
          <LabelCard
            id="male"
            name="gender"
            title="Male"
            value={formData.gender}
            onChange={() => {
              setFormData({
                ...formData,
                gender: 'Male'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/male.svg`} />
          <LabelCard
            id="female"
            name="gender"
            value={formData.gender}
            title="Female"
            onChange={() => {
              setFormData({
                ...formData,
                gender: 'Female'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/female.svg`} />
          <LabelCard
            id="trans"
            name="gender"
            value={formData.gender}
            title="Transgender"
            onChange={() => {
              setFormData({
                ...formData,
                gender: 'Transgender'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/trans.svg`} />
        </div>

        <div className={styles.formone__dob}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            className={styles.formone__dob_input}
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={(e) => {
              setFormData({
                ...formData,
                dob: e.target.value
              })
            }}
            required />
        </div>
      </div>
    </form></>
  )
}

export default FormOne

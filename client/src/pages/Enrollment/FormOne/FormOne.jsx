import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import LabelCard from '../../../components/LabelCard/LabelCard'
import styles from './FormOne.module.css'

const FormOne = ({ formData, setFormData }) => {
  const { t } = useTranslation()

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
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
              required
            />
            <label htmlFor="indian">{t('INDIAN_RESIDENT')}</label>
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
              required
            />
            <label htmlFor="indian">{t('NON_RESIDENTIAL_INDIAN')}</label>
          </span>
        </div>

        <Input
          type="text"
          id="fullName"
          label={t('FULL_NAME')}
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value
            })
          }}
          placeholder={t('ENTER_YOUR_FULL_NAME')}
        />

        <div className={styles.formone__gender}>
          <LabelCard
            id="male"
            name="gender"
            title={t('MALE')}
            value={formData.gender}
            onChange={() => {
              setFormData({
                ...formData,
                gender: 'Male'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/male.svg`}
          />
          <LabelCard
            id="female"
            name="gender"
            value={formData.gender}
            title={t('FEMALE')}
            onChange={() => {
              setFormData({
                ...formData,
                gender: 'Female'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/female.svg`}
          />
          <LabelCard
            id="trans"
            name="gender"
            value={formData.gender}
            title={t('OTHER')}
            onChange={() => {
              setFormData({
                ...formData,
                gender: 'Other'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/trans.svg`}
          />
        </div>

        <div className={styles.formone__dob}>
          <label htmlFor="dob">{t('DATE_OF_BIRTH')}</label>
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
            required
          />
        </div>
      </div>
    </>
  )
}

export default FormOne

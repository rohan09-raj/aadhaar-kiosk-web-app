import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import LabelCard from '../../../components/LabelCard/LabelCard'
import styles from './FormOne.module.css'
import { userContext } from '../../../context/User'
import PopUpModal from '../../../components/Modal/Modal'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const FormOne = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()

  useEffect(() => {
    switch (userData.gender) {
      case 'Male':
        document.getElementById('male').checked = 'checked'
        break
      case 'Female':
        document.getElementById('female').checked = 'checked'
        break
      case 'Other':
        document.getElementById('other').checked = 'checked'
        break
    }

    if (userData.indianResident === true) {
      document.getElementById('indian').checked = 'checked'
    } else if (userData.indianResident === false) {
      document.getElementById('non-resident-indian').checked = 'checked'
    }
  }, [userData.gender])

  const description = [
    'SELECT_YOUR_RESIDENCY_BY_SELECTING_THE_APPROPRIATE_CHECKBOX',
    'ENTER_YOUR_FULL_NAME_WITHOUT_ANY_TITLE_OR_SALUTATION',
    'SELECT_YOUR_GENDER_BY_CLICKING_ON_THE_APPROPRIATE_CARD',
    'SELECT_YOUR_DATE_OF_BIRTH_FROM_THE_PROVIDED_CALENDER'
  ]

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/personal-details`}
      />
      <PopUpModal
        title="FILL_YOUR_INFORMATION"
        image={`${process.env.PUBLIC_URL}/assets/images/id.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (
                <li className="list__item" key="id">
                  {t(item)}
                </li>
              ))}
            </ul>
          </>
        }
      />
      <div className={styles.formone}>
        <div className={styles.formone__radio}>
          <span className={styles.formone__resident}>
            <input
              type="radio"
              id="indian"
              name="resident"
              value={userData.indianResident}
              onChange={() => {
                setUserData({
                  ...userData,
                  indianResident: true
                })
              }}
              required
            />
            <label htmlFor="indian" className={styles.label}>{t('INDIAN_RESIDENT')}</label>
          </span>
          <span className={styles.formone__resident}>
            <input
              type="radio"
              id="non-resident-indian"
              name="resident"
              value={userData.indianResident}
              onChange={() => {
                setUserData({
                  ...userData,
                  indianResident: false
                })
              }}
              required
            />
            <label className={styles.label} htmlFor="non-resident-indian">
              {t('NON_RESIDENTIAL_INDIAN')}
            </label>
          </span>
        </div>

        <Input
          type="text"
          id="fullName"
          label={t('FULL_NAME')}
          value={userData.name}
          onChange={(e) => {
            setUserData({
              ...userData,
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
            value={userData.gender}
            onChange={() => {
              setUserData({
                ...userData,
                gender: 'Male'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/male.svg`}
          />
          <LabelCard
            id="female"
            name="gender"
            value={userData.gender}
            title={t('FEMALE')}
            onChange={() => {
              setUserData({
                ...userData,
                gender: 'Female'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/female.svg`}
          />
          <LabelCard
            id="other"
            name="gender"
            value={userData.gender}
            title={t('OTHER')}
            onChange={() => {
              setUserData({
                ...userData,
                gender: 'Other'
              })
            }}
            image={`${process.env.PUBLIC_URL}/assets/images/trans.svg`}
          />
        </div>

        <div className={styles.formone__dob}>
          <label htmlFor="dob">{t('DATE_OF_BIRTH')}</label>
          <div style={{ marginRight: '160px' }}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                inputFormat="MM/DD/yyyy"
                value={userData.dob}
                showToolbar={false}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    dob: e
                  })
                }}
                renderInput={(params) => <TextField
                  placeholder="MM/DD/YYYY" sx={{
                    '& fieldset': {
                      width: '500px',
                      height: '80px',
                      border: '3px solid !important',
                      borderRadius: '10px',
                      fontSize: '1.5rem'
                    }
                  }} {...params} />}
              />
            </LocalizationProvider>
          </div>
          {/* <input
            className={styles.formone__dob_input}
            type="date"
            id="dob"
            name="dob"
            value={userData.dob}
            onChange={(e) => {
              setUserData({
                ...userData,
                dob: e.target.value
              })
            }}
            required
          /> */}
        </div>
      </div>
    </>
  )
}

export default FormOne

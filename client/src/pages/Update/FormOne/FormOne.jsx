import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import styles from './FormOne.module.css'
import EditButton from '../../../components/EditButton/EditButton'
import Gender from '../../../components/Gender/Gender'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'
import PopUpModal from '../../../components/Modal/Modal'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const FormOne = () => {
  const { userData, setUserData } = userContext()
  const { t } = useTranslation()

  const [editable, setEditable] = React.useState(true)

  const handleEdit = () => {
    setEditable(!editable)
  }

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
  }, [userData.gender])

  const description = [
    'SELECT_YOUR_RESIDENCY_BY_SELECTING_THE_APPROPRIATE_CHECKBOX',
    'ENTER_YOUR_FULL_NAME_WITHOUT_ANY_TITLE_OR_SALUTATION',
    'SELECT_YOUR_GENDER_BY_CLICKING_ON_THE_APPROPRIATE_CARD',
    'SELECT_YOUR_DATE_OF_BIRTH_FROM_THE_PROVIDED_CALENDER'
  ]

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/demographic-personal-details-to-be-updated`}
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
        <UpdateInput
          type="text"
          id="fullName"
          label={t('FULL_NAME')}
          value={userData?.name}
          onChange={(e) => {
            setUserData({
              ...userData,
              name: e.target.value
            })
          }}
          placeholder={t('ENTER_YOUR_FULL_NAME')}
        />

        <UpdateInput
          id="mobile"
          value={userData?.mobile}
          label={t('MOBILE')}
          type="text"
          onChange={(e) => {
            setUserData({
              ...userData,
              mobile: e.target.value
            })
          }}
          placeholder={t('ENTER_YOUR_MOBILE_NUMBER')}
        />

        <div className={styles.formone__dob}>
          <label className={styles.label} htmlFor="dob">{t('DATE_OF_BIRTH')}</label>
          <div className={styles.input__edit}>
          <div style={{ marginBlock: '20px' }}>
          <div style={{ marginRight: '160px' }}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                inputFormat="MM/DD/yyyy"
                value={userData.dob}
                className={styles.dob}
                disabled={editable}
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
                      fontSize: '1.75rem !important'
                    }
                  }} {...params} />}
              />
            </LocalizationProvider>
            </div>
            </div>
            <EditButton onClick={handleEdit} enabled={!editable ? '1' : '0'} />
          </div>
        </div>

        <UpdateInput
          id="email"
          value={userData?.email}
          label={t('EMAIL')}
          type="email"
          onChange={(e) => {
            setUserData({
              ...userData,
              email: e.target.value
            })
          }}
          placeholder={t('ENTER_YOUR_EMAIL_ID')}
        />

        <Gender formData={userData} setFormData={setUserData} />
      </div>
    </>
  )
}

export default FormOne

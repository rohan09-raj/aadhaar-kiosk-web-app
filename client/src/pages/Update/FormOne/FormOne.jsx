import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import styles from './FormOne.module.css'
import EditButton from '../../../components/EditButton/EditButton'
import Gender from '../../../components/Gender/Gender'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import PopUpModal from '../../../components/Modal/Modal'

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

  const description = ['SELECT_YOUR_RESIDENCY_BY_SELECTING_THE_APPROPRIATE_CHECKBOX', 'ENTER_YOUR_FULL_NAME_WITHOUT_ANY_TITLE_OR_SALUTATION', 'SELECT_YOUR_GENDER_BY_CLICKING_ON_THE_APPROPRIATE_CARD', 'SELECT_YOUR_DATE_OF_BIRTH_FROM_THE_PROVIDED_CALENDER']

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <PopUpModal
        title="FILL_YOUR_INFORMATION"
        image={`${process.env.PUBLIC_URL}/assets/images/id.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (<li className="list__item" key='id'>{t(item)}</li>))}
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
          <label htmlFor="dob">{t('DATE_OF_BIRTH')}</label>
          <div className={styles.input__edit}>
            <input
              className={styles.formone__dob_input}
              type="date"
              id="dob"
              name="dob"
              value={userData?.dob}
              readOnly={editable}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  dob: e.target.value
                })
              }}
              required
            />
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

import React from 'react'
import Header from '../../../components/Header/Header'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import styles from './FormOne.module.css'
import EditButton from '../../../components/EditButton/EditButton'
import Gender from '../../../components/Gender/Gender'
import { useTranslation } from 'react-i18next'

const FormOne = ({ formData, setFormData }) => {
  const { t } = useTranslation()

  const [editable, setEditable] = React.useState(true)

  const handleEdit = () => {
    setEditable(!editable)
  }

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <div className={styles.formone}>
        <UpdateInput
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

        <UpdateInput
          id="mobile"
          value={formData.mobile}
          label={t('MOBILE')}
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
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
              value={formData.dob}
              readOnly={editable}
              onChange={(e) => {
                setFormData({
                  ...formData,
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
          value={formData.email}
          label={t('EMAIL')}
          type="email"
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value
            })
          }}
          placeholder={t('ENTER_YOUR_EMAIL_ID')}
        />

        <Gender formData={formData} setFormData={setFormData} />
      </div>
    </>
  )
}

export default FormOne

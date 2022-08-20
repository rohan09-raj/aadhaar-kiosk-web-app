import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import { userContext } from '../../../context/User'

import styles from './FormTwo.module.css'

const FormTwo = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()
  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <div className={styles.formtwo__input}>
        <Input
          id="mobile"
          value={userData.mobile}
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
        <Input
          id="email"
          value={userData.email}
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
      </div>
    </>
  )
}

export default FormTwo

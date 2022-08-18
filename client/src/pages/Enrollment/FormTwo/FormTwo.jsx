import React from 'react'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'

const FormTwo = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()
  return (
    <div className="formtwo">
      <Header subheading={t('ENROLLMENT')} />
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
      <SubmitButton />
    </div>
  )
}

export default FormTwo

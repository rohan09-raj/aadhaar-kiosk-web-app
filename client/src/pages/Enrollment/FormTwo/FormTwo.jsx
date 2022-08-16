import React from 'react'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useTranslation } from 'react-i18next'

const FormTwo = ({ formData, setFormData }) => {
  const { t } = useTranslation()
  return (
    <div className="formtwo">
      <Header subheading={t('ENROLLMENT')} />
      <Input
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
        pattern="[0-9]+"
        maxLength="10"
        minLength="10"
      />
      <Input
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
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <SubmitButton />
    </div>
  )
}

export default FormTwo

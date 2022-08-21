import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import { userContext } from '../../../context/User'

import styles from './FormTwo.module.css'
import PopUpModal from '../../../components/Modal/Modal'

const FormTwo = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()
  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <PopUpModal
        title="Fill your information"
        image={`${process.env.PUBLIC_URL}/assets/images/communication.svg`}
        description={
          <>
            <ul>
              <li className="list__item">
                Enter your 10 digit mobile number without any prefix or country
                code
              </li>
              <li className="list__item">
                Enter your email address in proper format
              </li>
            </ul>
          </>
        }
      />
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

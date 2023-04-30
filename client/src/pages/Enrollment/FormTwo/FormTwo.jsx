import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from '../../../components/Input/Input'
import Header from '../../../components/Header/Header'
import { userContext } from '../../../context/User'

import styles from './FormTwo.module.css'
import PopUpModal from '../../../components/Modal/Modal'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

const FormTwo = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()
  const description = [
    'ENTER_YOUR_10_DIGIT_MOBILE_NUMBER_WITHOUT_ANY_PREFIX_OR_COUNTRY_ID',
    'ENTER_YOUR_EMAIL_ID'
  ]
  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/mobile-and-email-id`}
      />
      <PopUpModal
        title="FILL_YOUR_INFORMATION"
        image={`${process.env.PUBLIC_URL}/assets/images/communication.svg`}
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

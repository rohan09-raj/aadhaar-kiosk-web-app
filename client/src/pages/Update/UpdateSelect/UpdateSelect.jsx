import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card/Card'
import Header from '../../../components/Header/Header'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

import styles from './UpdateSelect.module.css'

const UpdateSelect = () => {
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <div className={styles.card__container}>
        <Link to="/update/demographic">
          <Card
            title={t('DEMOGRAPHIC')}
            image={`${process.env.PUBLIC_URL}/assets/images/demographic.svg`}
          />
        </Link>
        <Link to="/update/biometric">
          <Card
            title={t('BIOMETRIC')}
            image={`${process.env.PUBLIC_URL}/assets/images/biometrics.svg`}
          />
        </Link>
        <Link to="/update/agreement">
          <SubmitButton />
        </Link>
      </div>
    </>
  )
}

export default UpdateSelect

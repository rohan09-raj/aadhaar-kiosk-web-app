import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.css'

const Header = ({ subheading }) => {
  const { t } = useTranslation()
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>{t('AADHAAR')}</h1>
      <h3 className={styles.header__subheading}>{subheading}</h3>
    </header>
  )
}

export default Header

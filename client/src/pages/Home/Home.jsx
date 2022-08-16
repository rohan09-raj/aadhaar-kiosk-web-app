import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect'
import styles from './Home.module.css'

const Home = ({ page, setPage }) => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('MERA_AADHAAR_MERI_PEHCHAN')} />
      <LanguageSelect />
      <div className={styles.card__container}>
        <Link to="/enrollment">
          <Card
            title={t('ENROLLMENT')}
            image={`${process.env.PUBLIC_URL}/assets/images/enrollment.svg`}
          />
        </Link>
        <Link to="/update">
          <Card
            title={t('UPDATE')}
            image={`${process.env.PUBLIC_URL}/assets/images/update.svg`}
          />
        </Link>
      </div>
    </>
  )
}

export default Home

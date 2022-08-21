import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import ExtendedPopUpModal from '../../components/Modal/ExtendedModal'
import styles from './Home.module.css'

const Home = ({ page, setPage }) => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('MERA_AADHAAR_MERI_PEHCHAN')} />
      <ExtendedPopUpModal
        title="Choose the appropriate card"
        description1="For enrollment of new Aadhaar card"
        image1={`${process.env.PUBLIC_URL}/assets/images/enrollment.svg`}
        description2="For updation of details of existing Aadhaar card holders"
        image2={`${process.env.PUBLIC_URL}/assets/images/update.svg`}
        description3="For checking the status of Aadhaar card enrollment and update requests"
        image3={`${process.env.PUBLIC_URL}/assets/images/status.svg`}
      />
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

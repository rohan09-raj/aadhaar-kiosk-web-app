import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import ExtendedPopUpModal from '../../components/Modal/ExtendedModal'
import styles from './Home.module.css'
import AudioAutoplay from '../../components/AudioAutoplay/AudioAutoplay'

const Home = ({ page, setPage }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <Header subheading={t('MERA_AADHAAR_MERI_PEHCHAN')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/main-screen`}
      />
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
        <Card
          onClick={() => navigate('/enrollment')}
          title={t('ENROLLMENT')}
          image={`${process.env.PUBLIC_URL}/assets/images/enrollment.svg`}
        />

        <Card
          onClick={() => navigate('/update')}
          title={t('UPDATE')}
          image={`${process.env.PUBLIC_URL}/assets/images/update.svg`}
        />
        <Card
          onClick={() => navigate('/status')}
          title={t('CHECK_STATUS')}
          image={`${process.env.PUBLIC_URL}/assets/images/status.svg`}
        />
      </div>
    </>
  )
}

export default Home

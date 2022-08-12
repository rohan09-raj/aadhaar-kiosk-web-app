import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import styles from './Home.module.css'

const Home = ({ page, setPage }) => {
  return (
    <>
      <Header subheading="Mera Aadhaar Meri Pehchan" />
      <div className={styles.card__container}>
          <Card
            title="Enrollment"
            image={`${process.env.PUBLIC_URL}/assets/images/enrollment.svg`}
            onClick={(e) => {
              setPage(0)
            }}
          />
        <Link to="/update">
          <Card
            title="Update"
            image={`${process.env.PUBLIC_URL}/assets/images/update.svg`}
          />
        </Link>
      </div>
    </>
  )
}

export default Home

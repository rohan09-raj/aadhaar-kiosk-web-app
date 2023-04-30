import React from 'react'
import styles from './Header.module.css'

const Header = ({ subheading }) => {
  return (
    <header className={styles.header}>
      <img src={`${process.env.PUBLIC_URL}/favicon.ico`} className={styles.header__image}/>
      <h3 className={styles.header__subheading}>{subheading}</h3>
    </header>
  )
}

export default Header

import React from 'react'
import styles from './Header.module.css'

const Header = ({ subheading }) => {
  return (
    <header className={styles.header}>
      <h1>AADHAAR</h1>
      <h3>{subheading}</h3>
    </header>
  )
}

export default Header

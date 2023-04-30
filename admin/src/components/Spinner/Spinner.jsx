import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Header from '../Header/Header'
import styles from './Spinner.module.css'

const Spinner = ({ heading }) => {
    console.log(heading)
    return (
        <div className={styles.spinner}>
            <Header subheading={heading} />
            <CircularProgress />
        </div>
    )
}

export default Spinner

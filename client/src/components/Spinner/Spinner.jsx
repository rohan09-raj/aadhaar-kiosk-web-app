import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Header from '../Header/Header'
import { useTranslation } from 'react-i18next'
import styles from './Spinner.module.css'

const Spinner = ({ heading }) => {
    const { t } = useTranslation()
    console.log(heading)
    return (
        <div className={styles.spinner}>
            <Header subheading={`${t(`${heading}`)}`} />
            <CircularProgress />
        </div>
    )
}

export default Spinner

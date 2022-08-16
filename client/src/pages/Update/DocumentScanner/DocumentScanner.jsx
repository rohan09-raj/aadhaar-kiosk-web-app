import React from 'react'
import Header from '../../../components/Header/Header'
import CardScanner from '../../../components/Card/CardScanner'
import styles from './DocumentScanner.module.css'
import { Button, Grid, Typography } from '@mui/material'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useTranslation } from 'react-i18next'

const DocumentScanner = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading="Update" />
      <div className={styles.card__container}>
        <CardScanner
          image={`${process.env.PUBLIC_URL}/assets/images/document.svg`}
        />
      </div>
      <Grid container columnSpacing={10} justifyContent="center">
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            {t('SCAN')}
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            {t('RESET')}
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <div>
        <Grid container justifyContent="center">
          <Typography align="center">
            {t('KINDLY_CLICK_THE_PICTURE_OF_YOUR_DOCUMENTS')}
          </Typography>
        </Grid>
      </div>
      <SubmitButton />
    </>
  )
}

export default DocumentScanner

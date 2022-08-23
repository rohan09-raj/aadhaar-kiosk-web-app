import React from 'react'
import Header from '../../../components/Header/Header'
import CardBiometrics from '../../../components/Card/CardBiometrics'
import styles from './Fingerprint.module.css'
import { Button, Grid, Typography } from '@mui/material'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useTranslation } from 'react-i18next'
import PopUpModal from '../../../components/Modal/Modal'

const Fingerprint = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <PopUpModal
        title="Scan your Fingerprints"
        image={`${process.env.PUBLIC_URL}/assets/images/fingerprint_scan.svg`}
        description={
          <>
            <ul>
              <li className="list__item">INSTRUCTIONS TO BE ADDED</li>
            </ul>
          </>
        }
      />
      <div className={styles.card__container}>
        <CardBiometrics
          image={`${process.env.PUBLIC_URL}/assets/images/fingerprint.svg`}
        />
        <CardBiometrics
          image={`${process.env.PUBLIC_URL}/assets/images/fingerprint.svg`}
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
            {t('PLEASE_PUT_YOUR_FINGERS_ON_THE_FINGERPRINT_SCANNER')}
            <br />
            {t('WAIT_FOR_PROMPT_AND_BEEP_SOUND_TO_REMOVE_YOUR_FINGERS')}
          </Typography>
        </Grid>
      </div>
      <SubmitButton />
    </>
  )
}

export default Fingerprint

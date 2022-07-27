import React from 'react'
import Header from '../../components/Header/Header'
import CardScanner from '../../components/Card/CardScanner'
import styles from './DocumentScanner.module.css'
import { Button, Grid, Typography } from '@mui/material'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

const DocumentScanner = () => {
    return (
        <><Header subheading="Enrollment" />
            <div className={styles.card__container}>
                <CardScanner
                    image={`${process.env.PUBLIC_URL}/assets/images/document.svg`} />
            </div>
            <Grid container columnSpacing={10} justifyContent="center">
                <Grid item>
                    <Button color="primary" size="large" type="submit" variant="contained">
                        Scan
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="primary" size="large" type="submit" variant="contained">
                        Reset
                    </Button>
                </Grid>
            </Grid>
            <br></br>
            <div>
                <Grid container justifyContent="center">
                    <Typography align='center'>
                        Please place your document on the scanner.<br />
                        Close the lid.<br />
                        Wait for prompt to remove your document
                    </Typography>
                </Grid>
            </div>
            <SubmitButton />

        </>
    )
}

export default DocumentScanner

import React from 'react'
import { Modal, Box, Button } from '@mui/material'
import styles from './ExtendedModal.module.css'
import { Container } from '@mui/system'

const ExtendedPopUpModal = ({
  title,
  description1,
  image1,
  description2,
  image2,
  description3,
  image3
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className={styles.modal}>
      <Button onClick={handleOpen} sx={{ borderRadius: '50%' }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/help.svg`}
          height="65px"
          width="65px"
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 id="modal-modal-title" className={styles.modal__title}>
            {title}
          </h1>
          <Container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Container
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img
                src={image1}
                height="200px"
                width="200px"
                className={styles.modal__image}
              />
              <h3 className={styles.modal__content}>{description1}</h3>
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
              <h3 className={styles.modal__content}>{description2}</h3>
              <img
                src={image2}
                height="200px"
                width="200px"
                className={styles.modal__image}
              />
            </Container>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={image3}
                height="200px"
                width="200px"
                className={styles.modal__image}
              />
              <h3 className={styles.modal__content}>{description3}</h3>
            </Container>
          </Container>
        </Box>
      </Modal>
    </div>
  )
}

export default ExtendedPopUpModal

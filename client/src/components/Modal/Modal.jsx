import React from 'react'
import { Modal, Box, Button } from '@mui/material'
import styles from './Modal.module.css'
import { Container } from '@mui/system'
import { useTranslation } from 'react-i18next'

const PopUpModal = ({ title, description, image }) => {
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
  const { t } = useTranslation()
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
            {t(`${title}`)}
          </h1>
          <Container sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={image}
              height="300px"
              width="300px"
              className={styles.modal__image}
            />
            <h3 className={styles.modal__content}>{description}</h3>
          </Container>
        </Box>
      </Modal>
    </div>
  )
}

export default PopUpModal

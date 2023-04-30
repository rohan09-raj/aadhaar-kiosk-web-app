import React from 'react';
import {Modal, Box} from '@mui/material';
import styles from './MessageModal.module.css';
import Button from '../Button/Button';

const MessageModal = ({title, open, setOpen, onChange, onClick}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <h1 id='modal-modal-title' className={styles.modal__title}>
          {title}
        </h1>
        <div className={styles.modal__content}>
          <textarea
            className={styles.modal__input}
            onChange={onChange}
            type='textarea'
            placeholder='Enter the reason for rejection'
          />
          <Button color='red' title='Confirm Reject' onClick={onClick} />
        </div>
      </Box>
    </Modal>
  );
};

export default MessageModal;

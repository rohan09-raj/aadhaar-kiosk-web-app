import React from 'react';
import {Modal, Box} from '@mui/material';
import styles from './Modal.module.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const PopUpModal = ({documents, open, setOpen}) => {
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

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className={styles.modal}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
              <TabList onChange={handleChange}>
                <Tab label='Proof of Identity' value='1' />
                <Tab label='Proof of Address' value='2' />
                <Tab label='Proof of Date of Birth' value='3' />
              </TabList>
            </Box>
            <TabPanel
              value='1'
              sx={{
                textAlign: 'center',
              }}
            >
              <img src={documents.POI} alt='' />
            </TabPanel>
            <TabPanel
              value='2'
              sx={{
                textAlign: 'center',
              }}
            >
              <img src={documents.POA} alt='' />
            </TabPanel>
            <TabPanel
              value='3'
              sx={{
                textAlign: 'center',
              }}
            >
              <img src={documents.DOB} alt='' />
            </TabPanel>
          </TabContext>
        </Box>
      </Modal>
    </div>
  );
};

export default PopUpModal;

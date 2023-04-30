import React, {useState} from 'react';
import {Button} from '@mui/material';

import styles from './Accordion.module.css';
import PopUpModal from '../Modal/Modal';

const Accordion = ({name, user}) => {
  const [isActive, setIsActive] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div className={styles.accordion}>
        <div
          className={styles.accordion__title}
          onClick={() => setIsActive(!isActive)}
        >
          <h2>{name}</h2>
          <span className={styles.accordion__subheading}>
            Date of Birth: {user.dob}
          </span>
          <span className={styles.accordion__subheading}>
            Mobile Number: {user.mobile}
          </span>
          <div>&#10095;</div>
        </div>
        {isActive && (
          <div className={styles.accordion__content}>
            <div className={styles.accordion__demographic}>
              <div>
                <span>Name</span> <hr /> {user.name}
              </div>
              <div>
                <span>Gender</span> <hr /> {user.gender}
              </div>
              <div>
                <span>Date of Birth</span> <hr /> {user.dob}
              </div>
              <div>
                <span>Mobile Number</span> <hr /> {user.mobile}
              </div>
              <div>
                <span>Email</span> <hr /> {user.email}
              </div>
              <div>
                <span>Address</span> <hr /> {user.address.houseNo},
                {user.address.street},{user.address.locality},
                {user.address.landmark},{user.address.village},
                {user.address.district.name},{user.address.state.name},
                {user.address.pincode}
              </div>
              <div>
                <span>Indian Resident</span> <hr />{' '}
                {user.indianResident ? 'Yes' : 'No'}
              </div>
            </div>
            <div className={styles.accordion__biometric}>
              <img
                src={user.photo}
                alt=''
                height='300px'
                className={styles.accordion__biometric_image}
              />
              <Button
                sx={{margin: '10px 0px', padding: '20px'}}
                variant='contained'
                onClick={() => {
                  handleOpen();
                }}
              >
                Documents
              </Button>
              <Button
                sx={{padding: '20px'}}
                variant='contained'
                onClick={() => {
                  handleOpen();
                }}
              >
                Biometric
              </Button>
            </div>
          </div>
        )}
      </div>
      <PopUpModal open={open} setOpen={setOpen} documents={user.documents} />
    </>
  );
};

export default Accordion;

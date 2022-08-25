import React, {useState} from 'react';
import {Button} from '@mui/material';

import styles from './Accordion.module.css';

const Accordion = ({name, user}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion__title}
        onClick={() => setIsActive(!isActive)}
      >
        <h2>{name}</h2>
        <div>&#10095;</div>
      </div>
      {isActive && (
        <div className={styles.accordion__content}>
          <div className={styles.accordion__demographic}>
            <div className={styles.demographic__heading}>
              <div>Name</div>
              <div>Gender</div>
              <div>Date of Birth</div>
              <div>Mobile Number</div>
              <div>Email</div>
              <div>Address</div>
              <div>Indian Resident</div>
            </div>
            <hr />
            <div className={styles.demographic__content}>
              <div>{user.name}</div>
              <div>{user.gender}</div>
              <div>{user.dob}</div>
              <div>{user.mobile}</div>
              <div>{user.email}</div>
              <div>
                {user.address.houseNo},{user.address.street},
                {user.address.locality},{user.address.landmark},
                {user.address.village},{user.address.district.name},
                {user.address.state.name},{user.address.pincode}
              </div>
              <div>Indian Resident : {user.indianResident ? 'Yes' : 'No'}</div>
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
            >
              Documents
            </Button>
            <Button sx={{padding: '20px'}} variant='contained'>
              Biometric
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;

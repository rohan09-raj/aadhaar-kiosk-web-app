import React, {useState} from 'react';

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
          <div>Indian Resident : {user.indianResident ? 'Yes' : 'No'}</div>
          <div>Name : {user.name}</div>
          <div>Gender : {user.gender}</div>
          <div>Date of Birth : {user.dob}</div>
          <div>Mobile Number : {user.mobile}</div>
          <div>Email : {user.email}</div>
          <div>Address : {user.address.houseNo},{user.address.street},{user.address.locality},{user.address.landmark},{user.address.village},{user.address.district.name},{user.address.state.name},{user.address.pincode}</div>
          <img src={`${user.photo}`} />
          <img src={`${user.documents.POI}`} />
          <img src={`${user.documents.POA}`} />
          <img src={`${user.documents.DOB}`} />
        </div>
      )}
    </div>
  );
};

export default Accordion;

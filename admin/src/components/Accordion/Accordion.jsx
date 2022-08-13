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
          <div>Indian Resident : {user.indianResident}</div>
          <div>Name : {user.name}</div>
          <div>Gender : {user.gender}</div>
          <div>Date of Birth : {user.dob}</div>
          <div>Mobile Number : {user.mobile}</div>
          <div>Email : {user.email}</div>
          <div>Address : {user.address}</div>
          <div>Photograph : {user.photo}</div>
          <div>Documents : {user.documents.doc1}</div>
          <div>Biometrics : {user.biometrics.bio1}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;

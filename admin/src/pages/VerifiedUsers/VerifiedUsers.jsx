import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import { getVerifiedUsers } from '../../services/apiservice';
import { useQuery } from 'react-query';

import styles from './VerifiedUsers.module.css';

const VerifiedUsers = () => {
  const { data } = useQuery('verified', getVerifiedUsers);

  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = data?.data?.filter((el) => {
    if (inputText === '') {
      return el;
    } else {
      return el.name.toLowerCase().includes(inputText);
    }
  })

  return (
    <div className={styles.verified_users}>
      <Header subheading='Admin' />
      <h1 className={styles.unverified_users__heading}>Search</h1>
      <input
        className={styles.input__search}
        onChange={inputHandler}
        placeholder="Enter name of user to search"
      />
      <h1 className={styles.verified_users__heading}>Verified Users</h1>
      <div className='accordion'>
        {data?.data.length !== 0 ? (
          filteredData?.map((item) => (
            <div>
              <Accordion name={item.name} user={item} />
            </div>
          ))
        ) : (
          <div className={styles.verified_users__nodata}>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default VerifiedUsers;

import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import {getVerifiedUsers} from '../../services/apiservice';
import {useQuery} from 'react-query';

import styles from './VerifiedUsers.module.css';

const VerifiedUsers = () => {
  const {data} = useQuery('verified', getVerifiedUsers);

  return (
    <div className={styles.verified_users}>
      <Header subheading='Admin' />
      <h1 className={styles.verified_users__heading}>Verified Users</h1>
      <div className='accordion'>
        {data?.data.length !== 0 ? (
          data?.data.map((item) => (
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

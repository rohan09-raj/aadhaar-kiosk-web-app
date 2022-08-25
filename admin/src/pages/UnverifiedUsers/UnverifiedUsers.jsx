import React, {useEffect} from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {
  deleteUser,
  getUnverifiedUsers,
  updateUser,
} from '../../services/apiservice';
import {useQuery, useMutation} from 'react-query';

import styles from './UnverifiedUsers.module.css';
import Spinner from '../../components/Spinner/Spinner';

const UnverifiedUsers = () => {
  const {data, isLoading, isError} = useQuery('unverified', getUnverifiedUsers);
  const deleteUse = useMutation((id) => deleteUser(id));
  const updateUse = useMutation((id) => updateUser(id, {verified: true}));
  
  useEffect(() => {}, [data]);
  
  if (isLoading) {
    return <Spinner heading='Admin' />
  }

  if (isError) {
    return <div>Error</div>
  }


  return (
    <div className={styles.unverified_users}>
      <Header subheading='Admin' />
      <h1 className={styles.unverified_users__heading}>Unverified Users</h1>
      <div className='accordion'>
        {data?.data.length !== 0 ? (
          data?.data.map((item) => (
            <div className={styles.unverified_users__accordion} key={item._id}>
              <Accordion name={item.name} user={item} />
              <Button
                title='Accept'
                color='green'
                onClick={() => updateUse.mutate(item._id)}
              />
              <Button
                title='Reject'
                color='red'
                onClick={() => deleteUse.mutate(item._id)}
              />
            </div>
          ))
        ) : (
          <div className={styles.unverified_users__nodata}>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default UnverifiedUsers;

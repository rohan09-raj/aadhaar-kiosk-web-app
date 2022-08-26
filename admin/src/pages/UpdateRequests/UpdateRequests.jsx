import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {
  deleteUser,
  getUpdatingUsers,
  updateUser,
} from '../../services/apiservice';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styles from './UpdateRequests.module.css';
import BackButton from '../../components/BackButton/BackButton';
import Spinner from '../../components/Spinner/Spinner';

const UpdateRequests = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useQuery(
    'updating',
    getUpdatingUsers
  );
  const deleteUse = useMutation((id) => deleteUser(id), {
    onSuccess: () => {
      refetch();
    },
  });

  const updateUse = useMutation((id) => updateUser(id, { verified: true }), {
    onSuccess: () => {
      refetch();
    },
  });

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

  if (isLoading) {
    return <Spinner heading='Admin' />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.unverified_users}>
      <Header subheading='Admin' />
      <h1 className={styles.unverified_users__heading}>Search</h1>
      <input
        className={styles.input__search}
        onChange={inputHandler}
        placeholder="Enter name of user to search"
      />
      <BackButton onClick={() => navigate('/')} />
      <h1 className={styles.unverified_users__heading}>Update Requests</h1>
      <div className={styles.accordion}>
        {data?.data.length !== 0 ? (
          filteredData?.map((item) => (
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

export default UpdateRequests;

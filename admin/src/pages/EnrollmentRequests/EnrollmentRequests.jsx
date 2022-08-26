import React, {useState} from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {
  deleteUser,
  getUnverifiedUsers,
  updateUser,
} from '../../services/apiservice';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import { sendMessage } from '../../services/apiservice';
import Spinner from '../../components/Spinner/Spinner';
import TextField from '@mui/material/TextField';

import styles from './EnrollmentRequests.module.css';
import MessageModal from '../../components/Modal/MessageModal';

const EnrollmentRequests = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const { data, refetch, isLoading } = useQuery('unverified', getUnverifiedUsers);

  const deleteUse = useMutation((payload) => deleteUser(payload));

  const updateUse = useMutation((id) => updateUser(id, { verified: true }), {
    onSuccess: () => {
      refetch();
    },
  });

  const setConfirm = useMutation((payload) => {
    sendMessage(payload);
  });

  const handleModalClick = (item) => {
    deleteUse.mutate(item._id, {
      onSuccess: () => {
        setConfirm.mutate({
          mobile: `+91${item.mobile}`,
          message: message,
        });
        setOpen(false);
        refetch();
      },
    });
  };

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
      <h1 className={styles.unverified_users__heading}>Enrollment Requests</h1>
      <div className={styles.accordion}>
        {data?.data?.length !== 0 ? (
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
                onClick={() => {
                  setOpen(true);
                }}
              />
              <MessageModal
                title='Reason for Reject'
                open={open}
                setOpen={setOpen}
                onChange={(e) => setMessage(e.target.value)}
                onClick={() => handleModalClick(item)}
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

export default EnrollmentRequests;

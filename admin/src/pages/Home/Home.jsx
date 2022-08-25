import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';

const Home = ({page, setPage}) => {
  return (
    <>
      <Header subheading='Admin' />
      <div className={styles.card__container}>
        <Link to='/verified'>
          <Card
            title='Verified Users'
            image={`${process.env.PUBLIC_URL}/assets/images/verified.svg`}
          />
        </Link>
        <Link to='/enrollment'>
          <Card
            title='Enrollment Requests'
            image={`${process.env.PUBLIC_URL}/assets/images/enrollment.svg`}
          />
        </Link>
        <Link to='/update'>
          <Card
            title='Update Requests'
            image={`${process.env.PUBLIC_URL}/assets/images/update.svg`}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;

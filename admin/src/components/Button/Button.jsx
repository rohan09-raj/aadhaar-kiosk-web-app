import React from 'react';

import styles from './Button.module.css';

const Button = ({title, onClick, color}) => {
  return (
    <>
      <button
        className={
          color === 'green' ? styles.button__green : styles.button__red
        }
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;

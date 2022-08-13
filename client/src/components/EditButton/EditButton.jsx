import React from 'react'
import styles from './EditButton.module.css'

const EditButton = ({ onClick, enabled }) => {
  return (
    <>
      <button onClick={onClick} className={styles.submit} type="button">
        <img
          className={styles.submit__image}
          src={`${process.env.PUBLIC_URL}/assets/images/edit.svg`}
          alt=""
          style={ { filter: `invert(${enabled}) sepia(1) saturate(100) hue-rotate(1490deg)` } }
        />
      </button>
    </>
  )
}

export default EditButton

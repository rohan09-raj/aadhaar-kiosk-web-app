import React from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

import styles from './Address.module.css'

const Address = () => {
  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.address}>
        <div className={styles.address__container}>
          <Input
            id="houseNo"
            label="House Number/ Apartment"
            value="house"
            type="text"
          />
          <Input
            id="locality"
            label="Area / Locality"
            value="locality"
            type="text"
          />
          <Input id="town" label="Village / Town" value="town" type="text" />
          <Input
            id="postOffice"
            label="Post Office"
            value="postOffice"
            type="text"
          />
        </div>
        <div className={styles.address__container}>
          <Input id="street" label="Street / Road" value="street" type="text" />
          <Input id="landmark" label="Landmark" value="landmark" type="text" />
          <Input id="district" label="District" value="district" type="text" />
          <Input id="pincode" label="Pincode" value="pincode" type="text" />
        </div>
      </div>
      <Input id="state" label="State" value="state" type="text" />
      <SubmitButton />
    </>
  )
}

export default Address

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'

import styles from './Address.module.css'

const Address = () => {
  const [address, setAddress] = useState('')

  const navigate = useNavigate()

  return (
    <>
      <Header subheading="Enrollment" />
      <div className={styles.address}>
        <div className={styles.address__container}>
          <Input
            id="houseNo"
            label="House Number/ Apartment"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your House Number / Apartment"
          />
          <Input
            id="locality"
            label="Area / Locality"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your Area / Locality"
          />
          <Input id="town" label="Village / Town" value="town" type="text" />
          <Input
            id="postOffice"
            label="Post Office"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your Village / Town"
          />
        </div>
        <div className={styles.address__container}>
          <Input
            id="street"
            label="Street / Road"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter the Street / Road"
          />
          <Input
            id="landmark"
            label="Landmark"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter the Landmark"
          />
          <Input
            id="district"
            label="District"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your District"
          />
          <Input
            id="pincode"
            label="Pincode"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your area Pincode"
          />
        </div>
      </div>
      <Input
        id="state"
        label="State"
        value={address}
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your State"
      />
      <SubmitButton onClick={() => navigate('/enrollment/photo')} />
    </>
  )
}

export default Address

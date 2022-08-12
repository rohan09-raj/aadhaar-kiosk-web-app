import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { Country, State, City } from 'country-state-city'
import Select from 'react-select'

import styles from './Address.module.css'

const Address = () => {
  const [address, setAddress] = useState('')
  const [houseNo, setHouseNo] = useState('')
  const [locality, setLocality] = useState('')
  const [postOffice, setPostOffice] = useState('')
  const [street, setStreet] = useState('')
  const [landmark, setLandmark] = useState('')
  const [town, setTown] = useState('')
  const [pincode, setPincode] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/enrollment/photo')
    const add = `${houseNo} ${locality} ${postOffice} ${street} ${landmark} ${town} ${city} ${state} ${countries} ${pincode}`
    setAddress({ add })
    console.log(address)
  }

  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country
  }))

  const updatedStates = (countryId) =>
  State
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }))
  const updatedCities = (countryID, stateId) =>
    City
      .getCitiesOfState(countryID, stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }))

      const customStyles = {
        control: (base, state) => ({
          ...base,
          width: '330px',
          height: '60px',
          margin: '10px 0px',
          // padding: '20px 10px',
          border: '3px solid',
          borderRadius: '10px !important'
        }),
        input: (base, state) => ({
          ...base,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          margin: '0px'
        })
      }

  return (
    <>
      <Header subheading="Enrollment" />
      <form onSubmit={() => handleSubmit()} className={styles.address}>
        <div className={styles.address__container}>
      <div className={styles.input}>
      <div className={styles.input__container}>
      <label htmlFor='country'>Country</label>
        <Select
          id="country"
          name="country"
          label="country"
          options={updatedCountries}
          value={country}
          onChange={setCountry}
          styles={customStyles}
        />
      </div>
    </div>
    <div className={styles.input}>
      <div className={styles.input__container}>
      <label htmlFor='state'>State</label>
      <Select
          id="state"
          name="state"
          options={updatedStates(country.isoCode)}
          value={state}
          onChange={setState}
          styles={customStyles}
        />
      </div>
    </div>
    <div className={styles.input}>
      <div className={styles.input__container}>
      <label htmlFor='city'>District</label>
      <Select
          id="city"
          name="city"
          options={updatedCities(country.isoCode, state.isoCode)}
          value={city}
          onChange={setCity}
          styles={customStyles}
        />
      </div>
    </div>
    <Input
      id="town"
      label="Village / Town"
      value={town}
      type="text"
      onChange={(e) => setTown(e.target.value)}
      placeholder="Enter your Village / Town"
      />
            </div>
            <div className={styles.address__container}>
          <Input
            id="houseNo"
            label="House Number/ Apartment"
            value={houseNo}
            type="text"
            onChange={(e) => setHouseNo(e.target.value)}
            placeholder="Enter your House Number / Apartment"
          />
          <Input
            id="street"
            label="Street / Road"
            value={street}
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Enter the Street / Road"
          />
          <Input
            id="locality"
            label="Area / Locality"
            value={locality}
            type="text"
            onChange={(e) => setLocality(e.target.value)}
            placeholder="Enter your Area / Locality"
          />
          <Input
            id="postOffice"
            label="Post Office"
            value={postOffice}
            type="text"
            onChange={(e) => setPostOffice(e.target.value)}
            placeholder="Enter your Village / Town"
          />
          </div>
        <div className={styles.address__container}>
          <Input
            id="landmark"
            label="Landmark"
            value={landmark}
            type="text"
            onChange={(e) => setLandmark(e.target.value)}
            placeholder="Enter the Landmark"
          />
          <Input
            id="pincode"
            label="Pincode"
            value={pincode}
            type="text"
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter your area Pincode"
            pattern="[0-9]+"
          />
        </div>
        <SubmitButton />
      </form>
    </>
  )
}

export default Address

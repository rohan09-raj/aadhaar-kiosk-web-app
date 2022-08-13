import React from 'react'
import Header from '../../../components/Header/Header'
import { Country, State, City } from 'country-state-city'
import Select from 'react-select'

import styles from './Address.module.css'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import EditButton from '../../../components/EditButton/EditButton'

const Address = ({ formData, setFormData }) => {
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

      const [editable, setEditable] = React.useState(true)
      const [editable1, setEditable1] = React.useState(true)
      const [editable2, setEditable2] = React.useState(true)

      const handleEdit = () => {
        setEditable(!editable)
      }
      const handleEdit1 = () => {
        setEditable1(!editable1)
      }
      const handleEdit2 = () => {
        setEditable2(!editable2)
      }

      console.log(formData.country, formData.state, formData.district, formData.village)

  return (
    <>
      <Header subheading="Update" />
      <div className={styles.address}>
        <div className={styles.address__container}>
      <div className={styles.input}>
      <div className={styles.input__container}>
      <label htmlFor='country'>Country</label>
      <div className={styles.input__edit}>
        <Select
          id="country"
          name="country"
          label="country"
          options={updatedCountries}
          value={formData.country}
          isDisabled={editable}
          isSearchable={!editable}
          onChange={e => {
            setFormData({
              ...formData,
              country: e
            })
          }}
          styles={customStyles}
        />
        <EditButton
        onClick={handleEdit}
        enabled={!editable ? '1' : '0' } />
        </div>
      </div>
    </div>
    <div className={styles.input}>
      <div className={styles.input__container}>
      <label htmlFor='state'>State</label>
      <div className={styles.input__edit}>
      <Select
          id="state"
          name="state"
          options={updatedStates(formData.country.isoCode)}
          value={formData.state}
          isDisabled={editable1}
          isSearchable={!editable1}
          onChange={e => {
            setFormData({
              ...formData,
              state: e
            })
          }}
          styles={customStyles}
        />
        <EditButton
        onClick={handleEdit1}
        enabled={!editable1 ? '1' : '0' } />
        </div>
      </div>
    </div>
    <div className={styles.input}>
      <div className={styles.input__container}>
      <label htmlFor='city'>District</label>
      <div className={styles.input__edit}>
      <Select
          id="city"
          name="city"
          options={updatedCities(formData.country.isoCode, formData.state.isoCode)}
          value={formData.district}
          isDisabled={editable2}
          isSearchable={!editable2}
          onChange={e => {
            setFormData({
              ...formData,
              district: e
            })
          }}
          styles={customStyles}
        />
        <EditButton
        onClick={handleEdit2}
        enabled={!editable2 ? '1' : '0' } />
        </div>
      </div>
    </div>
    <UpdateInput
      id="town"
      label="Village / Town"
      value={formData.village}
      type="text"
      onChange={(e) => {
        setFormData({
          ...formData,
          village: e.target.value
        })
      }}
      placeholder="Enter your Village / Town"
      />
            </div>
            <div className={styles.address__container}>
          <UpdateInput
            id="houseNo"
            label="House Number/ Apartment"
            value={formData.houseNo}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                houseNo: e.target.value
              })
            }}
            placeholder="Enter your House Number / Apartment"
          />
          <UpdateInput
            id="street"
            label="Street / Road"
            value={formData.street}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                street: e.target.value
              })
            }}
            placeholder="Enter the Street / Road"
          />
          <UpdateInput
            id="locality"
            label="Area / Locality"
            value={formData.locality}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                locality: e.target.value
              })
            }}
            placeholder="Enter your Area / Locality"
          />
          <UpdateInput
            id="postOffice"
            label="Post Office"
            value={formData.postOffice}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                postOffice: e.target.value
              })
            }}
            placeholder="Enter your Village / Town"
          />
          </div>
        <div className={styles.address__container}>
          <UpdateInput
            id="landmark"
            label="Landmark"
            value={formData.landmark}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                landmark: e.target.value
              })
            }}
            placeholder="Enter the Landmark"
          />
          <UpdateInput
            id="pincode"
            label="Pincode"
            value={formData.pincode}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                pincode: e.target.value
              })
            }}
            placeholder="Enter your area Pincode"
            pattern="[0-9]+"
          />
        </div>
      </div>
    </>
  )
}

export default Address

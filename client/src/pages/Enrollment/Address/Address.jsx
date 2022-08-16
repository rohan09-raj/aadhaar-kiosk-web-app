import React from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import { Country, State, City } from 'country-state-city'
import Select from 'react-select'

import styles from './Address.module.css'
import { useTranslation } from 'react-i18next'

const Address = ({ formData, setFormData }) => {
  const { t } = useTranslation()
  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country
  }))

  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state
    }))
  const updatedCities = (countryID, stateId) =>
    City.getCitiesOfState(countryID, stateId).map((city) => ({
      label: city.name,
      value: city.id,
      ...city
    }))

  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: '330px',
      height: '60px',
      margin: '10px 0px',
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
      <Header subheading={t('ENROLLMENT')} />
      <div className={styles.address}>
        <div className={styles.address__container}>
          <div className={styles.input}>
            <div className={styles.input__container}>
              <label htmlFor="country">{t('COUNTRY')}</label>
              <Select
                id="country"
                name="country"
                label="country"
                options={updatedCountries}
                value={formData.country}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    country: e
                  })
                }}
                styles={customStyles}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.input__container}>
              <label htmlFor="state">{t('STATE')}</label>
              <Select
                id="state"
                name="state"
                options={updatedStates(formData.country.isoCode)}
                value={formData.state}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    state: e
                  })
                }}
                styles={customStyles}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.input__container}>
              <label htmlFor="city">{t('DISTRICT')}</label>
              <Select
                id="city"
                name="city"
                options={updatedCities(
                  formData.country.isoCode,
                  formData.state.isoCode
                )}
                value={formData.district}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    district: e
                  })
                }}
                styles={customStyles}
              />
            </div>
          </div>
          <Input
            id="town"
            label={t('VILLAGE_TOWN')}
            value={formData.village}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                village: e.target.value
              })
            }}
            placeholder={t('ENTER_YOUR_VILLAGE_TOWN')}
          />
        </div>
        <div className={styles.address__container}>
          <Input
            id="houseNo"
            label={t('HOUSE_NUMBER_APARTMENT')}
            value={formData.houseNo}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                houseNo: e.target.value
              })
            }}
            placeholder={t('ENTER_YOUR_HOUSE_NUMBER_APARTMENT')}
          />
          <Input
            id="street"
            label={t('STREET_ROAD')}
            value={formData.street}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                street: e.target.value
              })
            }}
            placeholder={t('ENTER_YOUR_STREET_ROAD')}
          />
          <Input
            id="locality"
            label={t('AREA_LOCALITY')}
            value={formData.locality}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                locality: e.target.value
              })
            }}
            placeholder={t('ENTER_YOUR_AREA_LOCALITY')}
          />
          <Input
            id="postOffice"
            label={t('POST_OFFICE')}
            value={formData.postOffice}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                postOffice: e.target.value
              })
            }}
            placeholder={t('ENTER_YOUR_AREA_POST_OFFICE')}
          />
        </div>
        <div className={styles.address__container}>
          <Input
            id="landmark"
            label={t('LANDMARK')}
            value={formData.landmark}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                landmark: e.target.value
              })
            }}
            placeholder={t('ENTER_ANY_NEAREST_LANDMARK')}
          />
          <Input
            id="pincode"
            label={t('PINCODE')}
            value={formData.pincode}
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                pincode: e.target.value
              })
            }}
            placeholder={t('ENTER_YOUR_AREA_PINCODE')}
          />
        </div>
      </div>
    </>
  )
}

export default Address

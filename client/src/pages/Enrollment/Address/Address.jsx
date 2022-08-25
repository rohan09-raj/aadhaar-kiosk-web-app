import React from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import { State, City } from 'country-state-city'
import Select from 'react-select'
import { userContext } from '../../../context/User'
import { useTranslation } from 'react-i18next'
import PopUpModal from '../../../components/Modal/Modal'

import styles from './Address.module.css'

const Address = () => {
  const { t } = useTranslation()
  const { userData, setUserData } = userContext()

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
    control: (base) => ({
      ...base,
      width: '330px',
      height: '60px',
      margin: '10px 0px',
      border: '3px solid',
      borderRadius: '10px !important'
    }),
    input: (base) => ({
      ...base,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      margin: '0px'
    })
  }

  const description = ['ENTER_YOUR_DETAILS_ACCORDING_TO_THE_RELEVANT_FIELDS', 'SELECT_THE_STATE_YOU_BELONG_TO_FROM_THE_DROPDOWN_LIST', 'SELECT_THE_DISTRICT_YOU_BELONG_TO_FROM_THE_DROPDOWN_LIST']

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <PopUpModal
        title="FILL_YOUR_INFORMATION"
        image={`${process.env.PUBLIC_URL}/assets/images/address.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (<li className="list__item" key='id'>{t(item)}</li>))}
            </ul>
          </>
        }
      />
      <div className={styles.address}>
        <div className={styles.address__container}>
          <Input
            id="houseNo"
            label={t('HOUSE_NUMBER_APARTMENT')}
            value={userData.address.houseNo}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  houseNo: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_YOUR_HOUSE_NUMBER_APARTMENT')}
          />
          <Input
            id="town"
            label={t('VILLAGE_TOWN')}
            value={userData.address.village}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  village: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_YOUR_VILLAGE_TOWN')}
          />
          <div className={styles.input__container}>
            <label htmlFor="state">{t('STATE')}</label>
            <Select
              id="state"
              name="state"
              options={updatedStates('IN')}
              value={userData.address?.state}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  address: {
                    ...userData.address,
                    state: e
                  }
                })
              }}
              styles={customStyles}
            />
          </div>
        </div>
        <div className={styles.address__container}>
          <Input
            id="street"
            label={t('STREET_ROAD')}
            value={userData.address.street}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  street: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_YOUR_STREET_ROAD')}
          />
          <Input
            id="postOffice"
            label={t('POST_OFFICE')}
            value={userData.address.postOffice}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  postOffice: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_YOUR_AREA_POST_OFFICE')}
          />
          <div className={styles.input__container}>
            <label htmlFor="city">{t('DISTRICT')}</label>
            <Select
              id="city"
              name="city"
              options={updatedCities('IN', userData.address?.state?.isoCode)}
              value={userData.address?.district}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  address: {
                    ...userData.address,
                    district: e
                  }
                })
              }}
              styles={customStyles}
            />
          </div>
        </div>
        <div className={styles.address__container}>
          <Input
            id="locality"
            label={t('AREA_LOCALITY')}
            value={userData.address.locality}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  locality: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_YOUR_AREA_LOCALITY')}
          />
          <Input
            id="pincode"
            label={t('PINCODE')}
            value={userData.address.pincode}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  pincode: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_YOUR_AREA_PINCODE')}
          />
          <Input
            id="landmark"
            label={t('LANDMARK')}
            value={userData.address.landmark}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  landmark: e.target.value
                }
              })
            }}
            placeholder={t('ENTER_ANY_NEAREST_LANDMARK')}
          />
        </div>
      </div>
    </>
  )
}

export default Address

import React from 'react'
import Header from '../../../components/Header/Header'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import { State, City } from 'country-state-city'
import EditButton from '../../../components/EditButton/EditButton'
import Select from 'react-select'

import styles from './Address.module.css'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'

const Address = () => {
  const { userData, setUserData } = userContext()
  const { t } = useTranslation()

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

  const [editable1, setEditable1] = React.useState(true)
  const [editable2, setEditable2] = React.useState(true)

  const handleEdit1 = () => {
    setEditable1(!editable1)
  }
  const handleEdit2 = () => {
    setEditable2(!editable2)
  }

  return (
    <>
      <Header subheading={t('UPDATE')} />
      <div className={styles.address}>
        <div className={styles.address__container}>
          <UpdateInput
            id="houseNo"
            label={t('HOUSE_NUMBER_APARTMENT')}
            defaultValue={userData.address.houseNo}
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
          <UpdateInput
            id="town"
            label={t('VILLAGE_TOWN')}
            defaultValue={userData.address.village}
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
            <div className={styles.input__edit}>
              <Select
                id="state"
                name="state"
                options={updatedStates('IN')}
                defaultValue={userData.address.state}
                isDisabled={editable1}
                isSearchable={!editable1}
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
              <EditButton
                onClick={handleEdit1}
                enabled={!editable1 ? '1' : '0'}
              />
            </div>
          </div>
        </div>
        <div className={styles.address__container}>
          <UpdateInput
            id="street"
            label={t('STREET_ROAD')}
            defaultValue={userData.address.street}
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
          <UpdateInput
            id="postOffice"
            label={t('POST_OFFICE')}
            defaultValue={userData.address.postOffice}
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
            <div className={styles.input__edit}>
              <Select
                id="city"
                name="city"
                options={updatedCities('IN', userData.address.state.isoCode)}
                defaultValue={userData.address.district}
                isDisabled={editable2}
                isSearchable={!editable2}
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
              <EditButton
                onClick={handleEdit2}
                enabled={!editable2 ? '1' : '0'}
              />
            </div>
          </div>
        </div>
        <div className={styles.address__container}>
          <UpdateInput
            id="locality"
            label={t('AREA_LOCALITY')}
            defaultValue={userData.address.locality}
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
          <UpdateInput
            id="pincode"
            label={t('PINCODE')}
            defaultValue={userData.address.pincode}
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
          <UpdateInput
            id="landmark"
            label={t('LANDMARK')}
            defaultValue={userData.address.landmark}
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

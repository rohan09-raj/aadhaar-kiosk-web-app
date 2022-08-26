import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import Input from '../../../components/Input/Input'
import { userContext } from '../../../context/User'
import { useTranslation } from 'react-i18next'
import PopUpModal from '../../../components/Modal/Modal'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'
import Pincode from 'react-pincode'

import styles from './Address.module.css'

const Address = () => {
  const { t } = useTranslation()
  const [pincodeData, setPincodeData] = useState('')
  const { userData, setUserData } = userContext()

  const description = [
    'ENTER_YOUR_DETAILS_ACCORDING_TO_THE_RELEVANT_FIELDS',
    'SELECT_THE_STATE_YOU_BELONG_TO_FROM_THE_DROPDOWN_LIST',
    'SELECT_THE_DISTRICT_YOU_BELONG_TO_FROM_THE_DROPDOWN_LIST'
  ]
  console.log(pincodeData)

  return (
    <>
      <Header subheading={t('ENROLLMENT')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/address`}
      />
      <PopUpModal
        title="FILL_YOUR_INFORMATION"
        image={`${process.env.PUBLIC_URL}/assets/images/address.svg`}
        description={
          <>
            <ul>
              {description.map((item) => (
                <li className="list__item" key="id">
                  {t(item)}
                </li>
              ))}
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
          <Input
            id="state"
            label={t('STATE')}
            value={userData.address.state.name}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  state: {
                    name: e.target.value
                  }
                }
              })
            }}
            placeholder={t('ENTER_YOUR_STATE')}
          />
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
          <div className={styles.input}>
            <div className={styles.input__container}>
              <label htmlFor="pincode">{t('PINCODE')}</label>
              <Pincode
                showCity={false}
                showDistrict={false}
                showState={false}
                showArea={false}
                invalidError=""
                lengthError=""
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: {
                      ...userData.address,
                      pincode: e.target.value
                    }
                  })
                }}
                pincodeInput={{
                  width: '500px',
                  height: '80px',
                  margin: '10px 0px',
                  padding: '18px 10px',
                  border: '3px solid',
                  borderRadius: '10px',
                  fontSize: '1.5rem'
                }}
                getData={(data) => {
                  setPincodeData(data)
                  setUserData({
                    ...userData,
                    address: {
                      ...userData.address,
                      pincode: data.pincode,
                      state: {
                        name: data.stateName
                      },
                      district: {
                        name: data.district
                      },
                      postOffice: data.areaName
                    }
                  })
                }}
              />
            </div>
          </div>
          <Input
            id="district"
            label={t('DISTRICT')}
            value={userData.address.district.name}
            type="text"
            onChange={(e) => {
              setUserData({
                ...userData,
                address: {
                  ...userData.address,
                  district: {
                    name: e.target.value
                  }
                }
              })
            }}
            placeholder={t('ENTER_YOUR_DISTRICT')}
          />
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

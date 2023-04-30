import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import EditButton from '../../../components/EditButton/EditButton'
import PopUpModal from '../../../components/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { userContext } from '../../../context/User'
import styles from './Address.module.css'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'
import Pincode from 'react-pincode'

const Address = () => {
  const { userData, setUserData } = userContext()
  const { t } = useTranslation()

  const [editable1, setEditable1] = React.useState(true)
  const [pincodeData, setPincodeData] = useState('')

  const handleEdit1 = () => {
    setEditable1(!editable1)
  }

  const description = [
    'UPDATE_THE_REQUIRED_DETAILS_IN_THE_RELEVANT_FIELDS_BY_CLICKING_THE_EDIT_BUTTON',
    'IF_REQUIRED_SELECT_THE_STATE_YOU_BELONG_TO_FROM_THE_DROPDOWN_LIST',
    'IF_REQUIRED_SELECT_THE_DISTRICT_YOU_BELONG_TO_FROM_THE_DROPDOWN_LIST_THIS_WONT_SHOW_ANY_OPTIONS_UNTIL_YOU_HAVE_SELECTED_THE_STATE'
  ]
  console.log(pincodeData)
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/address-update`}
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
          <div className={styles.input__edit}>
            <UpdateInput
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
            <EditButton
              onClick={handleEdit1}
              enabled={!editable1 ? '1' : '0'}
            />
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
            <div className={styles.input}>
              <div className={styles.input__container}>
                <div className={styles.input__edit}>
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
            </div>
          </div>
          <UpdateInput
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

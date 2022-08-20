import React from 'react'
import { useTranslation } from 'react-i18next'
import EditButton from '../../components/EditButton/EditButton'
import LabelCard from '../LabelCard/LabelCard'
import styles from './Gender.module.css'

const Gender = ({ formData, setFormData }) => {
  const { t } = useTranslation()
  const [editable, setEditable] = React.useState(true)

  const handleEdit = () => {
    setEditable(!editable)
  }
  return (
    <div className={styles.formone__gender}>
      <LabelCard
        id="male"
        name="gender"
        title={t('MALE')}
        value={formData?.gender}
        readOnly={editable}
        onChange={() => {
          setFormData({
            ...formData,
            gender: 'Male'
          })
        }}
        image={`${process.env.PUBLIC_URL}/assets/images/male.svg`}
      />
      <LabelCard
        id="female"
        name="gender"
        value={formData?.gender}
        title={t('FEMALE')}
        readOnly={editable}
        onChange={() => {
          setFormData({
            ...formData,
            gender: 'Female'
          })
        }}
        image={`${process.env.PUBLIC_URL}/assets/images/female.svg`}
      />
      <LabelCard
        id="other"
        name="gender"
        value={formData?.gender}
        title={t('OTHER')}
        readOnly={editable}
        onChange={() => {
          setFormData({
            ...formData,
            gender: 'Other'
          })
        }}
        image={`${process.env.PUBLIC_URL}/assets/images/trans.svg`}
      />
      <EditButton onClick={handleEdit} enabled={!editable ? '1' : '0'} />
    </div>
  )
}

export default Gender

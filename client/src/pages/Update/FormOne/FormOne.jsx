import React from 'react'
import Header from '../../../components/Header/Header'
import UpdateInput from '../../../components/UpdateInput/UpdateInput'
import styles from './FormOne.module.css'
import EditButton from '../../../components/EditButton/EditButton'
import Gender from '../../../components/Gender/Gender'

const FormOne = ({ formData, setFormData }) => {
  const handleSubmit = () => {
  }

  const [editable, setEditable] = React.useState(true)

  const handleEdit = () => {
    setEditable(!editable)
  }

  return (
    <><Header subheading="Update" /><form onSubmit={() => handleSubmit()}>
      <div className={styles.formone}>
        <UpdateInput
          type="text"
          id="fullName"
          label="Full Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value
            })
          }}
          placeholder="Enter your full name" />

      <UpdateInput
        id="mobile"
        value={formData.mobile}
        label="Mobile"
        type="text"
        onChange={(e) => {
          setFormData({
            ...formData,
            mobile: e.target.value
          })
        }}
        placeholder="Enter your Mobile Number" />

        <div className={styles.formone__dob}>
          <label htmlFor="dob">Date of Birth</label>
          <div className={styles.input__edit}>
          <input
            className={styles.formone__dob_input}
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            readOnly={editable}
            onChange={(e) => {
              setFormData({
                ...formData,
                dob: e.target.value
              })
            }}
            required />
          <EditButton
          onClick={handleEdit}
          enabled={!editable ? '1' : '0' } />
          </div>
        </div>

      <UpdateInput
        id="email"
        value={formData.email}
        label="Email"
        type="email"
        onChange={(e) => {
          setFormData({
            ...formData,
            email: e.target.value
          })
        }}
        placeholder="Enter your Email ID" />

      <Gender
      formData={formData}
      setFormData={setFormData} />

      </div>
    </form></>
  )
}

export default FormOne

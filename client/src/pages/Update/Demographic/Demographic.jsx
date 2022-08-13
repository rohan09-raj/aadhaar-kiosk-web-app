import React, { useState } from 'react'
import Address from '../Address/Address'
import DocumentScanner from '../DocumentScanner/DocumentScanner'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import FormOne from '../FormOne/FormOne'
import { validEmail, validMobileNumber, validPincode } from '../../../components/RegEx/RegEx'
import UpdateSelect from '../UpdateSelect/UpdateSelect'

const Demographic = () => {
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: new Date().toISOString().slice(0, 10),
    mobile: '',
    email: '',
    country: '',
    state: '',
    district: '',
    village: '',
    houseNo: '',
    street: '',
    locality: '',
    postOffice: '',
    landmark: '',
    pincode: '',
    address: ''
  })

  function handleSubmit () {
    if (page === 0) {
        if (formData.name === '' || formData.name.length < 1) {
        return alert('Please enter your name')
      } else if (formData.gender === '') {
        return alert('Please select your gender')
      } else if (formData.mobile === '') {
        return alert('Please enter your mobile number')
      } else if (!validMobileNumber.test(formData.mobile)) {
        return alert('Please enter valid mobile number')
      } else if (formData.email === '') {
        return alert('Please enter your email')
      } else if (!validEmail.test(formData.email)) {
        return alert('Please enter valid email')
      } else {
        setPage(page + 1)
      }
    } else if (page === 1) {
      if (formData.mobile === '') {
        return alert('Please enter your mobile number')
      } else if (!validMobileNumber.test(formData.mobile)) {
        return alert('Please enter valid mobile number')
      } else if (formData.email === '') {
        return alert('Please enter your email')
      } else if (!validEmail.test(formData.email)) {
        return alert('Please enter valid email')
      } else {
        setPage(page + 1)
      }
    } else if (page === 2) {
      if (formData.country === '') {
        return alert('Please select your country')
      } else if (formData.state === '') {
        return alert('Please select your state')
      } else if (formData.district === '') {
        return alert('Please select your district')
      } else if (formData.village === '') {
        return alert('Please enter your village')
      } else if (formData.houseNo === '') {
        return alert('Please enter your house number')
      } else if (formData.street === '') {
        return alert('Please enter your street')
      } else if (formData.locality === '') {
        return alert('Please enter your locality')
      } else if (formData.postOffice === '') {
        return alert('Please enter your post office')
      } else if (formData.landmark === '') {
        return alert('Please enter your landmark')
      } else if (formData.pincode === '') {
        return alert('Please enter your pincode')
      } else if (!validPincode.test(formData.pincode)) {
        return alert('Please enter valid pincode')
      } else {
        setFormData({
          ...formData,
          address: `${formData.houseNo} ${formData.street}, ${formData.locality}, ${formData.landmark}, ${formData.village}, ${formData.district.label}, ${formData.country.label} ${formData.pincode}`
        })
        setPage(page + 1)
      }
    } else if (page === 3) {
      setPage(page + 1)
    } else setPage(page + 1)
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FormOne formData={formData} setFormData={setFormData} />
      case 1:
        return <Address formData={formData} setFormData={setFormData} />
      case 2:
        return <DocumentScanner formData={formData} setFormData={setFormData} />
      default:
        return <UpdateSelect />
    }
  }

  const conditionalButton = () => {
    switch (page) {
      case 0:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      case 1:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      case 2:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      default:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
    }
  }
  return (
    <>
      {conditionalComponent()}
      {conditionalButton()}
    </>
  )
}

export default Demographic

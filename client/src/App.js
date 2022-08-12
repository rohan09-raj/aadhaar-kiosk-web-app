import React, { useState } from 'react'
import Address from './pages/Enrollment/Address/Address'
import Agreement from './pages/Enrollment/Agreement/Agreement'
import DocumentScanner from './pages/Enrollment/DocumentScanner/DocumentScanner'
import FinalSlip from './pages/Enrollment/FinalSlip/FinalSlip'
import Fingerprint from './pages/Enrollment/Fingerprint/Fingerprint'
import FormTwo from './pages/Enrollment/FormTwo/FormTwo'
import IrisScan from './pages/Enrollment/IrisScan/IrisScan'
import PhotoCapture from './pages/Enrollment/PhotoCapture/PhotoCapture'
import SubmitButton from './components/SubmitButton/SubmitButton'
import FormOne from './pages/Enrollment/FormOne/FormOne'
import { validEmail, validMobileNumber, validPincode } from './components/RegEx/RegEx'
import Home from './pages/Home/Home'

const App = () => {
  const [page, setPage] = useState(9)

  const [formData, setFormData] = useState({
    indianResident: '',
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
      if (formData.indianResident === '') {
        return alert('Please select your residency')
      } else if (formData.name === '' || formData.name.length < 1) {
        return alert('Please enter your name')
      } else if (formData.gender === '') {
        return alert('Please select your gender')
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
    } else if (page === 4) {
      setPage(page + 1)
    } else if (page === 5) {
      setPage(page + 1)
    } else if (page === 6) {
      setPage(page + 1)
    } else if (page === 7) {
      setPage(page + 1)
    } else if (page === 8) {
      setPage(page + 1)
    } else if (page === 9) {
      setPage(page + 1)
    } else setPage(page + 1)
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FormOne formData={formData} setFormData={setFormData} />
      case 1:
        return <FormTwo formData={formData} setFormData={setFormData} />
      case 2:
        return <Address formData={formData} setFormData={setFormData} />
      case 3:
        return <DocumentScanner formData={formData} setFormData={setFormData} />
      case 4:
        return <PhotoCapture formData={formData} setFormData={setFormData} />
      case 5:
        return <IrisScan formData={formData} setFormData={setFormData} />
      case 6:
        return <Fingerprint formData={formData} setFormData={setFormData} />
      case 7:
        return <Agreement formData={formData} setFormData={setFormData} />
      case 8:
        return <FinalSlip formData={formData} setFormData={setFormData} />
      default:
        return <Home page={page} setPage={setPage} />
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
      case 3:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      case 4:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      case 5:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      case 6:
        return <SubmitButton onClick={handleSubmit}>
            Next
          </SubmitButton>
      case 7:
        return <SubmitButton onClick={handleSubmit}>
            Submit
          </SubmitButton>
      case 8:
        return <SubmitButton onClick={handleSubmit}>
            Exit
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

export default App

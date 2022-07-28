import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Enrollment from '../pages/Enrollment/Enrollment'
import Update from '../pages/Update/Update'
import PhotoCapture from '../pages/Enrollment/PhotoCapture/PhotoCapture'
import DocumentScanner from '../pages/Enrollment/DocumentScanner/DocumentScanner'
import FormTwo from '../pages/Enrollment/FormTwo/FormTwo'
import Address from '../pages/Enrollment/Address/Address'

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="enrollment">
        <Route index element={<Enrollment />} />
        <Route path="form2">
          <Route index element={<FormTwo />} />
        </Route>
        <Route path="address">
          <Route index element={<Address />} />
        </Route>
        <Route path="photo">
          <Route index element={<PhotoCapture />} />
        </Route>
        <Route path="documents">
          <Route index element={<DocumentScanner />} />
        </Route>
      </Route>
      <Route path="update">
        <Route index element={<Update />} />
      </Route>
    </Routes>
  )
}

export default Index

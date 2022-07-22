import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Enrollment from '../pages/Enrollment/Enrollment'
import Update from '../pages/Update/Update'
import PhotoCapture from '../pages/PhotoCapture/PhotoCapture'
import DocumentScanner from '../pages/DocumentScanner/DocumentScanner'

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="enrollment">
        <Route index element={<Enrollment />} />
      </Route>
      <Route path="update">
        <Route index element={<Update />} />
      </Route>
      <Route path="photo">
        <Route index element={<PhotoCapture />} />
      </Route>
      <Route path="documents">
        <Route index element={<DocumentScanner />} />
      </Route>
    </Routes>
  )
}

export default Index

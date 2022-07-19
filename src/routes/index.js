import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Enrollment from '../pages/Enrollment/Enrollment'
import Update from '../pages/Update/Update'

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
    </Routes>
  )
}

export default Index

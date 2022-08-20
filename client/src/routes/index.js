import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Enrollment from '../pages/Enrollment/Enrollment'
import Update from '../pages/Update/Update'
import Demographic from '../pages/Update/Demographic/Demographic'
import UpdateSelect from '../pages/Update/UpdateSelect/UpdateSelect'
import Biometric from '../pages/Update/Biometric/Biometric'
import Agreement from '../pages/Update/Agreement/Agreement'
import FinalSlip from '../pages/Update/FinalSlip/FinalSlip'
import Error from '../pages/Error/Error'
import Otp from '../pages/Update/Otp/Otp'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="enrollment">
        <Route index element={<Enrollment />} />
      </Route>
      <Route
        path="error"
        element={<Error message={t('USER_ALREADY_EXISTS')} />}
      />
      <Route path="update">
        <Route index element={<Update />} />
        <Route path="otp" element={<Otp />} />
        <Route path="select-update" element={<UpdateSelect />} />
        <Route path="demographic" element={<Demographic />} />
        <Route path="biometric" element={<Biometric />} />
        <Route path="agreement" element={<Agreement />} />
        <Route path="final-slip" element={<FinalSlip />} />
      </Route>
    </Routes>
  )
}

export default Index

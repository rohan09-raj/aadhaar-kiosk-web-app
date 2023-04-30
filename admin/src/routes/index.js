import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import EnrollmentRequests from '../pages/EnrollmentRequests/EnrollmentRequests';
import UpdateRequests from '../pages/UpdateRequests/UpdateRequests';
import VerifiedUsers from '../pages/VerifiedUsers/VerifiedUsers';

const Index = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='verified'>
        <Route index element={<VerifiedUsers />} />
      </Route>
      <Route path='enrollment'>
        <Route index element={<EnrollmentRequests />} />
      </Route>
      <Route path='update'>
        <Route index element={<UpdateRequests />} />
      </Route>
    </Routes>
  );
};

export default Index;

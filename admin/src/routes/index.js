import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home/Home';
import UnverifiedUsers from '../pages/UnverifiedUsers/UnverifiedUsers';
import VerifiedUsers from '../pages/VerifiedUsers/VerifiedUsers';

const Index = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='verified'>
        <Route index element={<VerifiedUsers />} />
      </Route>
      <Route path='unverified'>
        <Route index element={<UnverifiedUsers />} />
      </Route>
    </Routes>
  );
};

export default Index;

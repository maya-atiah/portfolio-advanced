import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  );
};

export default MainRoutes;

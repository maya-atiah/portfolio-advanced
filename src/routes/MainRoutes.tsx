import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import ProjectDetail from '../components/sections/ProjectDetail';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/project/:id' element={<ProjectDetail />} />
    </Routes>
  );
};

export default MainRoutes;

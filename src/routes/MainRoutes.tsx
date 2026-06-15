import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import ProjectDetails from '../pages/ProjectDetails';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/project/:id' element={<ProjectDetails />} />
    </Routes>
  );
};

export default MainRoutes;

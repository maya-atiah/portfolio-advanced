import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden relative'>
        <HeroSection />
      </main>
    </>
  );
};

export default Index;

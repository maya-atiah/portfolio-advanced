import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutMe from '../components/sections/AboutMe';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden relative'>
        <HeroSection />
        <AboutMe />
      </main>
    </>
  );
};

export default Index;

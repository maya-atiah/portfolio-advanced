import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutMe from '../components/sections/AboutMe';
import Experience from '../components/sections/Experience';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden relative'>
        <HeroSection />
        <AboutMe />
        <Experience />
      </main>
    </>
  );
};

export default Index;

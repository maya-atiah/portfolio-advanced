import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutMe from '../components/sections/AboutMe';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Project from '../components/sections/Project';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden relative'>
        <HeroSection />
        <AboutMe />
        <Experience />
        <Project />
        <Contact />
      </main>
    </>
  );
};

export default Index;

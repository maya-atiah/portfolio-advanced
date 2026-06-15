import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutMe from '../components/sections/AboutMe';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Project from '../components/sections/Project';
import Footer from '../components/sections/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import Skills from '../components/sections/Skills';

const Index = () => {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main className='overflow-hidden relative'>
        <HeroSection />
        <AboutMe />
        <Experience />
        <Project />
        <Skills />

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;

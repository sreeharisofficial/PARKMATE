import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Map from '../components/Map';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Map />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
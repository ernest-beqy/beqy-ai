import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import Solutions from '../components/Solutions';
import SecuritySection from '../components/SecuritySection';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <Solutions />
      <SecuritySection />
      <CTA />
    </>
  );
};

export default HomePage;
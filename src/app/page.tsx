import React from 'react';
import Home from "./components/Home";
import Services from './components/Services';
import DataManagement from './components/DataManagement';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <main>
      <Home/>
      <Services/>
      <DataManagement/>
      <Pricing/>
      <WhyUs/>
      <Contact/>
    </main>
  );
}

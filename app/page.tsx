import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';
import Reviews from '@/components/Reviews';
import Activities from '@/components/Activities';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Gallery />
        <Amenities />
        <Reviews />
        <Activities />
        <Location />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
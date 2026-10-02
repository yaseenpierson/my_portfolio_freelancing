import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Proof } from '@/components/sections/Proof';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Footer } from '@/components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0733] text-slate-100 flex flex-col selection:bg-violet-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <FeaturedWork />
        <Proof />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

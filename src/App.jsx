import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} POESAT COMMUNITY. All rights reserved.
      </footer>
    </div>
  );
}

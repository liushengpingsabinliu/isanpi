import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Products />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
};

export default App;
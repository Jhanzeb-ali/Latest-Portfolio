
import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketTicker from './components/MarketTicker';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import AnalyticsTeaser from './components/AnalyticsTeaser';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-vela-dark min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <MarketTicker />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Roadmap />
        <AnalyticsTeaser />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;

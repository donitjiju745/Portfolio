import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logs from './components/Logs';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1014] text-white selection:bg-[#42d392] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Logs />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Waveform from './Waveform'; // Assumes you have this component

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Waveform */}
      <div className="absolute top-1/4 left-0 w-full opacity-50 pointer-events-none">
        <Waveform />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <p className="text-[#42d392] font-mono text-sm tracking-wide">
              Hi, I'm Donit Jiju.
            </p>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
              AI/ML Engineer & Full-Stack Developer
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Building intelligent systems at the intersection of <br />
            <span className="text-[#42d392]">machine learning</span>, <br />
            
            <span className="relative group cursor-help text-[#f08d49]">
              language
              <div className="absolute left-0 bottom-full mb-3 hidden group-hover:block w-72 p-4 bg-gray-900 border border-gray-700 text-sm text-gray-200 rounded-lg shadow-2xl z-50 transition-opacity">
                <strong className="text-white block mb-1">Low-Resource NLP</strong>
                Building Pragmatic Reasoning systems for Kannada within the legal domain.
              </div>
            </span>, and{' '}
            
            <span className="relative group cursor-help text-[#42d392]">
              signal
              <div className="absolute left-0 bottom-full mb-3 hidden group-hover:block w-72 p-4 bg-gray-900 border border-gray-700 text-sm text-gray-200 rounded-lg shadow-2xl z-50 transition-opacity">
                <strong className="text-white block mb-1">Medical Signal Processing</strong>
                Developing EEG Seizure Detection architectures using the CHB-MIT dataset.
              </div>
            </span>.
          </h1>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Final-year AI & ML engineer focused on building applied, end-to-end systems. 
            Comfortable across the stack: model architecture, backend services, and the interfaces that make them usable.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <button className="bg-[#42d392] hover:bg-[#33a06f] text-gray-900 font-semibold py-3 px-6 rounded transition-all duration-300 flex items-center group shadow-[0_0_15px_rgba(66,211,146,0.3)]">
              View My Work 
              <ArrowDown className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white py-3 px-6 rounded flex items-center transition-colors">
              <Download className="mr-2 w-5 h-5" /> Download Resume
            </button>
          </div>
        </motion.div>

        {/* Right Column: Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#42d392] to-[#f08d49] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="/profile.jpg" 
              alt="Donit Jiju" 
              className="relative w-72 h-72 object-cover rounded-full border-2 border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
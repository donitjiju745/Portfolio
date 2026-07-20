import React from 'react';
import { motion } from 'framer-motion';

const Waveform = () => {
  return (
    <div className="w-full h-48 sm:h-64 flex items-center justify-center opacity-40">
      <svg 
        viewBox="0 0 1200 120" 
        className="w-full h-full" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="none"
          stroke="#42d392"
          strokeWidth="1.5"
          strokeLinecap="round"
          // We animate the "d" (data) attribute to make the wave oscillate smoothly
          animate={{
            d: [
              "M0,60 C150,10 300,110 450,60 C600,10 750,110 900,60 C1050,10 1200,110 1350,60",
              "M0,60 C150,110 300,10 450,60 C600,110 750,10 900,60 C1050,110 1200,10 1350,60",
              "M0,60 C150,10 300,110 450,60 C600,10 750,110 900,60 C1050,10 1200,110 1350,60"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary faded wave for a layered signal effect */}
        <motion.path
          fill="none"
          stroke="#42d392"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.5"
          animate={{
            d: [
              "M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 C1400,120 1600,0 1800,60",
              "M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 C1400,0 1600,120 1800,60",
              "M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 C1400,120 1600,0 1800,60"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export default Waveform;
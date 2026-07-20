import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const logsData = [
  {
    id: 1,
    date: 'Mid-July 2026',
    title: 'Full-Stack Emotion Analysis',
    content: 'Currently working on Mood Mirror. Optimised the FastAPI backend to handle emotional analysis requests more efficiently and refined the React frontend interfaces to ensure smooth user interactions.',
    tag: 'Full-Stack / AI'
  },
  {
    id: 2,
    date: 'Early-May 2026',
    title: 'EEG Pipeline Refactoring',
    content: 'Implemented medical signal processing scripts for seizure interval analysis. Resolved a file pathing issue where the script crashed if the CHB-MIT dataset directory structure was altered.',
    tag: 'Signal Processing'
  }
];

const Logs = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-10 flex items-center"
        >
          <Terminal className="text-[#42d392] mr-3 w-8 h-8" /> Developer Log
        </motion.h2>
        
        <div className="space-y-8 border-l border-gray-800 ml-3">
          {logsData.map((log, index) => (
            <motion.div 
              key={log.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-[#42d392] rounded-full shadow-[0_0_10px_rgba(66,211,146,0.8)]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline mb-2 space-y-1 sm:space-y-0">
                <span className="text-[#f08d49] font-mono text-sm mr-4">{log.date}</span>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-800 text-gray-300 rounded uppercase tracking-wider">
                  {log.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{log.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {log.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logs;
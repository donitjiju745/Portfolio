import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#42d392] font-mono text-sm mb-2">03 — selected-work</p>
          <h2 className="text-4xl font-bold">Featured Projects & Research</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* VoyageIQ */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0px 10px 30px rgba(66,211,146,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#15161b] border border-gray-800 rounded-lg p-8 flex flex-col"
          >
            <p className="text-[#f08d49] font-mono text-xs uppercase tracking-widest mb-4">Full-Stack Application</p>
            <h3 className="text-2xl font-bold mb-4">VoyageIQ</h3>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
              A conversational travel assistant with intent detection, NER, and sentiment analysis wired into a full-stack monolithic app.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['FastAPI', 'React', 'NLP Pipeline'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-6 border-t border-gray-800 pt-6">
              <a href="#" className="text-gray-400 hover:text-[#42d392] flex items-center text-sm transition-colors">
                <Github className="w-4 h-4 mr-2" /> Code
              </a>
              <a href="#" className="text-gray-400 hover:text-[#42d392] flex items-center text-sm transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </a>
            </div>
          </motion.div>

          {/* EEG Seizure Detection */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0px 10px 30px rgba(66,211,146,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#15161b] border border-gray-800 rounded-lg p-8 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#42d392] opacity-50"></div>
            <p className="text-[#f08d49] font-mono text-xs uppercase tracking-widest mb-4">ML / Signal Processing</p>
            <h3 className="text-2xl font-bold mb-4">EEG Seizure Detection System</h3>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
              Classifies seizure activity from raw EEG signals, turning noisy time-series waveforms into a real-time clinical-style dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['XGBoost', 'Streamlit', 'CHB-MIT Dataset'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-6 border-t border-gray-800 pt-6">
              <a href="#" className="text-gray-400 hover:text-[#42d392] flex items-center text-sm transition-colors">
                <Github className="w-4 h-4 mr-2" /> Code
              </a>
              <a href="#" className="text-gray-400 hover:text-[#42d392] flex items-center text-sm transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </a>
            </div>
          </motion.div>

          {/* Kannada Legal AI */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0px 10px 30px rgba(66,211,146,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#15161b] border border-gray-800 rounded-lg p-8 flex flex-col"
          >
            <p className="text-[#f08d49] font-mono text-xs uppercase tracking-widest mb-4">Academic Research Survey</p>
            <h3 className="text-2xl font-bold mb-4">Kannada Legal AI Assistant</h3>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
              IEEE research tackling the English-as-Pivot Gap in low-resource legal NLP, enabling legal Q&A natively in Kannada.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['XLM-RoBERTa', 'MuRIL', 'IEEE Paper'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-6 border-t border-gray-800 pt-6">
              <a href="#" className="text-gray-400 hover:text-[#42d392] flex items-center text-sm transition-colors">
                <Github className="w-4 h-4 mr-2" /> Code
              </a>
              <a href="#" className="text-gray-400 hover:text-[#42d392] flex items-center text-sm transition-colors">
                <FileText className="w-4 h-4 mr-2" /> Paper
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
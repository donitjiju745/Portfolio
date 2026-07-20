import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Brain, ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Skills = () => {
  return (
    <section className="py-24 bg-[#0f1014] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#42d392] font-mono text-sm mb-2">02 — capabilities</p>
          <h2 className="text-4xl font-bold">Core Skills</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Languages Card */}
          <motion.div variants={cardVariants} className="bg-[#15161b] border border-gray-800 p-8 rounded-lg hover:border-[#42d392] transition-colors duration-300">
            <h3 className="text-gray-300 font-mono text-sm mb-6 flex items-center">
              <Terminal className="w-5 h-5 text-[#42d392] mr-2" /> ~/Languages
            </h3>
            <ul className="space-y-4 text-gray-400">
              {['Python', 'Java', 'JavaScript / TypeScript', 'SQL'].map((skill) => (
                <li key={skill} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-600 mr-2" /> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Frameworks Card */}
          <motion.div variants={cardVariants} className="bg-[#15161b] border border-gray-800 p-8 rounded-lg hover:border-[#42d392] transition-colors duration-300">
            <h3 className="text-gray-300 font-mono text-sm mb-6 flex items-center">
              <Layers className="w-5 h-5 text-[#42d392] mr-2" /> ~/Frameworks--Libraries
            </h3>
            <ul className="space-y-4 text-gray-400">
              {['FastAPI', 'React', 'LangChain', 'Streamlit', 'PyTorch / XGBoost'].map((skill) => (
                <li key={skill} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-600 mr-2" /> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Core Domains Card */}
          <motion.div variants={cardVariants} className="bg-[#15161b] border border-gray-800 p-8 rounded-lg hover:border-[#42d392] transition-colors duration-300">
            <h3 className="text-gray-300 font-mono text-sm mb-6 flex items-center">
              <Brain className="w-5 h-5 text-[#42d392] mr-2" /> ~/Core-Domains
            </h3>
            <ul className="space-y-4 text-gray-400">
              {['AI/ML Architectures', 'Natural Language Processing', 'Signal Processing (EEG)', 'Speech (Whisper)', 'Vector Search (FAISS)'].map((skill) => (
                <li key={skill} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-600 mr-2" /> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
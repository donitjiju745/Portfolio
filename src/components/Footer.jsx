import React from 'react';
import { Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-24 bg-[#0f1014] text-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <p className="text-[#42d392] font-mono text-sm mb-4">04 — get-in-touch</p>
        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
          Let’s build something worth training on.
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl leading-relaxed">
          Open to conversations on AI/ML roles, research collaborations, or anything at the intersection of language and machine learning.
        </p>

        {/* Email Link */}
        <a 
          href="mailto:donitjiju745@gmail.com" 
          className="text-[#42d392] font-mono text-lg border-b border-[#42d392] pb-1 mb-12 hover:text-white hover:border-white transition-colors flex items-center group"
        >
          <Mail className="w-5 h-5 mr-3 group-hover:animate-pulse" /> donitjiju745@gmail.com
        </a>

        {/* Social Links - ONLY GITHUB */}
        <div className="flex justify-center mb-20">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-700 rounded flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        <p className="text-gray-600 font-mono text-xs">
          © 2026 — Built with React, Tailwind CSS & Framer Motion.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
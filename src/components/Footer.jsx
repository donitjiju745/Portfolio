
import React from 'react';
import {
  Mail,
  Github,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-gray-900 bg-[#0f1014] px-6 py-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-3xl flex-col items-center"
      >
        <p className="mb-4 font-mono text-sm text-[#42d392]">
          04 — get-in-touch
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Have an idea worth exploring?
        </h2>

        <p className="mb-10 max-w-xl leading-relaxed text-gray-400">
          I'm happy to connect about NLP, Generative AI, language
          technologies, learning opportunities, or an interesting
          problem that deserves a closer look.
        </p>

        <a
          href="mailto:donitjiju745@gmail.com"
          className="mb-10 inline-flex items-center border-b border-[#42d392] pb-2 font-mono text-base text-[#42d392] transition-colors hover:border-white hover:text-white sm:text-lg"
        >
          <Mail
            className="mr-3 h-5 w-5"
            aria-hidden="true"
          />
          donitjiju745@gmail.com
        </a>

        <div className="mb-16 flex items-center justify-center gap-3">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href="https://github.com/donitjiju745"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Donit Jiju on GitHub"
            className="flex h-12 w-12 items-center justify-center rounded border border-gray-700 text-gray-400 transition-colors hover:border-[#42d392] hover:bg-[#42d392]/10 hover:text-[#42d392]"
          >
            <Github
              className="h-5 w-5"
              aria-hidden="true"
            />
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href="https://donitjiju.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit portfolio website"
            className="flex h-12 w-12 items-center justify-center rounded border border-gray-700 text-gray-400 transition-colors hover:border-[#f08d49] hover:bg-[#f08d49]/10 hover:text-[#f08d49]"
          >
            <ArrowUpRight
              className="h-5 w-5"
              aria-hidden="true"
            />
          </motion.a>
        </div>

        <p className="font-mono text-xs text-gray-600">
          © {new Date().getFullYear()} · Built with React,
          Tailwind CSS &amp; Framer Motion.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

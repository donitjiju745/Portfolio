
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import Waveform from './Waveform';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden pb-12 pt-28"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/4 w-full opacity-40"
        aria-hidden="true"
      >
        <Waveform />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-3">
            <p className="font-mono text-sm tracking-wide text-[#42d392]">
              Hi, I'm Donit Jiju.
            </p>

            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-gray-400 sm:text-sm">
              <Sparkles
                className="h-4 w-4 shrink-0 text-[#f08d49]"
                aria-hidden="true"
              />
              Aspiring NLP &amp; Generative AI Engineer
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Curious about
            <span className="text-[#42d392]"> language.</span>
            <br />
            Learning to connect
            <br />
            <span className="text-[#f08d49]">knowledge</span> with meaning.
          </h1>

          <p className="max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm a final-year B.E. student in Artificial Intelligence
            and Machine Learning, exploring how machines process
            language, retrieve useful information, and generate
            meaningful responses. My projects span chatbots,
            text analytics, topic modelling, and applied machine
            learning—each one a chance to learn by building.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center rounded bg-[#42d392] px-6 py-3 font-semibold text-[#0a0a0a] shadow-[0_0_18px_rgba(66,211,146,0.22)] transition-colors hover:bg-[#65e5aa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42d392]"
            >
              Explore My Projects
              <ArrowDown
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded border border-gray-700 px-5 py-3 text-gray-200 transition-colors hover:border-gray-500 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42d392]"
            >
              <Download
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Download Resume
            </a>
          </div>

          <p className="font-mono text-xs leading-6 tracking-wide text-gray-500">
            One idea at a time. One experiment at a time.
            Always curious.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="group relative">
            <div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#42d392] to-[#f08d49] opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
              aria-hidden="true"
            />

            <img
              src="/profile.jpg"
              alt="Portrait of Donit Jiju"
              className="relative h-60 w-60 rounded-full border-2 border-gray-800 object-cover shadow-2xl sm:h-72 sm:w-72"
              loading="eager"
            />

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gray-700 bg-[#15161b] px-4 py-2 font-mono text-xs text-gray-300 shadow-xl">
              curiosity
              <span className="text-[#42d392]"> → </span>
              experiments
              <span className="text-[#f08d49]"> → </span>
              learning
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

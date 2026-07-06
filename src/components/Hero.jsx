import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import Waveform from "./Waveform";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden bg-grid bg-grid"
    >
      {/* faint fade so the grid doesn't compete with text */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-base/85 to-base pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Signature waveform, sitting quietly behind the eyebrow line */}
        <div className="absolute -top-6 left-0 right-0 h-24 opacity-60 pointer-events-none">
          <Waveform className="w-full h-full" />
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="relative font-mono text-sm text-signal mb-5"
        >
          AI/ML Engineer &amp; Full-Stack Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="relative font-display font-700 text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-balance mb-6"
        >
          Building intelligent systems at the intersection of{" "}
          <span className="text-signal">machine learning</span>,{" "}
          <span className="text-amber">language</span>, and{" "}
          <span className="text-signal">signal</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="relative max-w-2xl text-muted text-base sm:text-lg leading-relaxed mb-10"
        >
          Final-year AI &amp; ML engineer focused on building applied,
          end-to-end systems — from EEG signal classifiers to low-resource
          NLP pipelines for Indian languages. Comfortable across the stack:
          model architecture, backend services, and the interfaces that make
          them usable.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="relative flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-signal text-base font-medium text-sm px-5 py-3 rounded-md hover:bg-signal/90 transition-colors duration-200"
          >
            View My Work
            <ArrowDown size={16} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-border text-ink font-medium text-sm px-5 py-3 rounded-md hover:border-signal hover:text-signal transition-colors duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>

          <div className="flex items-center gap-3 ml-1">
            <a
              href="https://github.com/donitjiju745"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-md border border-border text-muted hover:text-signal hover:border-signal transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/donitjiju"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-2.5 rounded-md border border-border text-muted hover:text-signal hover:border-signal transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

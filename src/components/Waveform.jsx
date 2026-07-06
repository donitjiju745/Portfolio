import { motion } from "framer-motion";

/**
 * A quiet, looping oscilloscope-style trace.
 * Nods to EEG / signal-processing work without being literal or loud —
 * it sits behind the hero copy at low opacity, like a scope running in the background.
 */
export default function Waveform({ className = "" }) {
  const path =
    "M0,60 C 40,60 40,20 80,20 C 120,20 120,90 160,90 C 200,90 200,10 240,10 " +
    "C 280,10 280,70 320,70 C 360,70 360,40 400,40 C 440,40 440,95 480,95 " +
    "C 520,95 520,15 560,15 C 600,15 600,60 640,60 C 680,60 680,45 720,45 " +
    "C 760,45 760,75 800,75 C 840,75 840,30 880,30 C 920,30 920,60 960,60 " +
    "C 1000,60 1000,50 1040,50 C 1080,50 1080,60 1120,60";

  return (
    <svg
      viewBox="0 0 1120 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        fill="none"
        stroke="#4CD9C0"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#F2A65A"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.25, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 1.2,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}


import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Layers,
  Brain,
  ChevronRight,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const categories = [
  {
    id: 'languages',
    title: '~/Languages',
    Icon: Terminal,
    items: [
      'Python',
      'Java',
      'JavaScript',
      'SQL',
    ],
  },
  {
    id: 'tools',
    title: '~/Libraries--Tools',
    Icon: Layers,
    items: [
      'scikit-learn',
      'PyTorch',
      'NumPy / Pandas',
      'Streamlit',
      'FastAPI',
      'React',
      'Plotly',
    ],
  },
  {
    id: 'domains',
    title: '~/Areas-of-Interest',
    Icon: Brain,
    items: [
      'Natural Language Processing',
      'Generative AI & RAG',
      'Text Similarity & Retrieval',
      'Topic Modelling (LDA)',
      'Conversational Applications',
      'EEG Signal Processing',
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0f1014] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-[#42d392]">
            02 — capabilities
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Tools, Concepts &amp; Curiosity
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
            Technologies and concepts I've used across projects and
            learning. This is a snapshot of my current journey,
            not a claim of expert-level proficiency.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map(({ id, title, Icon, items }) => (
            <motion.article
              key={id}
              variants={cardVariants}
              className="rounded-lg border border-gray-800 bg-[#15161b] p-7 transition-colors duration-300 hover:border-[#42d392]/70 sm:p-8"
            >
              <h3 className="mb-6 flex items-center font-mono text-sm text-gray-300">
                <Icon
                  className="mr-2 h-5 w-5 text-[#42d392]"
                  aria-hidden="true"
                />
                {title}
              </h3>

              <ul className="space-y-4 text-gray-400">
                {items.map((item) => (
                  <li key={item} className="flex items-start">
                    <ChevronRight
                      className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gray-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

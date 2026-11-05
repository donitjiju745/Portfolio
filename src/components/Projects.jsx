
import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

const PROJECTS = [
  {
    title: 'Indian Philosophy Chatbot',
    category: 'Conversational AI',
    summary:
      'A conversational chatbot exploring six Indian philosophical traditions through an interactive interface.',
    stack: ['React', 'Three.js', 'FastAPI', 'Chatbot'],
    repo: 'https://github.com/donitjiju745/Indian-Philosophy-Chatbot',
    accent: 'mint',
  },
  {
    title: 'AI-Powered Gardening Community',
    category: 'AI & Community',
    summary:
      'A community-oriented gardening application focused on sharing plant-care knowledge and exploring AI-assisted gardening guidance.',
    stack: ['AI Concepts', 'Gardening', 'Community'],
    repo: 'https://github.com/donitjiju745/AI-Powered-Gardening-Community',
    accent: 'green',
  },
  {
    title: 'Copied Post Detection in Social Media',
    category: 'NLP / Text Similarity',
    summary:
      'Explores text-similarity techniques to identify potentially duplicated posts across social media content.',
    stack: ['TF-IDF', 'Jaccard Similarity', 'Streamlit'],
    repo: 'https://github.com/donitjiju745/Copied-Post-Detection-in-Social-Media',
    accent: 'blue',
  },
  {
    title: 'EEG Seizure Detection',
    category: 'Machine Learning / Signal Processing',
    summary:
      'An EEG signal classification project using the CHB-MIT dataset to explore seizure detection through machine learning.',
    stack: ['PyTorch', 'EEG', 'CHB-MIT', 'Streamlit'],
    repo: 'https://github.com/donitjiju745/EEG-Seizure-Detection',
    accent: 'rose',
  },
  {
    title: 'Cricket Bot',
    category: 'Conversational NLP',
    summary:
      'A cricket-focused chatbot project exploring question answering and ways to retrieve useful information for user queries.',
    stack: ['NLP', 'Question Answering', 'Chatbot'],
    repo: 'https://github.com/donitjiju745/Cricket-Bot',
    accent: 'amber',
  },
  {
    title: 'Cricket Tactical Extraction',
    category: 'Text Analysis',
    summary:
      'Explores extracting useful tactical information from cricket-related text to support structured analysis of the game.',
    stack: ['NLP', 'Information Extraction', 'Text Analysis'],
    repo: 'https://github.com/donitjiju745/Cricket-Tactical-Extraction',
    accent: 'blue',
  },
  {
    title: 'GigInsurance',
    category: 'InsurTech',
    summary:
      'A project exploring insurance concepts for gig-economy workers, with a focus on parametric protection and financial inclusion.',
    stack: ['InsurTech', 'Insurance', 'Financial Inclusion'],
    repo: 'https://github.com/donitjiju745/GigInsurance',
    accent: 'green',
  },
  {
    title: 'Movie-RAG',
    category: 'Retrieval-Augmented Generation',
    summary:
      'A movie-focused project exploring retrieval-augmented question answering and recommendation using relevant movie information.',
    stack: ['RAG', 'Information Retrieval', 'Movies'],
    repo: 'https://github.com/donitjiju745/Movie-RAG',
    accent: 'rose',
  },
  {
    title: 'TopicScope',
    category: 'Topic Modelling',
    summary:
      'An interactive dashboard for exploring text collections and comparing LDA topic modelling using variational and sampling-based approaches.',
    stack: ['Python', 'Streamlit', 'scikit-learn', 'Tomotopy'],
    repo: 'https://github.com/donitjiju745/TopicScope',
    accent: 'amber',
  },
  {
    title: 'VoyageIQ Travel Assistant Chatbot',
    category: 'NLP / Travel',
    summary:
      'A travel-assistant chatbot project exploring intent detection, named entity recognition, and sentiment analysis.',
    stack: ['FastAPI', 'React', 'Intent Detection', 'NER'],
    repo: 'https://github.com/donitjiju745/VoyageIQ-TravelAssistant-Chatbot',
    accent: 'blue',
  },
  {
    title: 'Word-Sense Explorer',
    category: 'Lexical Semantics',
    summary:
      'Explores word ambiguity and lexical relationships to understand how context and different meanings affect language processing.',
    stack: ['NLP', 'WordNet', 'Word Sense'],
    repo: 'https://github.com/donitjiju745/Word-Sense-Explorer',
    accent: 'mint',
  },
];

const accentStyles = {
  mint: {
    text: '#42d392',
    bar: '#42d392',
    hover: 'hover:border-[#42d392]/70',
  },
  green: {
    text: '#34d399',
    bar: '#34d399',
    hover: 'hover:border-emerald-400/70',
  },
  blue: {
    text: '#38bdf8',
    bar: '#38bdf8',
    hover: 'hover:border-sky-400/70',
  },
  rose: {
    text: '#fb7185',
    bar: '#fb7185',
    hover: 'hover:border-rose-400/70',
  },
  amber: {
    text: '#f08d49',
    bar: '#f08d49',
    hover: 'hover:border-[#f08d49]/70',
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-gray-800 bg-[#0a0a0a] px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-sm tracking-widest text-[#42d392]">
              03 — SELECTED WORK
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Projects &amp; Experiments
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#a1a1aa]">
              A collection of projects from my learning journey,
              exploring language, information retrieval, machine
              learning, and practical applications of AI.
            </p>
          </div>

          <a
            href="https://github.com/donitjiju745?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 font-mono text-sm text-[#42d392] transition-colors hover:text-white"
          >
            More on GitHub
            <ArrowUpRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const accent =
              accentStyles[project.accent] ?? accentStyles.mint;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.06,
                }}
                whileHover={{ y: -4 }}
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#272a32] bg-[#15161b] p-6 transition-colors duration-300 sm:p-7 ${accent.hover}`}
              >
                {/* Colored top border */}
                <div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ backgroundColor: accent.bar }}
                  aria-hidden="true"
                />

                {/* Category */}
                <p
                  className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em]"
                  style={{ color: accent.text }}
                >
                  {project.category}
                </p>

                {/* Project title */}
                <h3 className="mb-4 text-xl font-semibold leading-snug text-white [overflow-wrap:anywhere] sm:text-[22px]">
                  {project.title}
                </h3>

                {/* Description: explicit color prevents dark inherited text */}
                <p className="mb-7 flex-grow text-[15px] leading-7 text-[#c4c7d0] [overflow-wrap:anywhere]">
                  {project.summary}
                </p>

                {/* Technology tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex max-w-full items-center rounded border border-[#3b4050] bg-[#101116] px-2.5 py-1.5 font-mono text-[11px] leading-4 text-[#d1d5db] [overflow-wrap:anywhere]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Source link */}
                <div className="mt-auto flex items-center gap-5 border-t border-[#292d37] pt-5">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-[#42d392] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42d392]"
                  >
                    <Github
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Source
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-[#42d392]"
                    >
                      <ExternalLink
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      Live site
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

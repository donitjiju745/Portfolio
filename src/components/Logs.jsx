
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Github,
  ExternalLink,
  Brain,
  MessageSquare,
  Search,
  Activity,
  Leaf,
  Shield,
  Film,
  BookOpen,
  Trophy,
  Sparkles,
  Code2,
} from 'lucide-react';

const PROJECT_LOGS = [
  {
    id: 'indian-philosophy',
    title: 'Indian Philosophy Chatbot',
    category: 'CONVERSATIONAL AI',
    icon: Brain,
    repo: 'Indian-Philosophy-Chatbot',
    branch: 'master',
    description:
      'Explored conversational AI for Indian philosophical traditions, including context-aware responses and presenting philosophical concepts with references.',
    topics: ['React', 'FastAPI', 'Three.js', 'Indian Knowledge Systems'],
    color: '#42d392',
  },
  {
    id: 'gardening',
    title: 'AI-Powered Gardening Community',
    category: 'AI APPLICATIONS',
    icon: Leaf,
    repo: 'AI-Powered-Gardening-Community',
    branch: 'main',
    description:
      'Developed a gardening-focused community concept combining plant-care guidance, community features, and an AI-assisted user experience.',
    topics: ['AI Assistant', 'Gardening', 'Web Applications'],
    color: '#4ade80',
  },
  {
    id: 'copied-post',
    title: 'Copied Post Detection',
    category: 'NLP & TEXT SIMILARITY',
    icon: Search,
    repo: 'Copied-Post-Detection-in-Social-Media',
    branch: 'main',
    description:
      'Worked with text similarity techniques to identify potentially copied social-media content using TF-IDF and Jaccard similarity.',
    topics: ['Python', 'TF-IDF', 'Jaccard Similarity', 'Streamlit'],
    color: '#38bdf8',
  },
  {
    id: 'eeg',
    title: 'EEG Seizure Detection',
    category: 'SIGNAL PROCESSING',
    icon: Activity,
    repo: 'EEG-Seizure-Detection',
    branch: 'main',
    description:
      'Explored EEG preprocessing and seizure classification using the CHB-MIT dataset, with a lightweight neural-network pipeline and an interactive dashboard.',
    topics: ['PyTorch', 'EEG', 'EEGNet', 'CHB-MIT'],
    color: '#fb7185',
  },
  {
    id: 'cricket-bot',
    title: 'Cricket Bot',
    category: 'QUESTION ANSWERING',
    icon: MessageSquare,
    repo: 'Cricket-Bot',
    branch: 'main',
    description:
      'Explored a cricket question-answering pipeline combining information retrieval, extractive question answering, structured data queries, and dialogue management.',
    topics: ['TF-IDF', 'MiniLM', 'Question Answering', 'Streamlit'],
    color: '#fbbf24',
  },
  {
    id: 'cricket-tactics',
    title: 'Cricket Tactical Extraction',
    category: 'INFORMATION EXTRACTION',
    icon: Trophy,
    repo: 'Cricket-Tactical-Extraction',
    branch: 'main',
    description:
      'Worked on extracting entities and relationships from cricket commentary and organizing tactical information into temporal knowledge graphs.',
    topics: ['NLP', 'NetworkX', 'PyVis', 'Knowledge Graphs'],
    color: '#a78bfa',
  },
  {
    id: 'insurance',
    title: 'GigInsurance',
    category: 'BLOCKCHAIN & INSURTECH',
    icon: Shield,
    repo: 'GigInsurance',
    branch: 'main',
    description:
      'Explored decentralized parametric insurance for gig-economy workers, including smart-contract-based policy management and automated payout concepts.',
    topics: ['Ethereum', 'Solidity', 'Smart Contracts', 'Web3'],
    color: '#34d399',
  },
  {
    id: 'movie-rag',
    title: 'Movie-RAG',
    category: 'RETRIEVAL-AUGMENTED GENERATION',
    icon: Film,
    repo: 'Movie-RAG',
    branch: 'master',
    description:
      'Explored knowledge-graph-based movie retrieval, using relevant movie information to support question answering and recommendations.',
    topics: ['RAG', 'Neo4j', 'Cypher', 'Gemini'],
    color: '#f472b6',
  },
  {
    id: 'topicscope',
    title: 'TopicScope',
    category: 'TOPIC MODELLING',
    icon: BookOpen,
    repo: 'TopicScope',
    branch: 'main',
    description:
      'Built a multipage dashboard for exploring document collections and comparing LDA topic models using variational inference and Gibbs sampling.',
    topics: ['Python', 'Streamlit', 'scikit-learn', 'Tomotopy'],
    color: '#f08d49',
  },
  {
    id: 'voyageiq',
    title: 'VoyageIQ Travel Assistant',
    category: 'NLP CHATBOT',
    icon: MessageSquare,
    repo: 'VoyageIQ-TravelAssistant-Chatbot',
    branch: 'main',
    description:
      'Explored a travel-assistant NLP pipeline for understanding user requests through intent detection, named entity recognition, and sentiment analysis.',
    topics: ['NLP', 'spaCy', 'FastAPI', 'React'],
    color: '#38bdf8',
  },
  {
    id: 'word-sense',
    title: 'Word-Sense Explorer',
    category: 'LEXICAL SEMANTICS',
    icon: BookOpen,
    repo: 'Word-Sense-Explorer',
    branch: 'main',
    description:
      'Explored word-sense disambiguation using WordNet and lexical relationships to investigate how context helps distinguish between meanings of ambiguous words.',
    topics: ['Python', 'WordNet', 'NLP', 'Semantics'],
    color: '#c084fc',
  },
];

const GITHUB_USERNAME = 'donitjiju745';

function formatDate(dateString) {
  if (!dateString) return null;

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(date);
}

const Logs = () => {
  const [repositoryDates, setRepositoryDates] = useState({});
  const [datesLoaded, setDatesLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadRepositoryDates() {
      const results = await Promise.all(
        PROJECT_LOGS.map(async (project) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${project.repo}`
            );

            if (!response.ok) {
              return [project.id, null];
            }

            const data = await response.json();

            return [project.id, data.pushed_at || null];
          } catch {
            return [project.id, null];
          }
        })
      );

      if (!cancelled) {
        setRepositoryDates(Object.fromEntries(results));
        setDatesLoaded(true);
      }
    }

    loadRepositoryDates();

    return () => {
      cancelled = true;
    };
  }, []);

  // Show the most recently updated repositories first.
  const sortedLogs = [...PROJECT_LOGS].sort((a, b) => {
    const dateA = Date.parse(repositoryDates[a.id] || '') || 0;
    const dateB = Date.parse(repositoryDates[b.id] || '') || 0;

    return dateB - dateA;
  });

  return (
    <section
      id="logs"
      className="border-t border-gray-800 bg-[#0a0a0a] px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <h2 className="mb-4 flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
            <Terminal
              className="h-8 w-8 shrink-0 text-[#42d392]"
              aria-hidden="true"
            />
            Developer Logs
          </h2>

          <p
            className="max-w-2xl text-base leading-7"
            style={{ color: '#a1a1aa' }}
          >
            A timeline of my project work across NLP, Generative AI,
            machine learning, information retrieval, and other
            areas of software development.
          </p>

          <p className="mt-3 font-mono text-xs text-gray-500">
            REPOSITORY ACTIVITY · PROJECT MILESTONES · TECHNICAL EXPLORATION
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-2 border-l border-[#2b3038] sm:ml-3">
          {sortedLogs.map((project, index) => {
            const Icon = project.icon;
            const date = formatDate(repositoryDates[project.id]);

            const historyUrl =
              `https://github.com/${GITHUB_USERNAME}/${project.repo}/commits/${project.branch}`;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.035, 0.25),
                }}
                className="relative pb-10 pl-7 sm:pb-12 sm:pl-10"
              >
                {/* Timeline point */}
                <span
                  className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full ring-4 ring-[#0a0a0a]"
                  style={{ backgroundColor: project.color }}
                  aria-hidden="true"
                />

                {/* Date and category */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <time
                    className="font-mono text-sm"
                    style={{ color: project.color }}
                  >
                    {date ||
                      (datesLoaded
                        ? 'Date unavailable'
                        : 'Loading date…')}
                  </time>

                  <span
                    className="inline-flex items-center gap-1.5 rounded border border-[#30343d] bg-[#171a20] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: project.color }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                    {project.category}
                  </span>
                </div>

                {/* Log card */}
                <div className="rounded-lg border border-[#272a32] bg-[#121318] p-5 transition-colors duration-300 hover:border-[#424852] sm:p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      {project.title}
                    </h3>

                    <span
                      className="shrink-0 font-mono text-[10px] uppercase tracking-wider"
                      style={{ color: project.color }}
                    >
                      Repository log
                    </span>
                  </div>

                  {/* Explicit inline color avoids dark global p styles */}
                  <p
                    className="mb-5 text-sm leading-7 sm:text-base"
                    style={{ color: '#c4c7d0' }}
                  >
                    {project.description}
                  </p>

                  {/* Technical topics */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded border border-[#343945] bg-[#1a1d24] px-2.5 py-1.5 font-mono text-[11px] leading-4 text-[#d1d5db]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Repository links */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#292d37] pt-4">
                    <a
                      href={`https://github.com/${GITHUB_USERNAME}/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-[#42d392]"
                    >
                      <Github
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      View Repository
                    </a>

                    <a
                      href={historyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-[#42d392]"
                    >
                      <ExternalLink
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      Commit History
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          className="mt-3 text-xs leading-6"
          style={{ color: '#71717a' }}
        >
          Dates reflect each repository's latest recorded push on
          GitHub. They indicate repository activity, not necessarily
          the date a project was started or a feature was completed.
        </p>
      </div>
    </section>
  );
};

export default Logs;

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

const PROJECTS = [
  {
    title: "VoyageIQ",
    kind: "Full-Stack Application",
    stack: ["FastAPI", "React", "NLP Pipeline"],
    summary:
      "A conversational travel assistant with intent detection, NER, and sentiment analysis wired into a full-stack monolithic app.",
    links: { github: "#", demo: "#" },
  },
  {
    title: "EEG Seizure Detection System",
    kind: "ML / Signal Processing",
    stack: ["XGBoost", "Streamlit", "CHB-MIT Dataset"],
    summary:
      "Classifies seizure activity from raw EEG signals, turning noisy time-series waveforms into a real-time clinical-style dashboard.",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Kannada Legal AI Assistant",
    kind: "Academic Research Survey",
    stack: ["XLM-RoBERTa", "MuRIL", "IEEE Paper"],
    summary:
      "IEEE research tackling the English-as-Pivot Gap in low-resource legal NLP, enabling legal Q&A natively in Kannada.",
    links: { github: "#", demo: "#" },
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 sm:py-28 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-signal mb-3">
          03 — selected-work
        </p>
        <h2 className="font-display font-600 text-3xl sm:text-4xl mb-14">
          Featured Projects &amp; Research
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 hover:bg-surface2 hover:border-signal/40 transition-colors duration-300"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-amber mb-3">
                {project.kind}
              </span>

              <h3 className="font-display font-600 text-lg text-ink mb-3">
                {project.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <a
                  href={project.links.github}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-signal transition-colors duration-200"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={project.links.demo}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-signal transition-colors duration-200"
                >
                  {project.kind.includes("Research") ? (
                    <FileText size={14} />
                  ) : (
                    <ExternalLink size={14} />
                  )}
                  {project.kind.includes("Research") ? "Paper" : "Live Demo"}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

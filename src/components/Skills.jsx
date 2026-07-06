import { motion } from "framer-motion";
import { Terminal, Layers, BrainCircuit } from "lucide-react";

const CATEGORIES = [
  {
    icon: Terminal,
    label: "languages",
    items: ["Python", "Java", "JavaScript / TypeScript", "SQL"],
  },
  {
    icon: Layers,
    label: "frameworks--libraries",
    items: ["FastAPI", "React", "LangChain", "Streamlit", "PyTorch / XGBoost"],
  },
  {
    icon: BrainCircuit,
    label: "core-domains",
    items: [
      "AI/ML Architectures",
      "Natural Language Processing",
      "Signal Processing (EEG)",
      "Speech (Whisper)",
      "Vector Search (FAISS)",
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-signal mb-3">02 — capabilities</p>
        <h2 className="font-display font-600 text-3xl sm:text-4xl mb-14">
          Core Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(({ icon: Icon, label, items }, i) => (
            <motion.div
              key={label}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="rounded-lg border border-border bg-surface p-6 hover:border-signal/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Icon size={18} className="text-signal" />
                <span className="font-mono text-xs text-muted">
                  ~/{label}
                </span>
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-ink text-[15px] flex items-baseline gap-2"
                  >
                    <span className="text-amber font-mono text-xs">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="px-6 py-24 sm:py-28 border-t border-border text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-mono text-sm text-signal mb-3">04 — get-in-touch</p>
        <h2 className="font-display font-600 text-3xl sm:text-4xl mb-5">
          Let's build something worth training on.
        </h2>
        <p className="text-muted text-base leading-relaxed mb-8">
          Open to conversations on AI/ML roles, research collaborations, or
          anything at the intersection of language and machine learning.
        </p>

        <a
          href="mailto:donitjiju745@gmail.com"
          className="inline-flex items-center gap-2 font-mono text-signal border-b border-signal/40 pb-1 hover:border-signal transition-colors duration-200"
        >
          <Mail size={16} />
          donitjiju745@gmail.com
        </a>

        <div className="flex justify-center gap-3 mt-10">
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

        <p className="mt-16 font-mono text-xs text-muted">
          © {year} — Built with React &amp; Tailwind CSS.
        </p>
      </motion.div>
    </footer>
  );
}

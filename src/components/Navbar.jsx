import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-base/70 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-signal tracking-tight"
        >
          donit<span className="text-muted">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-8 font-mono text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm text-muted border-t border-border bg-base">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

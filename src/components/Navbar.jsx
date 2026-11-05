
import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

const navLinks = [
  { name: 'Developer Logs', href: '#logs' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-gray-900 bg-[#0f1014]/90 py-4 backdrop-blur-md'
          : 'border-transparent bg-[#0f1014]/20 py-5 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-sm tracking-tight text-gray-200 transition-colors hover:text-[#42d392]"
          aria-label="Donit Jiju — home"
        >
          <Sparkles
            className="h-4 w-4 text-[#42d392]"
            aria-hidden="true"
          />
          <span>donitjiju</span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-gray-400 transition-colors hover:text-[#42d392] focus-visible:outline-none focus-visible:text-[#42d392]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded p-2 text-gray-300 transition-colors hover:text-[#42d392] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42d392] md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={
            mobileMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full w-full border-b border-gray-800 bg-[#15161b] shadow-2xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border-b border-gray-800 py-3 font-mono text-sm text-gray-300 transition-colors last:border-none hover:text-[#42d392]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

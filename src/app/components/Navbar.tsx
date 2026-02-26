import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY;
    if (latest < 100) {
      setHidden(false);
    } else if (diff > 5) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu when scrolling down
    } else if (diff < -5) {
      setHidden(false);
    }
    setLastScrollY(latest);
  });

  const navLinks = [
    { href: '/#cine', label: 'Cine' },
    { href: '/#modelado', label: 'Modelado' },
    { href: '/#voz', label: 'Voz' },
    { href: '/#teatro', label: 'Teatro' },
    { href: '/#contact', label: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-12 lg:py-8 flex justify-between items-center mix-blend-difference"
      >
        {/* Logo */}
        <div className="text-white text-base sm:text-lg lg:text-2xl font-serif tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          <a href="/">Mia D'Mon</a>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden sm:flex gap-3 sm:gap-6 lg:gap-12 text-white/80 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-[#8B0000] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden text-white/80 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden fixed top-0 right-0 w-64 h-screen bg-black/95 z-40 pt-20 px-8"
          >
            <div className="flex flex-col gap-6 text-white/80 text-sm tracking-[0.2em] uppercase font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="hover:text-[#8B0000] transition-colors border-b border-white/10 pb-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            className="sm:hidden fixed inset-0 bg-black/50 z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
};
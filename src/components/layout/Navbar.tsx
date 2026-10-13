import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';
import { smoothScrollTo } from '../../utils/smoothScroll';
import Logo from '../ui/Logo';

interface NavbarProps {
  onOpenPPDB: () => void;
}

export default function Navbar({ onOpenPPDB }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'growth-journey', 'campus-vibe', 'filosofi'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140; // 140px threshold offset for sticky header

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sectionIds[i]}`);
          return;
        }
      }
      setActiveSection('#hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 76, 750);
    setActiveSection(href);
    setMobileOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo('#hero', 0, 750);
    setActiveSection('#hero');
  };

  return (
    <header className="sticky top-0 z-40 glass-header border-b border-deep-forest/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center gap-3.5 group cursor-pointer" href="#hero" onClick={handleLogoClick}>
          <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Logo className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-sm" size={96} />
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-base sm:text-lg font-semibold tracking-tight text-deep-forest">
              Albakriatul Mudassirin
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-semibold text-earthy-gold">
              Yayasan Pendidikan Islam
            </span>
          </div>
        </a>

        {/* Desktop Nav with Animated Scroll Indicator */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-ink-muted">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1.5 transition-colors flex items-center gap-2 cursor-pointer ${
                  isActive ? 'text-deep-forest font-bold' : 'hover:text-deep-forest text-ink-muted'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="w-1.5 h-1.5 rounded-full bg-earthy-gold shadow-sm shrink-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPPDB}
            className="relative hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-deep-forest text-paper text-xs font-semibold tracking-wider uppercase hover:bg-forest-light active:scale-95 transition-all shadow-sm group cursor-pointer"
          >
            <span>Info PPDB 2025/2026</span>
            <ArrowRight className="w-3.5 h-3.5 text-earthy-gold transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-paper-warm transition-colors text-deep-forest cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-deep-forest/5 bg-paper"
          >
            <nav className="px-6 py-6 flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm tracking-wide uppercase py-2.5 px-3 rounded-xl border border-transparent transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'text-deep-forest font-bold bg-paper-subtle/80 border-deep-forest/10'
                        : 'text-ink-muted hover:text-deep-forest hover:bg-paper-warm'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-earthy-gold" />
                    )}
                  </a>
                );
              })}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPPDB();
                }}
                className="mt-3 w-full py-3.5 rounded-full bg-deep-forest text-paper text-xs font-semibold tracking-wider uppercase hover:bg-forest-light transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Info PPDB 2025/2026</span>
                <ArrowRight className="w-3.5 h-3.5 text-earthy-gold" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

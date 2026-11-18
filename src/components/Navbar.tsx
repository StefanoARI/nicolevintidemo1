import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BRAND_LOGO_URL } from '../data/salonData';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', target: 'hero' },
  { label: 'Chi Sono', target: 'essenza' },
  { label: 'Servizi', target: 'trattamenti' },
  { label: 'Matrimoni', target: 'sposa' },
  { label: 'Contatti', target: 'prenotazione' },
];

export function Navbar({ onScrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (target: string) => {
    setMobileOpen(false);
    onScrollToSection(target);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#8C6239]/15 bg-[#FAF6F0]/90 shadow-sm shadow-[#1A1412]/5 backdrop-blur-md'
            : 'border-b border-[#8C6239]/10 bg-[#FAF6F0]/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-20 lg:px-10">
          {/* Zone 1: Single-element Brand wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 font-serif text-xl font-medium tracking-tight text-[#1A1412] transition-colors hover:text-[#8C6239] sm:text-2xl"
          >
            <img
              src={BRAND_LOGO_URL}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span>Nicole Vinti</span>
          </a>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Menu di navigazione"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.target);
                }}
                className="group relative py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#4B413A] whitespace-nowrap shrink-0 transition-colors hover:text-[#1A1412]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#8C6239] transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('prenotazione')}
              className="hidden cursor-pointer items-center justify-center rounded-sm bg-[#1A1412] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF6F0] whitespace-nowrap shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8C6239] hover:shadow-md hover:shadow-[#8C6239]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6239] sm:inline-flex"
            >
              Prenota
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Chiudi menu mobile' : 'Apri menu mobile'}
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#8C6239]/20 text-[#1A1412] transition-colors hover:bg-[#F3ECE1] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Hairline */}
        <motion.div
          style={{ scaleX }}
          className="h-[2px] w-full origin-left bg-gradient-to-r from-[#8C6239] via-[#C4965A] to-[#DFC39D]"
        />
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 border-b border-[#8C6239]/20 bg-[#FAF6F0]/98 px-6 py-6 shadow-xl backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Menu di navigazione mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.target}
                  href={`#${link.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.target);
                  }}
                  className="border-b border-[#8C6239]/10 pb-3 text-sm font-medium uppercase tracking-[0.14em] text-[#1A1412] transition-colors hover:text-[#8C6239]"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => handleLinkClick('prenotazione')}
                className="mt-2 w-full rounded-sm bg-[#1A1412] py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] transition-colors hover:bg-[#8C6239]"
              >
                Prenota un Appuntamento
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

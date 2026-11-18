import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import {
  HERO_BANNER_IMAGE,
  HERO_PILLARS,
  SOCIAL_LINKS,
} from '../data/salonData';
import { ResilientImage } from './ResilientImage';
import { ModalState } from './CinemaModal';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenModal: (modal: ModalState) => void;
}

const MARQUEE_PHRASES = [
  'Il piacere di piacersi',
  'Salon Emotion Gallarate',
  'Milano & Parigi Alta Moda',
  "Consulenza d'Immagine",
  'Taglio Sartoriale Donna',
  'Rituali Olistici Hair SPA',
];

export function HeroSection({
  onScrollToSection,
  onOpenModal,
}: HeroSectionProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });

  const bannerImageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const bannerScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.03]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FAF6F0] pt-10 pb-0 sm:pt-14 lg:pt-20"
    >
      {/* Warm Sunlit Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,122,0.42) 0%, rgba(194,139,107,0.18) 45%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-24 h-[400px] w-[400px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(176,131,77,0.28) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-[1px] w-10 bg-[#8C6239]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8C6239]">
            Nicole Vinti • Hair Stylist &amp; Consulente d&apos;Immagine tra Gallarate e Milano
          </span>
        </motion.div>

        {/* Split Hero Typography & CTAs */}
        <div className="mb-12 grid grid-cols-1 items-end gap-10 lg:mb-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="max-w-4xl font-serif text-[2.45rem] font-normal leading-[1.06] tracking-[-0.02em] text-[#1A1412] sm:text-5xl lg:text-[3.85rem]">
              Nicole Vinti: Hair Stylist, parrucchiere a Gallarate e consulente d’Immagine
            </h1>

            <p className="mt-6 max-w-2xl text-base font-light leading-[1.75] text-[#4A403A] sm:text-lg">
              <span className="font-serif text-xl italic font-medium text-[#8C6239]">
                Il piacere di piacersi
              </span>{' '}
              — Affidati all&apos;atelier di <strong>Nicole Vinti</strong>, rinomata{' '}
              <strong>consulente d’immagine</strong> e{' '}
              <strong>parrucchiere a Gallarate</strong>, punto di riferimento anche per
              la clientela di <strong>Milano</strong>. Uno spazio polisensoriale concepito
              per celebrare la tua bellezza con tagli sartoriali, effetti luce e rituali di
              benessere olistico.
            </p>

            {/* Social Handles — clean typographic row (zero pills) */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-[#8C6239]/15 pt-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.handle}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#5A5049] transition-colors hover:text-[#8C6239]"
                >
                  <Instagram className="h-3.5 w-3.5 text-[#8C6239] transition-transform duration-200 group-hover:scale-110" />
                  <span className="border-b border-transparent transition-colors group-hover:border-[#8C6239]/50">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3.5 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch lg:justify-end"
          >
            <button
              type="button"
              onClick={() => onScrollToSection('prenotazione')}
              className="group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-sm bg-[#1A1412] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF6F0] whitespace-nowrap shadow-lg shadow-[#1A1412]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8C6239] hover:shadow-[#8C6239]/25"
            >
              <span>Prenota un Appuntamento</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => onScrollToSection('trattamenti')}
              className="inline-flex cursor-pointer items-center justify-center rounded-sm border border-[#8C6239]/30 bg-[#F3ECE1] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1412] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8C6239] hover:bg-[#E7DDD0]"
            >
              Esplora i Servizi
            </button>
          </motion.div>
        </div>

        {/* Parallax Salon Emotion Banner Frame */}
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8C6239]/20 bg-[#261D19] shadow-2xl shadow-[#1A1412]/12 sm:aspect-[21/9] lg:min-h-[500px]"
        >
          <button
            type="button"
            onClick={() =>
              onOpenModal({
                type: 'image',
                src: HERO_BANNER_IMAGE,
                alt: 'Salone parrucchieri Nicole Vinti a Gallarate - Salon Emotion',
                caption:
                  'Salon Emotion • Design Barbara Rigolio — Spazi concepiti per rigenerare mente e spirito prima ancora della materia capillare.',
              })
            }
            aria-label="Ingrandisci immagine del salone Salon Emotion"
            className="block h-full w-full cursor-zoom-in text-left"
          >
            <motion.div
              style={{ y: bannerImageY, scale: bannerScale }}
              className="h-[112%] w-full -translate-y-[5%]"
            >
              <ResilientImage
                src={HERO_BANNER_IMAGE}
                alt="Salone parrucchieri Nicole Vinti a Gallarate - Salon Emotion"
                fallbackLabel="Salon Emotion • Atelier Nicole Vinti Gallarate"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1412]/70 via-[#1A1412]/10 to-transparent" />
          </button>

          {/* Warm Floating Atelier Badge */}
          <div className="pointer-events-none absolute bottom-5 left-5 right-5 max-w-md rounded-lg border border-[#DFC39D]/30 bg-[#FAF6F0]/92 p-5 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C6239]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Salon Emotion • Design Barbara Rigolio</span>
            </div>
            <p className="mt-2 font-serif text-sm leading-relaxed text-[#1A1412]">
              Spazi concepiti per rigenerare mente e spirito prima ancora della materia
              capillare.
            </p>
          </div>
        </motion.div>

        {/* 4-Column Pillars Strip */}
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          {HERO_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-t border-[#8C6239]/25 pt-5 transition-colors duration-300 hover:border-[#8C6239]"
            >
              <div className="font-serif text-3xl font-medium leading-none text-[#8C6239] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                {pillar.number}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]">
                {pillar.title}
              </div>
              <p className="mt-1.5 text-sm font-light leading-relaxed text-[#5A5049]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Editorial Marquee Ribbon */}
      <div className="overflow-hidden border-y border-[#8C6239]/20 bg-[#1A1412] py-3.5 text-[#DFC39D]">
        <div className="animate-marquee flex items-center gap-8">
          {[...MARQUEE_PHRASES, ...MARQUEE_PHRASES].map((phrase, idx) => (
            <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-serif text-sm italic tracking-wide sm:text-base">
                {phrase}
              </span>
              <span aria-hidden="true" className="text-xs text-[#C4965A]">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

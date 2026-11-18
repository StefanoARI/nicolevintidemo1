import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Expand, ArrowRight } from 'lucide-react';
import { BRIDAL_GALLERY, EXTERNAL_LINKS } from '../data/salonData';
import { ResilientImage } from './ResilientImage';
import { ModalState } from './CinemaModal';

interface SposaSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenModal: (modal: ModalState) => void;
}

export function SposaSection({
  onScrollToSection,
  onOpenModal,
}: SposaSectionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  const oddColumnY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const evenColumnY = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  return (
    <section
      id="sposa"
      ref={galleryRef}
      className="relative overflow-hidden bg-[#1A1412] py-20 text-[#FAF6F0] lg:py-28"
    >
      {/* Warm Champagne Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(223,195,157,0.4) 0%, rgba(140,98,57,0.12) 50%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 grid grid-cols-1 items-start gap-10 text-center lg:mb-16 lg:grid-cols-2 lg:gap-16 lg:text-left"
        >
          <div>
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span className="hidden h-[1px] w-8 bg-[#C4965A] lg:block" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C4965A]">
                Haute Coiffure Mariage
              </span>
            </div>
            <h2 className="font-serif text-3xl font-normal leading-[1.15] text-[#FAF6F0] sm:text-4xl">
              Parrucchiera Sposa e Acconciature Matrimonio d&apos;Autore
            </h2>
            <p className="mt-5 text-base font-light leading-[1.75] text-[#D8CFC5]">
              <span className="font-serif text-lg italic text-[#DFC39D]">
                L&apos;architettura del velo e della luce
              </span>{' '}
              — Servizio esclusivo di <strong>parrucchiera per matrimonio</strong> e{' '}
              <strong>parrucchiera sposa</strong> curato personalmente da{' '}
              <strong className="text-[#FAF6F0]">Nicole Vinti</strong>. Realizziamo ogni{' '}
              <strong>acconciatura</strong> in perfetta sinergia con l&apos;abito e i
              lineamenti del viso.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:pt-8">
            <p className="text-[15px] font-light leading-[1.8] text-[#D8CFC5]">
              Il percorso{' '}
              <em className="font-serif text-[#DFC39D]">
                &quot;Nicole Vinti Parrucchiere Sposa a Gallarate&quot;
              </em>{' '}
              non prevede formule standardizzate: è un viaggio esperienziale che include
              diagnosi d&apos;immagine, prove acconciatura e assistenza dedicata nel
              giorno del matrimonio.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-1 lg:justify-start">
              <a
                href={EXTERNAL_LINKS.matrimoni}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-[#C4965A] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1412] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DFC39D]"
              >
                Scopri il Percorso Sposa
              </a>
              <button
                type="button"
                onClick={() => onScrollToSection('prenotazione')}
                className="group inline-flex cursor-pointer items-center gap-2 border-b border-[#DFC39D]/50 pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFC39D] transition-colors hover:border-[#FAF6F0] hover:text-[#FAF6F0]"
              >
                <span>Richiedi Consulenza</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Staggered Parallax Bridal Lookbook Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BRIDAL_GALLERY.map((photo, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={photo.id}
                style={{ y: isEven ? evenColumnY : oddColumnY }}
                className={isEven ? 'lg:mt-8' : ''}
              >
                <button
                  type="button"
                  onClick={() =>
                    onOpenModal({
                      type: 'gallery',
                      images: BRIDAL_GALLERY,
                      activeIndex: idx,
                    })
                  }
                  aria-label={`Apri foto sposa: ${photo.alt}`}
                  className="group relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-xl border border-[#DFC39D]/25 bg-[#261D19] text-left shadow-xl shadow-black/40 transition-all duration-300 hover:border-[#DFC39D]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4965A]"
                >
                  <ResilientImage
                    src={photo.src}
                    fallbackSrc={photo.fullSrc}
                    alt={photo.alt}
                    fallbackLabel="Bridal Couture • Nicole Vinti"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120D0B]/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                  <span className="pointer-events-none absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#DFC39D]/40 bg-[#1A1412]/70 text-[#FAF6F0] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>

                  <p className="pointer-events-none absolute inset-x-4 bottom-4 font-serif text-sm italic text-[#FAF6F0]/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {photo.alt}
                  </p>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { NICOLE_PORTRAIT_URL } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface EssenzaSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export function EssenzaSection({ onScrollToSection }: EssenzaSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const frameOffsetY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <section
      id="essenza"
      ref={containerRef}
      className="relative overflow-hidden bg-[#F3ECE1] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Column with Kinetic Architectural Frame */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Warm Bronze Architectural Offset Box */}
              <motion.div
                style={{ y: frameOffsetY }}
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -left-5 hidden h-full w-full rounded-xl border border-[#8C6239]/35 bg-gradient-to-br from-[#DFC39D]/25 to-transparent sm:block"
              />

              {/* Portrait Container */}
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-xl border border-[#8C6239]/20 bg-[#261D19] shadow-2xl shadow-[#1A1412]/15">
                <motion.div style={{ y: portraitY }} className="h-[106%] w-full -translate-y-[3%]">
                  <ResilientImage
                    src={NICOLE_PORTRAIT_URL}
                    alt="Nicole Vinti fondatrice e master hairstylist | Parrucchiere a Gallarate"
                    fallbackLabel="Nicole Vinti • Fondatrice & Creative Director"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </motion.div>
              </div>

              {/* Caption Row */}
              <div className="relative z-10 mt-6 flex items-end justify-between border-b border-[#8C6239]/20 pb-4">
                <div>
                  <p className="font-serif text-xl font-semibold text-[#1A1412]">
                    Nicole Vinti
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C6239]">
                    Fondatrice &amp; Creative Director
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7 lg:col-span-7"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#8C6239]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8C6239]">
                  La Visione Estetica di Nicole Vinti
                </span>
              </div>
              <h2 className="font-serif text-3xl font-normal leading-[1.2] text-[#1A1412] sm:text-4xl lg:text-[2.65rem]">
                Parrucchieri Professionisti e Consulenza d’Immagine: L&apos;Arte del Taglio
                Capelli Donna
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-[15px] font-light leading-[1.8] text-[#4A403A] sm:text-base">
              <p>
                Con oltre 35 anni di carriera tra passerelle d&apos;alta moda, backstage
                per i <strong>migliori parrucchieri a Milano</strong> e Parigi e la guida
                del suo salone di <strong>parrucchieri a Gallarate per donna</strong>,{' '}
                <strong>Nicole Vinti</strong> ha forgiato un metodo esclusivo di{' '}
                <strong>consulenza d&apos;immagine</strong> che supera le mode
                passeggere.
              </p>
              <p>
                Ogni <strong>taglio di capelli donna</strong> è un&apos;opera su misura.
                Che tu desideri un <strong>taglio corto donna</strong> di carattere, un{' '}
                <strong>taglio medio</strong> dinamico o valorizzare i tuoi{' '}
                <strong>capelli ricci</strong> e lunghi, armonizziamo le proporzioni del
                volto con <strong>effetti luce sui capelli</strong>,{' '}
                <strong>balayage</strong>, <strong>shatush</strong> e trattamenti{' '}
                <strong>gloss hair</strong>.
              </p>
            </div>

            {/* Interactive Feature Cards */}
            <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2">
              <div className="group rounded-lg border border-[#8C6239]/20 bg-[#FAF6F0] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8C6239]/50 hover:shadow-lg hover:shadow-[#8C6239]/10">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8C6239]/15 text-[#8C6239] transition-colors group-hover:bg-[#8C6239] group-hover:text-[#FAF6F0]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]">
                      Ascolto
                    </p>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-[#5A5049]">
                      Colloquio preventivo privo di fretta per comprendere bisogni e
                      desideri.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-lg border border-[#8C6239]/20 bg-[#FAF6F0] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8C6239]/50 hover:shadow-lg hover:shadow-[#8C6239]/10">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8C6239]/15 text-[#8C6239] transition-colors group-hover:bg-[#8C6239] group-hover:text-[#FAF6F0]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]">
                      Materia Viva
                    </p>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-[#5A5049]">
                      Rispetto assoluto della fibra biologica con ingredienti biodinamici.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onScrollToSection('prenotazione')}
                className="group inline-flex cursor-pointer items-center gap-2 border-b border-[#8C6239] pb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8C6239] transition-colors hover:border-[#1A1412] hover:text-[#1A1412]"
              >
                <span>Richiedi una consulenza diretta con Nicole</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  EXTERNAL_LINKS,
  FILOSOFIA_IMAGE_URL,
  FILOSOFIA_QUOTES,
} from '../data/salonData';
import { ResilientImage } from './ResilientImage';

export function FilosofiaSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const cardParallax = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <section
      id="filosofia"
      className="relative overflow-hidden bg-[#FAF6F0] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top Split: Intro & Chanel/Wilde Quotes */}
        <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:mb-24 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#8C6239]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8C6239]">
                Filosofia dello Spazio
              </span>
            </div>
            <h2 className="font-serif text-3xl font-normal leading-[1.15] text-[#1A1412] sm:text-4xl">
              Architettura dell&apos;accoglienza, alchimia dello sguardo.
            </h2>
            <p className="mt-5 text-[15px] font-light leading-[1.8] text-[#4A403A]">
              Il nostro concept store non è un salone convenzionale, ma un percorso
              sensoriale curato nel minimo dettaglio dall&apos;architetto{' '}
              <a
                href={EXTERNAL_LINKS.barbaraRigolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-0.5 border-b border-[#8C6239]/50 font-semibold text-[#1A1412] transition-colors hover:border-[#8C6239] hover:text-[#8C6239]"
              >
                <span>Barbara Rigolio</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#8C6239]" />
              </a>
              . Luce naturale modulata, acustica ovattata, materiali organici e
              profumazioni d&apos;ambiente su misura trasformano ogni seduta in una
              meditazione estetica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {FILOSOFIA_QUOTES.map((quote, idx) => (
              <motion.blockquote
                key={quote.author}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-xl border border-[#8C6239]/20 bg-[#F3ECE1] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8C6239]/45 hover:shadow-xl hover:shadow-[#8C6239]/10"
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="block font-serif text-5xl leading-none text-[#8C6239]/45 transition-colors group-hover:text-[#8C6239]"
                  >
                    “
                  </span>
                  <p className="mt-3 font-serif text-base italic font-normal leading-relaxed text-[#1A1412]">
                    {quote.text}
                  </p>
                </div>
                <footer className="mt-6 border-t border-[#8C6239]/15 pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C6239]">
                  {quote.author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

        {/* Overlapping Parallax Showcase: Hair SPA + Metodo Total Emotion */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-0"
        >
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#8C6239]/20 bg-[#261D19] shadow-xl shadow-[#1A1412]/10">
              <motion.div
                style={{ y: imageParallax }}
                className="h-[108%] w-full -translate-y-[4%]"
              >
                <ResilientImage
                  src={FILOSOFIA_IMAGE_URL}
                  alt="Metodo Total Emotion Hair SPA Nicole Vinti Gallarate"
                  fallbackLabel="Spazio Rigenerativo • Gallarate"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1A1412]/40 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 rounded-sm border border-[#DFC39D]/30 bg-[#FAF6F0]/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C6239] backdrop-blur-sm">
                Spazio Rigenerativo • Gallarate
              </div>
            </div>
          </div>

          <motion.div
            style={{ y: cardParallax }}
            className="relative z-20 lg:col-span-5 lg:-ml-12"
          >
            <div className="rounded-xl border border-[#8C6239]/25 bg-[#FAF6F0] p-8 shadow-2xl shadow-[#1A1412]/12 sm:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C6239]">
                Metodo Total Emotion
              </span>
              <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-[#1A1412] sm:text-[1.75rem]">
                Dalla diagnosi fisionomica alla quiete interiore.
              </h3>
              <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#4A403A]">
                Ogni servizio si apre con un&apos;analisi armocromatica e morfologica che
                rispetta l&apos;ovale del viso e l&apos;espressività individuale. Non
                imponiamo mode fugaci: riveliamo la versione più radiosa e autentica di
                te.
              </p>

              <div className="mt-7 flex items-center gap-6 border-t border-[#8C6239]/15 pt-6">
                <div>
                  <p className="font-serif text-2xl font-semibold tabular-nums text-[#8C6239]">
                    100%
                  </p>
                  <p className="mt-0.5 text-xs font-light text-[#5A5049]">
                    Approccio Personalizzato
                  </p>
                </div>
                <div className="h-10 w-[1px] bg-[#8C6239]/20" aria-hidden="true" />
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#8C6239]">
                    Bio
                  </p>
                  <p className="mt-0.5 text-xs font-light text-[#5A5049]">
                    Fitocosmesi Olistica
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

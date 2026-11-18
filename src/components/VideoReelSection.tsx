import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Clock, Volume2, ArrowRight } from 'lucide-react';
import {
  REEL_COVER_URL,
  REEL_STEPS,
  REEL_YOUTUBE_ID,
} from '../data/salonData';
import { ResilientImage } from './ResilientImage';
import { ModalState } from './CinemaModal';

interface VideoReelSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenModal: (modal: ModalState) => void;
}

export function VideoReelSection({
  onScrollToSection,
  onOpenModal,
}: VideoReelSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="video-reel"
      className="relative overflow-hidden bg-[#1A1412] py-20 text-[#FAF6F0] lg:py-28"
    >
      {/* Warm Candlelight Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(196,150,90,0.45) 0%, rgba(140,98,57,0.12) 50%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-[#DFC39D]/15 pb-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C4965A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C4965A]">
              Dietro le Quinte dell&apos;Arte
            </span>
          </div>
          <h2 className="max-w-3xl font-serif text-3xl font-normal leading-[1.15] text-[#FAF6F0] sm:text-4xl lg:text-[2.75rem]">
            L&apos;Esperienza in Salone — Guarda il Video Reel
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Interactive 9:16 Video Reel Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:col-span-5"
          >
            <button
              type="button"
              onClick={() =>
                onOpenModal({
                  type: 'video',
                  youtubeId: REEL_YOUTUBE_ID,
                  title: "L'Esperienza in Salone — Nicole Vinti",
                  subtitle: '@nicolevinti_official • Concept Store Gallarate (VA)',
                })
              }
              aria-label="Guarda il video reel del salone Nicole Vinti"
              className="group relative aspect-[9/16] w-full max-w-[330px] cursor-pointer overflow-hidden rounded-2xl border border-[#DFC39D]/30 bg-[#261D19] text-left shadow-2xl shadow-black/60 transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4965A]"
            >
              <ResilientImage
                src={REEL_COVER_URL}
                alt="Video Reel Salone Nicole Vinti Gallarate"
                fallbackLabel="Guarda il Reel — Atelier Nicole Vinti"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120D0B]/95 via-[#120D0B]/20 to-[#120D0B]/60" />

              {/* Top Unboxed Metadata Bar */}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[11px] font-medium tracking-wider text-[#FAF6F0]/90">
                <span className="uppercase tracking-[0.18em] text-[#DFC39D]">
                  Reel
                </span>
                <span className="inline-flex items-center gap-1.5 tabular-nums text-[#FAF6F0]/80">
                  <Clock className="h-3 w-3 text-[#C4965A]" />
                  <span>00:16 min</span>
                </span>
              </div>

              {/* Center Play Button with Animated Warm Gold Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="animate-pulse-ring absolute inset-0 rounded-full border border-[#DFC39D]/70"
                  />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#DFC39D]/50 bg-[#1A1412]/75 text-[#FAF6F0] shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#C4965A] group-hover:bg-[#8C6239]">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </span>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DFC39D]">
                  <Volume2 className="h-3.5 w-3.5" />
                  <span>Guarda il reel</span>
                </div>
                <p className="font-serif text-base leading-snug text-[#FAF6F0]">
                  Dalla consulenza d&apos;immagine al taglio di capelli donna con Nicole
                  Vinti.
                </p>
                <p className="font-serif text-xs italic text-[#DFC39D]/80">
                  @nicolevinti_official • Concept Store Gallarate (VA)
                </p>
              </div>
            </button>
          </motion.div>

          {/* 3 Interactive Salon Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7 lg:col-span-7"
          >
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C4965A]">
                I Passaggi Chiave del Salone
              </span>
              <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-[#FAF6F0] sm:text-3xl">
                La danza della forma: come prende vita un total look che si distingue.
              </h3>
              <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#D8CFC5]">
                Nei passaggi successivi puoi scoprire i 3 momenti con cui accogliamo ogni
                cliente nel nostro salone di <strong>parrucchiere a Gallarate</strong>:
                non semplici fasi tecniche, ma un sistema pensato dai nostri{' '}
                <strong className="text-[#FAF6F0]">parrucchieri professionisti</strong>{' '}
                per armonizzare i lineamenti e rigenerare la mente.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {REEL_STEPS.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`group relative flex w-full cursor-pointer items-start gap-5 rounded-xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-[#C4965A]/55 bg-[#261D19] shadow-lg shadow-black/30'
                        : 'border-[#DFC39D]/12 bg-[#211916]/60 hover:border-[#DFC39D]/30 hover:bg-[#261D19]/80'
                    }`}
                  >
                    <span
                      className={`font-serif text-2xl font-semibold tabular-nums leading-none transition-colors ${
                        isActive ? 'text-[#DFC39D]' : 'text-[#8C6239]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#FAF6F0]">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 text-sm font-light leading-relaxed text-[#D8CFC5]/90">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="button"
                onClick={() => onScrollToSection('prenotazione')}
                className="inline-flex cursor-pointer items-center justify-center rounded-sm bg-[#C4965A] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1412] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DFC39D]"
              >
                Prenota la Tua Esperienza
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('sposa')}
                className="group inline-flex cursor-pointer items-center gap-2 border-b border-[#DFC39D]/50 pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFC39D] transition-colors hover:border-[#FAF6F0] hover:text-[#FAF6F0]"
              >
                <span>Scopri la nostra gallery</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

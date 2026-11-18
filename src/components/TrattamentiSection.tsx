import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { TREATMENTS } from '../data/salonData';
import { ResilientImage } from './ResilientImage';
import { ModalState } from './CinemaModal';

interface TrattamentiSectionProps {
  onOpenModal: (modal: ModalState) => void;
}

export function TrattamentiSection({ onOpenModal }: TrattamentiSectionProps) {
  return (
    <section
      id="trattamenti"
      className="relative overflow-hidden bg-[#FAF6F0] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Split Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col justify-between gap-6 border-b border-[#8C6239]/20 pb-8 text-center lg:flex-row lg:items-end lg:text-left"
        >
          <div className="mx-auto max-w-3xl lg:mx-0">
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span className="hidden h-[1px] w-8 bg-[#8C6239] lg:block" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8C6239]">
                Menu Rituel • Haute Beauté
              </span>
            </div>
            <h2 className="font-serif text-3xl font-normal leading-[1.15] text-[#1A1412] sm:text-4xl">
              Trattamenti Capelli Esclusivi: Balayage, Keratin Treatment, Gloss Hair &amp;
              Hair SPA
            </h2>
          </div>

          <p className="mx-auto max-w-md text-[15px] font-light leading-[1.7] text-[#4A403A] lg:mx-0">
            Protocolli d’autore progettati per risanare la fibra capillare in profondità e
            vestire la chioma con tonalità ricche e sfumature multidimensionali.
          </p>
        </motion.div>

        {/* 4-Column Vertical Video Showcase Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.05,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#8C6239]/20 bg-[#F3ECE1] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8C6239]/45 hover:shadow-2xl hover:shadow-[#8C6239]/15"
            >
              {/* Video Trigger Poster */}
              <button
                type="button"
                onClick={() =>
                  onOpenModal({
                    type: 'video',
                    youtubeId: item.youtubeId,
                    title: item.title,
                    subtitle: 'Nicole Vinti • Menu Rituel',
                  })
                }
                aria-label={`Guarda il video: ${item.title}`}
                className="relative aspect-[9/14] w-full cursor-pointer overflow-hidden bg-[#261D19] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6239]"
              >
                <ResilientImage
                  src={item.imageUrl}
                  alt={item.title}
                  fallbackLabel={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1412]/75 via-[#1A1412]/15 to-transparent" />

                {/* Unboxed Top-Left Label */}
                <span className="pointer-events-none absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF6F0]/90 drop-shadow">
                  0{idx + 1} · {item.durationLabel}
                </span>

                {/* Center Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#DFC39D]/60 bg-[#1A1412]/70 text-[#FAF6F0] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#C4965A] group-hover:bg-[#8C6239]">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </div>
              </button>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-xl font-semibold leading-snug text-[#1A1412]">
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm font-light leading-[1.68] text-[#4A403A]"
                    dangerouslySetInnerHTML={{ __html: item.descriptionHtml }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

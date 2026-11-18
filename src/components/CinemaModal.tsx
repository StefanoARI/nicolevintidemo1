import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BridalImage } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

export type ModalState =
  | { type: 'video'; youtubeId: string; title: string; subtitle?: string }
  | { type: 'gallery'; images: BridalImage[]; activeIndex: number }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | null;

interface CinemaModalProps {
  modal: ModalState;
  onClose: () => void;
  onChangeGalleryIndex?: (nextIndex: number) => void;
}

export function CinemaModal({
  modal,
  onClose,
  onChangeGalleryIndex,
}: CinemaModalProps) {
  useEffect(() => {
    if (!modal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (modal.type === 'gallery' && onChangeGalleryIndex) {
        if (e.key === 'ArrowRight') {
          onChangeGalleryIndex((modal.activeIndex + 1) % modal.images.length);
        } else if (e.key === 'ArrowLeft') {
          onChangeGalleryIndex(
            (modal.activeIndex - 1 + modal.images.length) % modal.images.length
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modal, onClose, onChangeGalleryIndex]);

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#120D0B]/90 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi finestra"
            className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF7A]/30 bg-[#1A1412]/90 text-[#FAF6F0] transition-colors hover:border-[#D4AF7A] hover:bg-[#8C6239] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF7A]"
          >
            <X className="h-5 w-5" />
          </button>

          {modal.type === 'video' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-[400px] flex-col items-center gap-4"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-[#D4AF7A]/30 bg-black shadow-2xl shadow-black/70">
                <iframe
                  src={`https://www.youtube.com/embed/${modal.youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  title={modal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="text-center">
                <p className="font-serif text-lg text-[#FAF6F0]">{modal.title}</p>
                {modal.subtitle && (
                  <p className="mt-1 text-xs tracking-wider text-[#DFC39D]">
                    {modal.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {modal.type === 'image' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[88vh] max-w-4xl flex-col items-center gap-4"
            >
              <ResilientImage
                src={modal.src}
                alt={modal.alt}
                className="max-h-[78vh] w-auto rounded-lg border border-[#D4AF7A]/25 object-contain shadow-2xl"
                loading="eager"
              />
              {modal.caption && (
                <p className="text-center font-serif text-sm italic text-[#DFC39D]">
                  {modal.caption}
                </p>
              )}
            </motion.div>
          )}

          {modal.type === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-3xl items-center justify-center gap-4"
            >
              <button
                type="button"
                aria-label="Immagine precedente"
                onClick={() =>
                  onChangeGalleryIndex?.(
                    (modal.activeIndex - 1 + modal.images.length) %
                      modal.images.length
                  )
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF7A]/30 bg-[#1A1412]/80 text-[#FAF6F0] transition-colors hover:border-[#D4AF7A] hover:bg-[#8C6239]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center gap-3">
                <div className="overflow-hidden rounded-xl border border-[#D4AF7A]/25 bg-[#1A1412] shadow-2xl">
                  <ResilientImage
                    key={modal.images[modal.activeIndex].id}
                    src={modal.images[modal.activeIndex].fullSrc}
                    fallbackSrc={modal.images[modal.activeIndex].src}
                    alt={modal.images[modal.activeIndex].alt}
                    className="max-h-[76vh] w-auto object-contain"
                    loading="eager"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#DFC39D]">
                  <span className="font-serif italic">
                    {modal.images[modal.activeIndex].alt}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    {modal.activeIndex + 1} / {modal.images.length}
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-label="Immagine successiva"
                onClick={() =>
                  onChangeGalleryIndex?.(
                    (modal.activeIndex + 1) % modal.images.length
                  )
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF7A]/30 bg-[#1A1412]/80 text-[#FAF6F0] transition-colors hover:border-[#D4AF7A] hover:bg-[#8C6239]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

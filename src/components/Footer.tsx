import { Instagram, MapPin, Phone } from 'lucide-react';
import {
  ATELIER_ADDRESS,
  ATELIER_MAPS_URL,
  ATELIER_PHONE_DISPLAY,
  ATELIER_PHONE_HREF,
  BRAND_LOGO_URL,
  EXTERNAL_LINKS,
  SOCIAL_LINKS,
} from '../data/salonData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="border-t border-[#DFC39D]/15 bg-[#140F0D] py-14 text-[#D8CFC5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-[#DFC39D]/15 pb-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_LOGO_URL}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="h-9 w-9 object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <div>
                <p className="font-serif text-xl font-medium text-[#FAF6F0]">
                  Nicole Vinti
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4965A]">
                  Hairstylist &amp; Concept
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-[#BFB4A8]">
              Il piacere di piacersi. Oltre 35 anni di alta moda tra Milano e Parigi nel
              nostro concept store di Gallarate: taglio sartoriale donna, effetti luce,
              rituali Olaplex e Hair SPA.
            </p>
          </div>

          {/* Site Directory */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4965A]">
              Esplora
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm font-light">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('hero')}
                  className="cursor-pointer transition-colors hover:text-[#DFC39D]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('essenza')}
                  className="cursor-pointer transition-colors hover:text-[#DFC39D]"
                >
                  Chi Sono
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('trattamenti')}
                  className="cursor-pointer transition-colors hover:text-[#DFC39D]"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollToSection('sposa')}
                  className="cursor-pointer transition-colors hover:text-[#DFC39D]"
                >
                  Matrimoni
                </button>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.abbigliamento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#DFC39D]"
                >
                  Abbigliamento
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.giftCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#DFC39D]"
                >
                  Gift Card
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Social */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4965A]">
              Atelier Gallarate
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-light">
              <a
                href={ATELIER_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-colors hover:text-[#DFC39D]"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C4965A]" />
                <span>{ATELIER_ADDRESS}</span>
              </a>
              <a
                href={ATELIER_PHONE_HREF}
                className="inline-flex items-center gap-2 tabular-nums transition-colors hover:text-[#DFC39D]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#C4965A]" />
                <span>{ATELIER_PHONE_DISPLAY}</span>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.handle}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#BFB4A8] transition-colors hover:text-[#DFC39D]"
                >
                  <Instagram className="h-3.5 w-3.5 text-[#C4965A]" />
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-[#8E8278] sm:flex-row">
          <p>© {new Date().getFullYear()} Nicole Vinti • Hair Stylist &amp; Consulente d&apos;Immagine</p>
          <p className="font-serif italic text-[#C4965A]/80">
            Salon Emotion • Gallarate (VA)
          </p>
        </div>
      </div>
    </footer>
  );
}

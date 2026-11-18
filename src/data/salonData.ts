export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface ReelStep {
  number: string;
  title: string;
  description: string;
}

export interface PalmaresItem {
  id: string;
  location: string;
  title: string;
  subtitle: string;
  description: string;
  footer: string;
  category: 'premi' | 'moda-tv';
  featured?: boolean;
}

export interface TreatmentItem {
  id: string;
  title: string;
  descriptionHtml: string;
  imageUrl: string;
  youtubeEmbedUrl: string;
  youtubeId: string;
  durationLabel: string;
}

export interface BridalImage {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
}

export const BRAND_LOGO_URL =
  'https://100100siti.it/nicolevinti/wp-content/uploads/2026/10/Logo_Oro_No-Scritta_Nicole_Vinti.svg';

export const SOCIAL_LINKS = [
  {
    handle: '@nicole.vinti_official',
    url: 'https://www.instagram.com/nicole.vinti_official/',
  },
  {
    handle: '@nicole_vinti_bridalhairstylist',
    url: 'https://www.instagram.com/nicole_vinti_bridalhairstylist/',
  },
  {
    handle: '@nvfashioncollection',
    url: 'https://www.instagram.com/nvfashioncollection/',
  },
];

export const HERO_BANNER_IMAGE =
  'https://www.nicolevinti.it/uploads/image/homepage-banner.jpg';

export const HERO_PILLARS: PillarItem[] = [
  {
    number: '35+',
    title: 'Anni di Esperienza',
    description: 'Dedizione sartoriale e ricerca continua della forma.',
  },
  {
    number: '1° Premio',
    title: 'Londra Int. Hairdressing',
    description: "Riconoscimento all'eccellenza avanguardistica europea.",
  },
  {
    number: 'ICD Paris',
    title: 'Membro Intercoiffure Mondial',
    description: "L'élite internazionale dei maestri dell'acconciatura.",
  },
  {
    number: 'Backstage',
    title: 'Milano • Parigi Alta Moda',
    description: 'Balmain, Philipp Plein, Costume National, Sanremo.',
  },
];

export const NICOLE_PORTRAIT_URL =
  'https://100100siti.it/nicolevinti/wp-content/uploads/2026/10/Nicole-Vinti_2-1153x2048.jpg';

export const REEL_COVER_URL =
  'https://100100siti.it/nicolevinti/wp-content/uploads/2026/10/Copertina.png';

export const REEL_YOUTUBE_ID = 'y2Y3lPw_f9I';

export const REEL_STEPS: ReelStep[] = [
  {
    number: '01',
    title: 'Diagnosi e Mappatura Fisionomica',
    description:
      "Studio dell'ovale, della postura e della caduta naturale delle ciocche prima di iniziare qualsiasi detersione o trattamento.",
  },
  {
    number: '02',
    title: 'Rituale Olistico Hair SPA al Lavatesta',
    description:
      'Massaggio cutaneo polisensoriale con oli essenziali biologici e panni caldi profumati per decontrarre collo e cuoio capelluto.',
  },
  {
    number: '03',
    title: 'Taglio Sartoriale a Capello Naturale',
    description:
      'Scolpitura a forbice millimetrica a capello asciutto per calibrare i volumi reali e garantire una gestione spontanea a casa.',
  },
];

export const FILOSOFIA_QUOTES = [
  {
    text: 'La moda non è qualcosa che esiste solo negli abiti. La moda è nel cielo, nella strada, la moda ha a che fare con le idee, il nostro modo di vivere, che cosa sta accadendo.',
    author: '— Coco Chanel',
  },
  {
    text: 'La forma è tutto. È il segreto della vita.',
    author: '— Oscar Wilde',
  },
];

export const FILOSOFIA_IMAGE_URL =
  'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Beauty-Hair-SPA-Keratin-Treatment-Olaplex-e-Collagene-572x1024.jpeg';

export const PALMARES_ITEMS: PalmaresItem[] = [
  {
    id: 'roma',
    location: 'Roma',
    title: 'Italian Hairdressing Award',
    subtitle: 'Categoria Avant-Garde • Villa Miani',
    description:
      "Celebrazione della pura creatività scultorea e della tecnica d'avanguardia sul colle di Monte Mario, punto di riferimento per l'alta coiffure italiana.",
    footer: "Edizione Nazionale d'Eccellenza",
    category: 'premi',
    featured: true,
  },
  {
    id: 'londra',
    location: 'Londra',
    title: 'Premio Internazionale Londra',
    subtitle: '1° Classificato Global Hair Design',
    description:
      "Trionfo nella capitale mondiale della sperimentazione capillare, premiando l'armonia sartoriale e l'inedita combinazione di volumi e texture organiche.",
    footer: 'International Stylist Distinction',
    category: 'premi',
  },
  {
    id: 'parigi',
    location: 'Parigi',
    title: 'ICD Intercoiffure Mondial',
    subtitle: 'Membro Selezionato • Parigi',
    description:
      'Accesso al circuito mondiale ristretto ai migliori formatori nel settore del pianeta, garanzia di standard estetici e formativi di ineguagliabile eccellenza.',
    footer: 'Ordre de la Chevalerie Intercoiffure',
    category: 'premi',
  },
  {
    id: 'milano-parigi',
    location: 'Milano / Parigi',
    title: 'Runway Backstage Haute Couture',
    subtitle: 'Balmain • Philipp Plein • Costume National',
    description:
      'Realizzazione dei look editoriali per le sfilate prêt-à-porter e couture, dettando le tendenze che ispirano il panorama visivo internazionale.',
    footer: 'Official Backstage Hair Artist',
    category: 'moda-tv',
    featured: true,
  },
  {
    id: 'sanremo',
    location: 'Italia',
    title: 'Festival di Sanremo • TV Media',
    subtitle: 'Stylist per Cantanti e Celebrities',
    description:
      "La cura meticolosa dell'immagine sul palco dell'Ariston, creando acconciature capaci di resistere a luci teatrali ad alta definizione senza perdere leggerezza.",
    footer: 'Sanremo Music Festival Special Team',
    category: 'moda-tv',
  },
  {
    id: 'xfactor',
    location: 'Sky Italia',
    title: 'X-Factor & Talent Show',
    subtitle: 'Live Show Makeover',
    description:
      'Trasformazioni iconiche e character design per artisti emergenti e ospiti internazionali, combinando audacia contemporanea e precisione tecnica istantanea.',
    footer: 'Broadcasting & Entertainment Hair Direction',
    category: 'moda-tv',
  },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'hair-spa',
    title: 'Beauty & Hair SPA: Keratin Treatment, Olaplex e Collagene',
    descriptionHtml:
      'Rigenerazione profonda della fibra capillare con protocolli <strong>Olaplex</strong>, infusione di <strong>collagene</strong>, <strong>keratin treatment</strong> (trattamento alla <strong>cheratina</strong>) e ossigenoterapia distensiva per una chioma sana e luminosa.',
    imageUrl:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Beauty-Hair-SPA-Keratin-Treatment-Olaplex-e-Collagene-1143x2048.jpeg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/t0lBVeYLll0',
    youtubeId: 't0lBVeYLll0',
    durationLabel: 'Rituale SPA',
  },
  {
    id: 'extension',
    title: 'Extension Capelli e Infoltimento a Gallarate',
    descriptionHtml:
      "<strong>Parrucchiere specializzato in extension a Gallarate</strong> e punto di riferimento per l'<strong>allungamento capelli</strong> anche da <strong>Milano</strong>. Applicazione extension capelli veri e sistemi di <strong>infoltimento capelli</strong> micro-invisibili 7 stelle Hairdreams®.",
    imageUrl:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Extension-Capelli-e-Infoltimento-a-Gallarate-577x1024.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/aL58uFT9WXk',
    youtubeId: 'aL58uFT9WXk',
    durationLabel: 'Hairdreams® 7★',
  },
  {
    id: 'tagli-balayage',
    title:
      'Acconciature, Tagli Corti e Lunghi Donna, Balayage ed Effetti Luce Capelli',
    descriptionHtml:
      'Specialisti in tagli corti da donna, geometrie per <strong>capelli ricci</strong> e <strong>permanente riccia</strong> delicata, esaltati da <strong>balayage</strong>, <strong>shatush</strong>, <strong>gloss hair</strong> ed <strong>effetto luce sui capelli</strong> su misura.',
    imageUrl:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Acconciature-Tagli-Corti-e-Lunghi-Donna-Balayage-ed-Effetti-Luce-Capelli-572x1024.jpeg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/AhPg8n2A4rY',
    youtubeId: 'AhPg8n2A4rY',
    durationLabel: 'Taglio & Luce',
  },
  {
    id: 'sposa-couture',
    title: 'Parrucchiera Sposa & Haute Couture',
    descriptionHtml:
      "Servizio esclusivo di <strong>parrucchiere sposa</strong> con studio dell'<strong>acconciatura</strong>, cura della texture e assistenza dedicata in loco nel giorno del matrimonio.",
    imageUrl:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Parrucchiera-Sposa-Haute-Couture-1143x2048.jpeg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/JRysIuv6ie4',
    youtubeId: 'JRysIuv6ie4',
    durationLabel: 'Bridal Couture',
  },
];

export const BRIDAL_GALLERY: BridalImage[] = [
  {
    id: 'sposa-1',
    src: 'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-hair-stylist-matrimoni-gallarate-768x1024.jpg',
    fullSrc:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-hair-stylist-matrimoni-gallarate.jpg',
    alt: 'Sposa raffinata con acconciatura chic couture',
  },
  {
    id: 'sposa-2',
    src: 'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-parrucchiera-sposa-gallarate-768x1024.jpg',
    fullSrc:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-parrucchiera-sposa-gallarate.jpg',
    alt: 'Acconciatura sposa elegante Nicole Vinti Gallarate',
  },
  {
    id: 'sposa-3',
    src: 'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-hair-stylist-sposa-gallarate.jpg',
    fullSrc:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-hair-stylist-sposa-gallarate.jpg',
    alt: "Creazione bridal su misura per matrimonio d'eccellenza",
  },
  {
    id: 'sposa-4',
    src: 'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-parrucchiere-sposa-gallarate-768x1024.jpg',
    fullSrc:
      'https://100100siti.it/nicolevinti/wp-content/uploads/2026/11/Nicole-Vinti-parrucchiere-sposa-gallarate.jpg',
    alt: 'Acconciatura sposa alta moda con velo Nicole Vinti',
  },
];

export const ATELIER_HOURS = [
  { days: 'Martedì e Giovedì', time: '09:00 – 18:00', closed: false },
  { days: 'Mercoledì', time: '12:00 – 21:00', closed: false },
  { days: 'Venerdì', time: '09:00 – 19:00', closed: false },
  { days: 'Sabato', time: '08:00 – 18:00', closed: false },
  { days: 'Domenica e Lunedì', time: 'Chiuso / Privé Sposa', closed: true },
];

export const ATELIER_ADDRESS = 'Via E.Ferrario, 24, 21013 Gallarate (VA)';
export const ATELIER_MAPS_URL =
  'https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=it&sa=X&daddr=Via+E.Ferrario,+24,+21013+Gallarate+VA';
export const ATELIER_PHONE_DISPLAY = '+39 0331 777 600';
export const ATELIER_PHONE_HREF = 'tel:+390331777600';

export const EXTERNAL_LINKS = {
  home: 'https://100100siti.it/nicolevinti/',
  chiSono: 'https://100100siti.it/nicolevinti/chi-sono/',
  servizi: 'https://100100siti.it/nicolevinti/servizi/',
  matrimoni: 'https://100100siti.it/nicolevinti/matrimoni/',
  abbigliamento: 'https://100100siti.it/nicolevinti/abbigliamento/',
  galleria: 'https://100100siti.it/nicolevinti/galleria/',
  giftCard: 'https://100100siti.it/nicolevinti/gift-card/',
  contatti: 'https://100100siti.it/nicolevinti/contatti/',
  prenotaOra: 'https://100100siti.it/nicolevinti/prenota-ora/',
  barbaraRigolio: 'https://share.google/EOzoXEVU9Otobs7VQ',
};

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import {
  ATELIER_ADDRESS,
  ATELIER_HOURS,
  ATELIER_MAPS_URL,
  ATELIER_PHONE_DISPLAY,
  ATELIER_PHONE_HREF,
} from '../data/salonData';

export function PrenotazioneSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Inserisci il tuo Nome e Cognome.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 6) {
      setErrorMessage('Inserisci un recapito telefonico valido.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Inserisci un indirizzo email valido.');
      return;
    }
    if (!acceptedTerms) {
      setErrorMessage(
        'Accetta i termini e condizioni e la privacy policy per inviare la richiesta.'
      );
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setAcceptedTerms(false);
    setErrorMessage(null);
    setSubmitted(false);
  };

  return (
    <section
      id="prenotazione"
      className="relative overflow-hidden bg-[#FAF6F0] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top Split: Header + Atelier Card */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Section Header + Atmospheric Info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-8 lg:col-span-5"
          >
            <div className="text-center lg:text-left">
              <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                <span className="hidden h-[1px] w-8 bg-[#8C6239] lg:block" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8C6239]">
                  Esperienza Su Misura
                </span>
              </div>
              <h2 className="font-serif text-3xl font-normal leading-[1.15] text-[#1A1412] sm:text-4xl">
                Il Nostro Salone di Parrucchieri a Gallarate
              </h2>
              <p className="mt-5 text-[15px] font-light leading-[1.8] text-[#4A403A]">
                Scopri gli orari del nostro atelier di{' '}
                <strong>parrucchiere a Gallarate</strong> (comodamente raggiungibile da{' '}
                <strong>Milano e Varese</strong>) per tagli di capelli donna, tagli corti
                per donna, balayage, extension capelli e consulenza d&apos;immagine con
                Nicole Vinti.
              </p>
            </div>

            {/* Atelier Card */}
            <div className="flex flex-col justify-between rounded-xl border border-[#8C6239]/25 bg-[#F3ECE1] p-7 shadow-lg shadow-[#1A1412]/5 sm:p-9">
              <div className="flex flex-col items-center gap-6 text-center sm:items-stretch sm:text-left">
                <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C6239]">
                      Salon Emotion
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-medium text-[#1A1412]">
                      Gallarate
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8C6239]/25 bg-[#FAF6F0] text-[#8C6239]">
                    <MapPin className="h-4 w-4" />
                  </span>
                </div>

                <a
                  href={ATELIER_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 text-[15px] font-light text-[#4A403A] transition-colors hover:text-[#8C6239] sm:justify-start"
                >
                  <span className="border-b border-[#8C6239]/30 pb-0.5 group-hover:border-[#8C6239]">
                    {ATELIER_ADDRESS}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#8C6239]" />
                </a>

                <div className="flex w-full flex-col gap-3 border-t border-[#8C6239]/15 pt-5 text-left">
                  {ATELIER_HOURS.map((row) => (
                    <div
                      key={row.days}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="font-medium text-[#1A1412]">{row.days}</span>
                      {row.closed ? (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8C6239]">
                          {row.time}
                        </span>
                      ) : (
                        <span className="tabular-nums text-[#4A403A]">{row.time}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="w-full border-t border-[#8C6239]/15 pt-5">
                  <a
                    href={ATELIER_PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2.5 font-serif text-xl font-semibold tabular-nums text-[#1A1412] transition-colors hover:text-[#8C6239] sm:justify-start"
                  >
                    <Phone className="h-4 w-4 text-[#8C6239]" />
                    <span>{ATELIER_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>

              <div className="mt-7">
                <a
                  href={ATELIER_PHONE_HREF}
                  className="block w-full rounded-sm bg-[#1A1412] py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8C6239]"
                >
                  Chiama
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Booking / Info Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.15, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-xl border border-[#8C6239]/25 bg-[#F3ECE1]/65 p-7 shadow-xl shadow-[#1A1412]/5 sm:p-10 lg:col-span-7"
          >
            <div className="mb-8 text-center lg:text-left">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C6239]">
                Modulo di Richiesta
              </span>
              <h3 className="mt-1.5 font-serif text-2xl font-medium text-[#1A1412] sm:text-3xl">
                Richiedi informazioni
              </h3>
              <p className="mt-2.5 text-[15px] font-light leading-relaxed text-[#4A403A]">
                Compila il modulo qui di seguito per richiedere informazioni sui nostri
                servizi, corsi, prenotazioni o altro.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-1 flex-col items-center justify-center rounded-xl border border-[#8C6239]/30 bg-[#FAF6F0] p-8 text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#8C6239]/15 text-[#8C6239]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="font-serif text-2xl font-medium text-[#1A1412]">
                  Richiesta inviata con successo
                </h4>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[#4A403A]">
                  Grazie <strong>{name}</strong>. Il nostro team dell&apos;atelier di
                  Gallarate ti ricontatterà al numero <strong>{phone}</strong> per
                  organizzare la tua consulenza personalizzata.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 cursor-pointer rounded-sm border border-[#8C6239]/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8C6239] transition-colors hover:bg-[#8C6239] hover:text-[#FAF6F0]"
                >
                  Invia un&apos;altra richiesta
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nv-name"
                      className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]"
                    >
                      Nome &amp; Cognome *
                    </label>
                    <input
                      id="nv-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="es. Beatrice Borromeo"
                      className="rounded-sm border border-[#8C6239]/25 bg-[#FAF6F0] px-4 py-3 text-sm text-[#1A1412] placeholder:text-[#8E8278] focus:border-[#8C6239] focus:outline-none focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nv-phone"
                      className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]"
                    >
                      Recapito Telefonico *
                    </label>
                    <input
                      id="nv-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+39 340 0000000"
                      className="rounded-sm border border-[#8C6239]/25 bg-[#FAF6F0] px-4 py-3 text-sm text-[#1A1412] placeholder:text-[#8E8278] focus:border-[#8C6239] focus:outline-none focus:ring-1 focus:ring-[#8C6239]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nv-email"
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]"
                  >
                    Indirizzo Email
                  </label>
                  <input
                    id="nv-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@dominio.it"
                    maxLength={320}
                    className="rounded-sm border border-[#8C6239]/25 bg-[#FAF6F0] px-4 py-3 text-sm text-[#1A1412] placeholder:text-[#8E8278] focus:border-[#8C6239] focus:outline-none focus:ring-1 focus:ring-[#8C6239]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nv-notes"
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]"
                  >
                    Note Particolari o Desideri Specifici
                  </label>
                  <textarea
                    id="nv-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Raccontaci brevemente lo stato attuale della tua chioma o l'occasione speciale per cui ti prepari..."
                    className="resize-y rounded-sm border border-[#8C6239]/25 bg-[#FAF6F0] px-4 py-3 text-sm text-[#1A1412] placeholder:text-[#8E8278] focus:border-[#8C6239] focus:outline-none focus:ring-1 focus:ring-[#8C6239]"
                  />
                </div>

                <div className="pt-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1A1412]">
                    Termini e condizioni*
                  </p>
                  <label className="flex cursor-pointer items-start gap-3 text-sm font-light text-[#4A403A]">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-[#8C6239]/40 accent-[#8C6239]"
                    />
                    <span>Accetto i termini e condizioni e la privacy policy.</span>
                  </label>
                </div>

                {errorMessage && (
                  <p
                    role="alert"
                    className="rounded-sm border border-[#A63A2B]/30 bg-[#A63A2B]/10 px-4 py-2.5 text-xs font-medium text-[#7D2418]"
                  >
                    {errorMessage}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#1A1412] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] shadow-lg shadow-[#1A1412]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8C6239] sm:w-auto"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[#DFC39D]" />
                    <span>Invia Richiesta</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Award, Globe, Scissors, Sparkles, Tv, Star } from 'lucide-react';
import { PALMARES_ITEMS, PalmaresItem } from '../data/salonData';

function PalmaresIcon({ id }: { id: string }) {
  const cls = 'h-5 w-5 text-[#8C6239]';
  switch (id) {
    case 'roma':
      return <Award className={cls} strokeWidth={1.6} />;
    case 'londra':
      return <Star className={cls} strokeWidth={1.6} />;
    case 'parigi':
      return <Globe className={cls} strokeWidth={1.6} />;
    case 'milano-parigi':
      return <Scissors className={cls} strokeWidth={1.6} />;
    case 'sanremo':
      return <Sparkles className={cls} strokeWidth={1.6} />;
    default:
      return <Tv className={cls} strokeWidth={1.6} />;
  }
}

function SpotlightCard({
  item,
  index,
}: {
  item: PalmaresItem;
  index: number;
}) {
  const [coords, setCoords] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, active: false }))}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#8C6239]/20 bg-[#FAF6F0] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8C6239]/50 hover:shadow-xl hover:shadow-[#8C6239]/12 ${
        item.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Interactive Warm Gold Spotlight Sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: coords.active ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}% ${coords.y}%, rgba(196, 150, 90, 0.14), transparent 65%)`,
        }}
      />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#8C6239]/20 bg-[#F3ECE1] transition-colors group-hover:border-[#8C6239]/40">
            <PalmaresIcon id={item.id} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C6239]">
            {item.location}
          </span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-[#1A1412] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C6239]">
          {item.subtitle}
        </p>
        <p className="mt-4 text-[15px] font-light leading-[1.7] text-[#4A403A]">
          {item.description}
        </p>
      </div>

      <div className="relative mt-6 border-t border-[#8C6239]/15 pt-4 font-serif text-sm italic text-[#5A5049]">
        {item.footer}
      </div>
    </motion.div>
  );
}

export function PalmaresSection() {
  return (
    <section
      id="palmares"
      className="relative overflow-hidden bg-[#F3ECE1] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8C6239]">
            Una Storia di Successi Internazionali
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal leading-[1.15] text-[#1A1412] sm:text-4xl">
            Palmarès &amp; Collaborazioni d&apos;Alta Moda
          </h2>
          <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#4A403A]">
            Dal palco dei più prestigiosi trofei mondiali ai backstage delle fashion week
            di Milano e Parigi, fino alle scenografie televisive nazionali.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PALMARES_ITEMS.map((item, idx) => (
            <SpotlightCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { STATS, HERO_COLLAGE, IMAGES } from '../../constants/data';
import { smoothScrollTo } from '../../utils/smoothScroll';

interface HeroSectionProps {
  onOpenPPDB: () => void;
}

export default function HeroSection({ onOpenPPDB }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden" id="hero">
      {/* Background Campus Image (Sharp, High Opacity, Clearly Visible) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={IMAGES.campus}
          alt="Latar Belakang Gedung Kampus Yayasan Albakriatul Mudassirin Bogor"
          className="w-full h-full object-cover object-center"
        />
        {/* Crisp Gradient Wash for Text Readability without Blurring the Photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper/90 via-paper/55 to-paper/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left: Editorial Typography */}
        <motion.div
          className="lg:col-span-6 lg:pr-8 xl:pr-12 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-subtle border border-deep-forest/10 text-deep-forest text-xs font-medium tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-earthy-gold animate-pulse" />
            <span>Ekosistem Pendidikan Berkelanjutan • Usia Dini s/d Vokasi</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl editorial-title text-ink font-normal mb-8">
            Sebuah{' '}
            <span className="italic font-serif text-deep-forest font-semibold">
              Tumbuh Kembang
            </span>{' '}
            yang Utuh di Bumi Pasundan.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal mb-10 max-w-xl">
            Bukan sekadar sekolah, melainkan ritme pembiasaan adab dari jemari mungil yang
            menyusun balok, tutur lisan remaja yang melafalkan kalamullah, hingga kesiapan pemuda
            menguasai rekayasa teknologi di era digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#growth-journey"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#growth-journey', 76, 750);
              }}
              className="px-7 py-3.5 rounded-full bg-deep-forest text-paper font-medium text-sm tracking-wide hover:bg-forest-light transition-all flex items-center gap-3 group shadow-sm cursor-pointer"
            >
              <span>Telusuri Jejak Langkah</span>
              <ArrowDown className="w-4 h-4 text-earthy-gold transition-transform group-hover:translate-y-0.5" />
            </a>
            <button
              onClick={onOpenPPDB}
              className="px-6 py-3.5 rounded-full border border-deep-forest/20 text-deep-forest hover:bg-paper-warm font-medium text-sm transition-all flex items-center gap-2"
            >
              <span>Konsultasi &amp; Unduh Silabus</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-deep-forest/10 grid grid-cols-3 gap-6 text-left">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span
                  className={`block font-display text-2xl lg:text-3xl font-semibold ${
                    stat.color === 'gold' ? 'text-earthy-gold' : 'text-deep-forest'
                  }`}
                >
                  {stat.value}
                </span>
                <span className="block text-xs uppercase tracking-wider text-ink-muted mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Overlapping Asymmetrical Collage */}
        <motion.div
          className="lg:col-span-6 relative mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-earthy-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 left-10 w-80 h-80 rounded-full bg-deep-forest/10 blur-3xl pointer-events-none" />

            {/* Image 1: TK */}
            <div className="absolute top-0 left-0 w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-xl border-4 border-paper z-20 transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-1">
              <div className="relative aspect-[4/3] bg-paper-subtle">
                <img
                  alt={HERO_COLLAGE[0].alt}
                  className="w-full h-full object-cover"
                  src={HERO_COLLAGE[0].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className={`inline-block px-2 py-0.5 rounded ${HERO_COLLAGE[0].tagColor} text-[10px] uppercase font-bold tracking-wider mb-1`}>
                    {HERO_COLLAGE[0].tag}
                  </span>
                  <p className="font-serif text-sm font-medium leading-snug">
                    {HERO_COLLAGE[0].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2: SMP IT */}
            <div className="absolute top-24 sm:top-24 right-0 w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-paper z-30 transition-transform duration-500 hover:-translate-y-1.5 hover:-rotate-1">
              <div className="relative aspect-[4/3] bg-paper-subtle">
                <img
                  alt={HERO_COLLAGE[1].alt}
                  className="w-full h-full object-cover"
                  src={HERO_COLLAGE[1].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className={`inline-block px-2 py-0.5 rounded ${HERO_COLLAGE[1].tagColor} text-[10px] uppercase font-bold tracking-wider mb-1`}>
                    {HERO_COLLAGE[1].tag}
                  </span>
                  <p className="font-serif text-sm font-medium leading-snug">
                    {HERO_COLLAGE[1].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 3: SMK */}
            <div className="absolute bottom-2 sm:bottom-0 left-4 sm:left-8 md:left-12 w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-paper z-10 transition-transform duration-500 hover:-translate-y-1.5 hover:scale-[1.02]">
              <div className="relative aspect-[16/10] bg-paper-subtle">
                <img
                  alt={HERO_COLLAGE[2].alt}
                  className="w-full h-full object-cover"
                  src={HERO_COLLAGE[2].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded ${HERO_COLLAGE[2].tagColor} text-[10px] uppercase font-bold tracking-wider mb-1`}>
                        {HERO_COLLAGE[2].tag}
                      </span>
                      <p className="font-serif text-base font-semibold leading-tight">
                        {HERO_COLLAGE[2].caption}
                      </p>
                    </div>
                    {HERO_COLLAGE[2].extra && (
                      <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white/90 font-mono">
                        {HERO_COLLAGE[2].extra}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stamp Badge */}
            <div className="absolute -bottom-6 -right-2 z-40 bg-paper-warm border border-deep-forest/15 rounded-full p-4 shadow-lg text-center hidden sm:block">
              <div className="w-20 h-20 rounded-full border border-dashed border-deep-forest/40 flex flex-col items-center justify-center p-1 text-deep-forest">
                <span className="text-[9px] uppercase tracking-widest font-semibold">Tumbuh</span>
                <span className="font-serif text-xs font-bold text-earthy-gold">Utuh</span>
                <span className="text-[8px] tracking-tight text-ink-muted">12+ Tahun</span>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

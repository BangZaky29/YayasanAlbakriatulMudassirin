import { motion } from 'framer-motion';
import { MapPin, Copy } from 'lucide-react';
import { IMAGES } from '../../constants/data';

export default function CampusVibeSection() {
  const handleCopyCoords = () => {
    navigator.clipboard.writeText("6°31'44.3\"S 106°41'23.1\"E");
    alert('Koordinat disalin ke clipboard!');
  };

  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="campus-vibe">
      {/* Section Header */}
      <motion.div
        className="max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-deep-forest font-semibold">
          Suasana Kampus &amp; Geografis
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-ink font-normal mt-2 leading-tight">
          Asri di Alam Ciaruteun Ilir,{' '}
          <span className="italic font-serif text-deep-forest font-semibold">
            Sejuk &amp; Kondusif
          </span>{' '}
          untuk Menuntut Ilmu.
        </h2>
        <p className="text-sm text-ink-muted mt-4 leading-relaxed">
          Terletak di kawasan Cibungbulang, Kabupaten Bogor. Jauh dari hiruk pikuk polusi bising
          perkotaan, menghadirkan ketenangan jiwa santri dalam menghafal Al-Qur'an dan menelaah ilmu
          pengetahuan.
        </p>
      </motion.div>

      {/* Campus Visual Showcase */}
      <motion.div
        className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-deep-forest/10 mb-12 aspect-[16/8] sm:aspect-[21/9] bg-paper-subtle"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          alt="Gedung Kampus Terpadu Yayasan Albakriatul Mudassirin di Ciaruteun Ilir Bogor"
          className="w-full h-full object-cover"
          src={IMAGES.campus}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Caption */}
        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
          <div className="max-w-xl">
            <span className="px-2.5 py-1 rounded bg-deep-forest/80 backdrop-blur-md text-[11px] uppercase tracking-wider font-mono">
              Gerbang Utama &amp; Masjid Kampus
            </span>
            <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-medium mt-2">
              Kompleks Pendidikan Islam Terpadu Albakriatul Mudassirin
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 font-light">
              Ciaruteun Ilir, Kec. Cibungbulang, Kab. Bogor — Dikelilingi pepohonan tropis dan udara
              segar kaki Gunung Salak.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-xs text-white">
              <span className="block font-semibold">Luas Area Terbuka</span>
              <span className="text-[11px] text-white/70">Taman santri &amp; lapangan olahraga</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map & Directions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Location Details */}
        <motion.div
          className="lg:col-span-5 bg-paper rounded-3xl p-6 sm:p-8 border border-deep-forest/15 shadow-sm flex flex-col justify-between"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-subtle text-deep-forest text-xs font-mono font-medium">
              <MapPin className="w-3.5 h-3.5 text-earthy-gold" />
              <span>GPS: 6°31'44.3"S 106°41'23.1"E</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-ink font-semibold">
              SMP IT ALBAKRIATUL MUDASSIRIN
            </h4>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              FMCQ+9W7, Ciaruteun Ilir, Kec. Cibungbulang, Kabupaten Bogor, Jawa Barat 16630,
              Indonesia.
            </p>

            <div className="pt-2 space-y-2 text-xs text-ink-muted border-t border-deep-forest/10">
              <div className="flex items-center justify-between py-1">
                <span>Akses Angkutan:</span>
                <span className="font-medium text-ink">Jalur Utama Kampus Ciaruteun</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Waktu Kunjungan:</span>
                <span className="font-medium text-ink">Senin - Sabtu (08.00 - 15.30 WIB)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Parkir &amp; Akses:</span>
                <span className="font-medium text-ink">Tersedia area roda 2 &amp; roda 4</span>
              </div>
            </div>
          </div>

          {/* Map Actions */}
          <div className="pt-6 mt-6 border-t border-deep-forest/10 flex items-center gap-3">
            <a
              href="https://maps.google.com/?q=-6.528972,106.689750"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-deep-forest text-paper text-xs font-semibold text-center hover:bg-forest-light transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-earthy-gold" />
              <span>Petunjuk Arah (Google Maps)</span>
            </a>
            <button
              onClick={handleCopyCoords}
              className="p-3 rounded-xl border border-deep-forest/20 text-deep-forest hover:bg-paper-warm transition-colors"
              title="Salin Koordinat"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right: Stylized Map */}
        <motion.div
          className="lg:col-span-7 bg-paper-subtle rounded-3xl p-6 border border-deep-forest/15 relative overflow-hidden flex flex-col justify-between"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-medium text-deep-forest">
              Wilayah Cibungbulang — Bogor Barat
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white text-[10px] font-semibold text-deep-forest border border-deep-forest/10">
              Radius Strategis
            </span>
          </div>

          {/* Map Visual */}
          <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-white border border-deep-forest/10 flex items-center justify-center p-6 text-center">
            {/* Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-map" patternUnits="userSpaceOnUse" width="40" height="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#09452b" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect fill="url(#grid-map)" width="100%" height="100%" />
              <path d="M-20,180 Q140,80 320,160 T680,90" fill="none" stroke="#d97706" strokeDasharray="6 4" strokeWidth="2.5" />
              <path d="M100,-20 Q240,140 400,280" fill="none" stroke="#09452b" strokeWidth="2" />
            </svg>

            {/* Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-deep-forest text-earthy-gold flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="mt-3 bg-deep-forest text-white px-4 py-2 rounded-xl shadow-md text-xs font-sans">
                <p className="font-bold">Yayasan Albakriatul Mudassirin</p>
                <p className="text-[10px] text-earthy-gold">Ciaruteun Ilir, Cibungbulang</p>
              </div>
            </div>

            {/* Route Badges */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-mono text-ink border border-deep-forest/10">
              📍 25 Menit dari Kampus IPB Dramaga
            </div>
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-mono text-ink border border-deep-forest/10">
              🚌 Angkutan Leuwiliang - Ciaruteun
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-ink-muted gap-2">
            <span>
              Koordinat Akurat: <strong>6°31'44.3"S 106°41'23.1"E</strong>
            </span>
            <span className="text-deep-forest font-semibold">Tersedia Parkir Luas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
